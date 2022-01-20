package node

import (
	"context"
	"net"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"

	"github.com/kataras/golog"
	"github.com/libp2p/go-libp2p-core/crypto"
	"github.com/libp2p/go-libp2p-core/host"
	"github.com/libp2p/go-libp2p-core/network"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/protocol"
	"github.com/libp2p/go-libp2p-core/routing"
	dht "github.com/libp2p/go-libp2p-kad-dht"
	"github.com/sonr-io/sonr/core/device"
	did "github.com/sonr-io/sonr/core/did"
	common "github.com/sonr-io/sonr/x/registry/types"
	"github.com/spf13/viper"

	"google.golang.org/protobuf/proto"

	ps "github.com/libp2p/go-libp2p-pubsub"
)

var (
	logger   = golog.Default.Child("core/node")
	ctx      context.Context
	instance NodeImpl
)

// NodeImpl returns the NodeImpl for the Main Node
type NodeImpl interface {
	// AuthenticateMessage authenticates a message
	AuthenticateMessage(msg proto.Message, metadata *common.Metadata) bool

	// Close closes the node
	Close()

	// Connect to a peer
	Connect(pi peer.AddrInfo) error

	// Did returns the DID of the node
	Did() did.DID

	// HasRouting returns true if the node has routing
	HasRouting() error

	// HostID returns the ID of the Host
	HostID() peer.ID

	// Join subsrcibes to a topic
	Join(topic string, opts ...ps.TopicOpt) (*ps.Topic, error)

	// NewStream opens a new stream to a peer
	NewStream(ctx context.Context, pid peer.ID, pids ...protocol.ID) (network.Stream, error)

	// NewTopic creates a new pubsub topic with event handler and subscription
	NewTopic(topic string, opts ...ps.TopicOpt) (*ps.Topic, *ps.TopicEventHandler, *ps.Subscription, error)

	// NeedsWait checks if state is Resumed or Paused and blocks channel if needed
	NeedsWait()

	// ParseDid parses a DID
	ParseDid(did string) (*did.Did, error)

	// Pause tells all of goroutines to pause execution
	Pause()

	// Ping sends a ping to a peer to check if it is alive
	Ping(id string) error

	// Peer returns the peer of the node
	Peer() (*common.Peer, error)

	// Profile returns the profile of the node from Local Store
	Profile() (*common.Profile, error)

	// Publish publishes a message to a topic
	Publish(topic string, msg proto.Message, metadata *common.Metadata) error

	// ResolveDid resolves a DID
	ResolveDid(did string) (*did.DidDocument, error)

	// Resume tells all of goroutines to resume execution
	Resume()

	// Role returns the role of the node
	Role() Role

	// Router returns the routing.Router
	Router(h host.Host) (routing.PeerRouting, error)

	// SendMessage sends a message to a peer
	SendMessage(id peer.ID, p protocol.ID, data proto.Message) error

	// SetStreamHandler sets the handler for a protocol
	SetStreamHandler(protocol protocol.ID, handler network.StreamHandler)

	// SignData signs the data with the private key
	SignData(data []byte) ([]byte, error)

	// SignMessage signs a message with the node's private key
	SignMessage(message proto.Message) ([]byte, error)

	// VerifyData verifies the data signature
	VerifyData(data []byte, signature []byte, peerId peer.ID, pubKeyData []byte) bool
}

// node type - a p2p host implementing one or more p2p protocols
type node struct {
	// Standard Node Implementation
	host.Host
	NodeImpl
	mode Role

	// Host and context
	connection   common.Connection
	listener     net.Listener
	privKey      crypto.PrivKey
	mdnsPeerChan chan peer.AddrInfo
	dhtPeerChan  <-chan peer.AddrInfo

	// Properties
	ctx    context.Context
	pubKey crypto.PubKey
	did    did.DID
	*dht.IpfsDHT
	*ps.PubSub

	// State
	flag   uint64
	Chn    chan bool
	status HostStatus
}

// NewMotor Creates a node with its implemented protocols
func NewMotor(ctx context.Context, l net.Listener, options ...Option) (NodeImpl, error) {
	// Initialize DHT
	opts := defaultOptions(Role_MOTOR)
	node, err := opts.Apply(ctx, options...)
	if err != nil {
		return nil, err
	}

	// Initialize Discovery for MDNS
	node.createMdnsDiscovery(opts)
	node.SetStatus(Status_READY)
	go node.Serve()

	// Open Store with profileBuf
	return node, nil
}

func (n *node) Did() did.DID {
	return n.did
}

// HostID returns the ID of the Host
func (n *node) HostID() peer.ID {
	return n.Host.ID()
}

// Ping sends a ping to the peer
func (n *node) Ping(pid string) error {
	return nil
}

// Publish publishes a message to the network
func (n *node) Publish(t string, message proto.Message, metadata *common.Metadata) error {
	return nil
}

// Role returns the role of the node
func (n *node) Role() Role {
	return n.mode
}

// Persist contains the main loop for the Node
func Persist(l net.Listener) {
	if instance == nil {
		golog.Error("Node instance is nil")
		return
	}

	golog.Default.Child("(app)").Infof("Starting GRPC Server on %s", l.Addr().String())
	// Check if CLI Mode
	if device.IsMobile() {
		golog.Default.Child("(app)").Info("Skipping Serve, Node is mobile...")
		return
	}

	// Wait for Exit Signal
	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		if instance == nil {
			golog.Default.Child("(app)").Debug("Skipping Exit, instance is nil...")
			return
		}
		golog.Default.Child("(app)").Debug("Cleaning up Node on Exit...")
		instance.Close()

		defer ctx.Done()

		// Check for Full Desktop Node
		if device.IsDesktop() {
			golog.Default.Child("(app)").Debug("Removing Bitcask DB...")
			ex, err := os.Executable()
			if err != nil {
				golog.Default.Child("(app)").Errorf("%s - Failed to find Executable", err)
				return
			}

			// Delete Executable Path
			exPath := filepath.Dir(ex)
			err = os.RemoveAll(filepath.Join(exPath, "sonr_bitcask"))
			if err != nil {
				golog.Default.Child("(app)").Warn("Failed to remove Bitcask, ", err)
			}
			err = viper.SafeWriteConfig()
			if err == nil {
				golog.Default.Child("(app)").Debug("Wrote new config file to Disk")
			}
			os.Exit(0)
		}
	}()

	// Hold until Exit Signal
	for {
		select {
		case <-ctx.Done():
			golog.Default.Child("(app)").Info("Context Done")
			l.Close()
			return
		}
	}
}
