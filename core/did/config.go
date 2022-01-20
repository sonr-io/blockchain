package did

import (
	"strings"

	v1 "github.com/sonr-io/sonr/x/registry/types"
)

type Did = v1.Did

type NetworkType = v1.NetworkType

type Option = v1.Option

type Service = v1.Service

type ServiceProtocol = v1.ServiceProtocol

type VerificationMethod = v1.VerificationMethod

// WithFragment adds a fragment to a DID
func WithFragment(fragment string) Option {
	return func(d *Did) {
		fragment := strings.SplitAfter(fragment, "#")
		d.Fragment = v1.ToFragment(fragment[1])
	}
}

// WithNetwork adds a network to a DID
func WithNetwork(network string) Option {
	return func(d *Did) {
		// Check if the network is valid
		if ok := v1.IsFragment(network); ok {
			// Check if the network is mainnet
			if network == "mainnet:" {
				network = ":"
			}

			// Check if the network has a trailing colon
			if v1.ContainsString(network, ":") {
				d.Network = network
			} else {
				d.Network = network + ":"
			}
		} else {
			d.Network = "testnet:"
		}
	}
}

// WithPathSegments adds a paths to a DID
func WithPathSegments(p ...string) Option {
	return func(d *Did) {
		d.Paths = p
	}
}

// WithQuery adds a query to a DID
func WithQuery(query string) Option {
	return func(d *Did) {
		query := strings.SplitAfter(query, "?")
		d.Query = query[1]
	}
}
