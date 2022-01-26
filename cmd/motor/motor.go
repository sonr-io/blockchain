package motor

import (
	"context"

	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/kataras/golog"
	"github.com/sonr-io/sonr/pkg/crypto"
	"github.com/sonr-io/sonr/pkg/p2p"
)

type MotorStub struct {
}

// Start starts the host, node, and rpc service.
func Start(reqBuf []byte) {
	ctx := context.Background()
	ks, _, err := crypto.GenerateKeyring("test", keyring.NewInMemory())
	if err != nil {
		golog.Fatal(err)
	}

	//Start the app
	_, err = p2p.NewHost(ctx, ks.CryptoPrivKey())
	if err != nil {
		golog.Fatal("%s - Failed to start host: %s", err)
	}

}

// Pause pauses the host, node, and rpc service.
func Pause() {
	// node.Pause()
}

// Resume resumes the host, node, and rpc service.
func Resume() {
	// node.Resume()
}

// Stop closes the host, node, and rpc service.
func Stop() {
	// node.Exit(0)
}
