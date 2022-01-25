package highway

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"
	"time"

	"github.com/kataras/golog"
	"github.com/sonr-io/sonr/pkg/p2p"

	channel "github.com/sonr-io/sonr/x/channel/service"
	"github.com/spf13/viper"
	hw "go.buf.build/grpc/go/sonr-io/highway/v1"

	"github.com/tendermint/starport/starport/pkg/cosmosclient"
	"google.golang.org/grpc"
)

// Error Definitions
var (
	logger                 = golog.Default.Child("node/highway")
	ErrEmptyQueue          = errors.New("No items in Transfer Queue.")
	ErrInvalidQuery        = errors.New("No SName or PeerID provided.")
	ErrMissingParam        = errors.New("Paramater is missing.")
	ErrProtocolsNotSet     = errors.New("Node Protocol has not been initialized.")
	ErrMethodUnimplemented = errors.New("Method is not implemented.")
	Stub                   *HighwayStub
)

// HighwayStub is the RPC Service for the Custodian Node.
type HighwayStub struct {
	hw.HighwayServiceServer
	Host p2p.HostImpl
	// node   *node.Highway
	cosmos cosmosclient.Client

	// Properties
	ctx      context.Context
	grpc     *grpc.Server
	http     *http.Server
	listener net.Listener

	// Configuration
	// ipfs *storage.IPFSService

	// List of Entries
	channels map[string]channel.Channel
}

func init() {
	// Sets the default values for the configuration.
	viper.SetConfigName("sonr")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".")
	viper.AddConfigPath(".")
	viper.AutomaticEnv()

	viper.SetDefault("sonr.address", ":")
	viper.SetDefault("sonr.port", 3000)
	viper.SetDefault("sonr.did", "")
	viper.SetDefault("sonr.network", "tcp")
	viper.SetDefault("ipfs.port", 4001)
	viper.SetDefault("ipfs.path", "/ipfs")
	viper.SetDefault("libp2p.lowWater", 200)
	viper.SetDefault("libp2p.highWater", 400)
	viper.SetDefault("libp2p.rendevouz", "/sonr/rendevouz/0.9.2")
	viper.SetDefault("libp2p.bootstrap.peers", []string{
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
		"/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
		"/ip4/104.131.131.82/udp/4001/quic/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
	})
}

func main() {
	viper.ReadInConfig()
	ctx := context.Background()

	// Declare var
	SonrAddress := viper.GetString("sonr.address")
	SonrPort := viper.GetInt("sonr.port")
	SonrNetwork := viper.GetString("sonr.network")
	Libp2pLowWater := viper.GetInt("libp2p.lowWater")
	Libp2pHighWater := viper.GetInt("libp2p.highWater")
	Libp2pRendevouz := viper.GetString("libp2p.rendevouz")

	// Create the main listener.
	l, err := net.Listen(SonrNetwork, fmt.Sprintf("%s:%d", SonrAddress, SonrPort))
	if err != nil {
		log.Fatal(err)
	}

	h, err := p2p.NewHost(ctx,
		p2p.WithConnOptions(Libp2pLowWater, Libp2pHighWater, time.Second*20),
		p2p.WithRendevouz(Libp2pRendevouz),
	)
	if err != nil {
		log.Fatal(err)
	}

	// Create a cmux.
	stub, err := NewHighwayRPC(ctx, l, h)
	if err != nil {
		panic(err)
	}
	Stub = stub
}

// NewHighway creates a new Highway service stub for the node.
func NewHighwayRPC(ctx context.Context, l net.Listener, h p2p.HostImpl) (*HighwayStub, error) {
	// create an instance of cosmosclient
	cosmos, err := cosmosclient.New(ctx)
	if err != nil {
		return nil, err
	}

	// Create the RPC Service
	stub := &HighwayStub{
		Host:     h,
		ctx:      ctx,
		grpc:     grpc.NewServer(),
		cosmos:   cosmos,
		listener: l,
	}

	// // Set IPFS Service
	// stub.ipfs, err = storage.Init()
	// if err != nil {
	// 	return nil, err
	// }
	// Register the RPC Service

	hw.RegisterHighwayServiceServer(stub.grpc, stub)
	go stub.Serve(ctx, l)
	return stub, nil
}

// Serve serves the RPC Service on the given port.
func (s *HighwayStub) Serve(ctx context.Context, listener net.Listener) {
	// Start HTTP server (and proxy calls to gRPC server endpoint)
	if err := http.ListenAndServe(":8081", s.grpc); err != nil {
		logger.Errorf("%s - Failed to start HTTP server", err)
	}

	for {
		// Stop Serving if context is done
		select {
		case <-ctx.Done():
			// s.node.Close()
			return
		}
	}
}
