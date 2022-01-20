package registry

import (
	"os"

	"github.com/sonr-io/sonr/core/did"
	o "github.com/sonr-io/sonr/x/object/types"
	"github.com/sonr-io/sonr/x/registry/types"
)

type Service interface {
	// GetConfig returns the service configuration.
	GetConfig() *types.ServiceConfig

	// GetName returns the service name.
	GetName() string

	// GetPath returns the service path.
	GetPath() string

	// GetMaintainers returns the service DID.
	GetMaintainers() []*did.Did

	// AddChannel adds a channel to the service.
	AddChannel(channel string)

	// AddBucket adds a bucket to the service.
	AddBucket(buckets string)

	// AddObject adds an object to the service.
	AddObject(object *o.ObjectDoc)

	// RemoveChannel removes a channel from the service.
	RemoveChannel(channel *did.Did)

	// RemoveBucket removes a bucket from the service.
	RemoveBucket(bucket *did.Did)

	// RemoveObject removes an object from the service.
	RemoveObject(object *o.ObjectDoc)

	// GetChannels returns the service channels.
	GetChannels() []*did.Did

	// GetBuckets returns the service buckets.
	GetBuckets() []*did.Did

	// GetObjects returns the service objects.
	GetObjects() map[string]*o.ObjectDoc

	// Save saves the service configuration.
	Save() error
}

type service struct {
	Service
	config *types.ServiceConfig
	path   string
	name   string
}

// NewService creates a new Sonr service, and creates a config for it.
// Requires name and path to be set.
func NewService(name, path string, opts ...Option) Service {
	c := &types.ServiceConfig{}
	for _, opt := range opts {
		opt(c)
	}

	return &service{
		config: c,
		path:   path,
		name:   name,
	}
}

// GetConfig returns the service configuration.
func (s *service) GetConfig() *types.ServiceConfig {
	return s.config
}

// GetName returns the service name.
func (s *service) GetName() string {
	return s.name
}

// GetPath returns the service path.
func (s *service) GetPath() string {
	return s.path
}

// GetDid returns the service DID.
func (s *service) GetMaintainers() []*did.Did {
	return s.config.Maintainers
}

// AddChannel adds a channel to the service.
func (s *service) AddChannel(d string) {
	id, err := did.FromString(d)
	if err != nil {
		return
	}

	s.config.Channels = append(s.config.Channels, id.ToProto())
}

// AddBucket adds a bucket to the service.
func (s *service) AddBucket(d string) {
	id, err := did.FromString(d)
	if err != nil {
		return
	}
	s.config.Buckets = append(s.config.Buckets, id.ToProto())
}

// AddObject adds an object to the service.
func (s *service) AddObject(o *o.ObjectDoc) {
	s.config.Objects[o.GetDid()] = o
}

// RemoveChannel removes a channel from the service.
func (s *service) RemoveChannel(d *did.Did) {
	for i, c := range s.config.Channels {
		if c.GetId() == d.GetId() {
			s.config.Channels = append(s.config.Channels[:i], s.config.Channels[i+1:]...)
			return
		}
	}
}

// RemoveBucket removes a bucket from the service.
func (s *service) RemoveBucket(d *did.Did) {
	for i, b := range s.config.Buckets {
		if b.GetId() == d.GetId() {
			s.config.Buckets = append(s.config.Buckets[:i], s.config.Buckets[i+1:]...)
			return
		}
	}
}

// RemoveObject removes an object from the service.
func (s *service) RemoveObject(o *o.ObjectDoc) {
	delete(s.config.Objects, o.GetDid())
}

// GetChannels returns the service channels.
func (s *service) GetChannels() []*did.Did {
	return s.config.Channels
}

// GetBuckets returns the service buckets.
func (s *service) GetBuckets() []*did.Did {
	return s.config.Buckets
}

// GetObjects returns the service objects.
func (s *service) GetObjects() map[string]*o.ObjectDoc {
	return s.config.Objects
}

// Save saves the service configuration.
func (s *service) Save() error {
	buf, err := s.config.Marshal()
	if err != nil {
		return err
	}

	return os.WriteFile(s.path, buf, 0644)
}
