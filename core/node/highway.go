package node

import (
	"context"
	"errors"
	"net"

	"github.com/cosmos/cosmos-sdk/types"
	"github.com/kataras/golog"
	"github.com/tendermint/starport/starport/pkg/cosmosclient"
)

// Highway provides a high-level interface to the "highway" role node.
type Highway struct {
	NodeImpl
	cosmos      cosmosclient.Client
	listener    net.Listener
	address     types.AccAddress
	accountName string
}

// NewHighway Creates a node with its implemented protocols
func NewHighway(ctx context.Context, options ...Option) (*Highway, error) {
	// Check if Node is already running
	if instance != nil {
		golog.Error("Sonr Instance already active")
		return nil, errors.New("Sonr Instance already active")
	}

	// Initialize DHT
	opts := defaultOptions(Role_HIGHWAY)
	node, err := opts.Apply(ctx, options...)
	if err != nil {
		return nil, err
	}

	// Open Listener on Port
	l, err := net.Listen(opts.network, opts.Address())
	if err != nil {
		golog.Default.Child("(app)").Fatalf("%s - Failed to Create New Listener", err)
		return nil, err
	}

	// create an instance of cosmosclient
	cosmos, err := cosmosclient.New(context.Background())
	if err != nil {
		return nil, err
	}

	// get account from the keyring by account name and return a bech32 address
	address, err := cosmos.Address(opts.accountName)
	if err != nil {
		return nil, err
	}

	highway := &Highway{
		NodeImpl:    node,
		listener:    l,
		cosmos:      cosmos,
		address:     address,
		accountName: opts.accountName,
	}

	// create an instance of cosmosclient
	highway.cosmos, err = cosmosclient.New(context.Background())
	if err != nil {
		return nil, err
	}

	// Initialize Discovery for MDNS
	node.createMdnsDiscovery(opts)
	node.SetStatus(Status_READY)
	go node.Serve()
	Persist(highway.listener)
	return highway, nil
}
