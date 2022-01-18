package motor

import (
	"context"
	"fmt"
	"net"

	"github.com/kataras/golog"
	"github.com/sonr-io/sonr/core/node"
	v1 "github.com/sonr-io/sonr/motor/v1"
	"google.golang.org/protobuf/proto"
)

var (
	n node.NodeImpl
)

// Start starts the host, node, and rpc service.
func Start(reqBuf []byte) {

	// Unmarshal request
	req := &v1.InitializeRequest{}
	if err := proto.Unmarshal(reqBuf, req); err != nil {
		golog.Warn("%s - Failed to unmarshal InitializeRequest. Using defaults...", err)
	}

	// Open Listener on Port
	l, err := net.Listen("tcp", fmt.Sprintf("%s%d", ":", 26225))
	if err != nil {
		golog.Default.Child("(app)").Fatalf("%s - Failed to Create New Listener", err)
		panic(err)
	}

	// Start the app
	n, err = node.NewMotor(context.Background(), l)
	if err != nil {
		golog.Default.Child("(app)").Fatalf("%s - Failed to Create New Motor Node", err)
		panic(err)
	}

}

// Pause pauses the host, node, and rpc service.
func Pause() {
	n.Pause()
}

// Resume resumes the host, node, and rpc service.
func Resume() {
	n.Resume()
}

// Stop closes the host, node, and rpc service.
func Stop() {
	n.Close()
}
