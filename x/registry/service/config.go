package service

import (
	"log"
	"strings"

	o "github.com/sonr-io/sonr/x/object/types"
	"github.com/sonr-io/sonr/x/registry/types"
	v1 "github.com/sonr-io/sonr/x/registry/types"
)

// Did is a DID object from the registry types
type Did = v1.Did

// NetworkType is a Service Option that sets the service network type.
type NetworkType = v1.NetworkType

// Option is a function that sets a service option.
type Option = v1.Option

// ServiceProtocol is a Service Option that sets the service protocol.
type ServiceProtocol = v1.ServiceProtocol

// VerificationMethod is a Service Option that sets the service verification method.
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

// Option is a function that can be used to configure a ServiceConfig.
type ServiceOption func(*types.ServiceConfig)

// WithDescription is a Service Option that sets the service description.
func WithDescription(d string) ServiceOption {
	return func(c *types.ServiceConfig) {
		c.Description = d
	}
}

// WithOwner is a Service Option that sets the service owner with a Did
// and a public key.
func WithMaintainers(dids ...*types.Did) ServiceOption {
	return func(c *types.ServiceConfig) {
		c.Maintainers = dids
	}
}

// WithChannels is a Service Option that sets the service channels.
func WithChannels(channels ...*types.Did) ServiceOption {
	return func(c *types.ServiceConfig) {
		c.Channels = channels
	}
}

// WithBuckets is a Service Option that sets the service buckets.
func WithBuckets(buckets ...*types.Did) ServiceOption {
	return func(c *types.ServiceConfig) {
		for _, b := range buckets {
			c.Buckets = append(c.Buckets, b)
		}
	}
}

// WithObjects is a Service Option that sets the service objects.
func WithObjects(objects ...*o.ObjectDoc) ServiceOption {
	// Create Objects map from objects
	objectsMap := make(map[string]*o.ObjectDoc)
	for _, o := range objects {
		id, err := FromString(o.GetDid())
		if err != nil {
			log.Println(err)
			continue
		}
		objectsMap[id.ToString()] = o
	}

	// Return option
	return func(c *types.ServiceConfig) {
		c.Objects = objectsMap
	}
}

// WithEndpoints is a Service Option that sets the service endpoints.
func WithEndpoints(endpoints ...string) ServiceOption {
	return func(c *types.ServiceConfig) {
		c.Endpoints = endpoints
	}
}

// WithMetadata is a Service Option that sets the service metadata.
func WithMetadata(metadata map[string]string) ServiceOption {
	return func(c *types.ServiceConfig) {
		c.Metadata = metadata
	}
}

// WithVersion is a Service Option that sets the service version.
func WithVersion(version string) ServiceOption {
	return func(c *types.ServiceConfig) {
		c.Version = version
	}
}

// defaultConfig is the default service configuration.
func defaultConfig() *types.ServiceConfig {
	return &types.ServiceConfig{
		Name:        "",
		Description: "",
		Maintainers: []*types.Did{},
		Did:         nil,
		Channels:    []*types.Did{},
		Buckets:     []*types.Did{},
		Objects:     make(map[string]*o.ObjectDoc),
		Endpoints:   []string{},
		Metadata:    make(map[string]string),
		Version:     "0.0.1",
	}
}
