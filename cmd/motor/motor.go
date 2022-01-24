package motor

// Start starts the host, node, and rpc service.
func Start(reqBuf []byte) {
	// ctx := context.Background()
	// // Unmarshal request
	// req := &motor.InitializeRequest{}
	// if err := proto.Unmarshal(reqBuf, req); err != nil {
	// 	golog.Warn("%s - Failed to unmarshal InitializeRequest. Using defaults...", err)
	// }

	// //Start the app
	// h, err := p2p.NewHost(ctx)
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
