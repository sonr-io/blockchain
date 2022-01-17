package service

import (
	object "github.com/sonr-io/sonr/core/object/v1"
	v1 "github.com/sonr-io/sonr/core/service/v1"
	did "github.com/sonr-io/sonr/did/v1"
)

// Option is a function that can be used to configure a ServiceConfig.
type Option func(*v1.ServiceConfig)

// WithDescription is a Service Option that sets the service description.
func WithDescription(d string) Option {
	return func(c *v1.ServiceConfig) {
		c.Description = d
	}
}

// WithOwner is a Service Option that sets the service owner with a Did
// and a public key.
func WithOwner(did *did.Did) Option {
	return func(c *v1.ServiceConfig) {
		c.Owner = did
	}
}

// WithId is a Service Option that sets the service tags.
func WithId(did *did.Did) Option {
	return func(c *v1.ServiceConfig) {
		c.Owner = did
	}
}

// WithChannels is a Service Option that sets the service channels.
func WithChannels(channels ...*did.Did) Option {
	return func(c *v1.ServiceConfig) {
		c.Channels = channels
	}
}

// WithBuckets is a Service Option that sets the service buckets.
func WithBuckets(buckets ...*did.Did) Option {
	return func(c *v1.ServiceConfig) {
		c.Buckets = buckets
	}
}

// WithObjects is a Service Option that sets the service objects.
func WithObjects(objects ...*object.ObjectDoc) Option {
	// Create Objects map from objects
	objectsMap := make(map[string]*object.ObjectDoc)
	for _, o := range objects {
		objectsMap[o.GetDid().ToString()] = o
	}

	// Return option
	return func(c *v1.ServiceConfig) {
		c.Objects = objectsMap
	}
}

// WithEndpoints is a Service Option that sets the service endpoints.
func WithEndpoints(endpoints ...string) Option {
	return func(c *v1.ServiceConfig) {
		c.Endpoints = endpoints
	}
}

// WithMetadata is a Service Option that sets the service metadata.
func WithMetadata(metadata map[string]string) Option {
	return func(c *v1.ServiceConfig) {
		c.Metadata = metadata
	}
}

// WithVersion is a Service Option that sets the service version.
func WithVersion(version string) Option {
	return func(c *v1.ServiceConfig) {
		c.Version = version
	}
}

func defaultConfig() *v1.ServiceConfig {
	return &v1.ServiceConfig{
		Name:        "",
		Description: "",
		Owner:       nil,
		Did:         nil,
		Channels:    []*did.Did{},
		Buckets:     []*did.Did{},
		Objects:     make(map[string]*object.ObjectDoc),
		Endpoints:   []string{},
		Metadata:    make(map[string]string),
		Version:     "0.0.1",
	}
}
