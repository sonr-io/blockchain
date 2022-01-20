package registry

import (
	"log"

	"github.com/sonr-io/sonr/core/did"
	"github.com/sonr-io/sonr/x/registry/types"

	o "github.com/sonr-io/sonr/x/object/types"
)

// Option is a function that can be used to configure a ServiceConfig.
type Option func(*types.ServiceConfig)

// WithDescription is a Service Option that sets the service description.
func WithDescription(d string) Option {
	return func(c *types.ServiceConfig) {
		c.Description = d
	}
}

// WithOwner is a Service Option that sets the service owner with a Did
// and a public key.
func WithMaintainers(dids ...*did.Did) Option {
	return func(c *types.ServiceConfig) {
		c.Maintainers = dids
	}
}

// WithChannels is a Service Option that sets the service channels.
func WithChannels(channels ...*did.Did) Option {
	return func(c *types.ServiceConfig) {
		c.Channels = channels
	}
}

// WithBuckets is a Service Option that sets the service buckets.
func WithBuckets(buckets ...did.DID) Option {
	return func(c *types.ServiceConfig) {
		for _, b := range buckets {
			c.Buckets = append(c.Buckets, b.ToRegistryProto())
		}
	}
}

// WithObjects is a Service Option that sets the service objects.
func WithObjects(objects ...*o.ObjectDoc) Option {
	// Create Objects map from objects
	objectsMap := make(map[string]*o.ObjectDoc)
	for _, o := range objects {
		id, err := did.FromString(o.GetDid())
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
func WithEndpoints(endpoints ...string) Option {
	return func(c *types.ServiceConfig) {
		c.Endpoints = endpoints
	}
}

// WithMetadata is a Service Option that sets the service metadata.
func WithMetadata(metadata map[string]string) Option {
	return func(c *types.ServiceConfig) {
		c.Metadata = metadata
	}
}

// WithVersion is a Service Option that sets the service version.
func WithVersion(version string) Option {
	return func(c *types.ServiceConfig) {
		c.Version = version
	}
}

func defaultConfig() *types.ServiceConfig {
	return &types.ServiceConfig{
		Name:        "",
		Description: "",
		Maintainers: []*did.Did{},
		Did:         nil,
		Channels:    []*did.Did{},
		Buckets:     []*did.Did{},
		Objects:     make(map[string]*o.ObjectDoc),
		Endpoints:   []string{},
		Metadata:    make(map[string]string),
		Version:     "0.0.1",
	}
}
