package service

import "fmt"

// Option is a configuration option for the IPFS service
type Option func(o *options)

// WithAddress sets the address for the IPFS service
func WithAddress(address string) Option {
	return func(o *options) {
		o.address = address
	}
}

// WithPort sets the port for the IPFS service
func WithPort(port int) Option {
	return func(o *options) {
		o.port = port
	}
}

// options is the configuration for the IPFS service
type options struct {
	address string
	port    int
}

// defaultOptions is the default configuration for the IPFS service
func defaultOptions() *options {
	return &options{
		port:    5001,
		address: "localhost",
	}
}

// NodeAddress returns the address of the IPFS node
func (o *options) NodeAddress() string {
	return fmt.Sprintf("%s:%d", o.address, o.port)
}
