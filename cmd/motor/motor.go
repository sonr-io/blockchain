package motor

type MotorStub struct {
}

// Start starts the host, node, and rpc service.
func Start(reqBuf []byte) {
	//	ctx := context.Background()

	//Start the app
	// _, err = p2p.NewHost(ctx, ks.CryptoPrivKey())
	// if err != nil {
	// 	golog.Fatal("%s - Failed to start host: %s", err)
	// }

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
