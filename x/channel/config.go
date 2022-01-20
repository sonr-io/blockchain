package channel

import (
	"time"

	"github.com/kataras/golog"
	"github.com/sonr-io/sonr/core/did"
	v1 "github.com/sonr-io/sonr/x/channel/types"
)

// Option is a function that modifies the beam options.
type Option func(*options)

// WithLabel sets the label of the beam.
func WithLabel(label string) Option {
	return func(o *options) {
		o.label = label
	}
}

// WithDescription sets the description of the channel.
func WithDescription(description string) Option {
	return func(o *options) {
		o.description = description
	}
}

// WithTTL sets the time-to-live for channel messages
func WithTTL(ttl time.Duration) Option {
	return func(o *options) {
		o.ttl = ttl
	}
}

// WithCapacity sets the capacity of the channel.
func WithCapacity(capacity int) Option {
	return func(o *options) {
		o.capacity = capacity
	}
}

// WithMaxSize sets the maximum size of the channel.
func WithMaxSize(maxSize int) Option {
	return func(o *options) {
		o.maxSize = maxSize
	}
}

// options is a collection of options for the beam.
type options struct {
	label       string
	description string
	ttl         time.Duration
	capacity    int
	maxSize     int
}

// defaultOptions is the default options for the beam.
func defaultOptions() *options {
	return &options{
		ttl:         time.Minute * 10,
		capacity:    4096,
		label:       "test",
		description: "A test channel",
		maxSize:     4096,
	}
}

// Apply applies the options to the channel and returns the generated name for the channel.
func (o *options) Apply(c *channel) did.DID {
	c.config = &v1.Channel{
		Label:       o.label,
		Description: o.description,
	}

	did, err := did.FromString(c.object.GetDid())
	if err != nil {
		golog.Fatal(err)
	}

	logger = golog.Default.Child(did.ToString())
	return did
}
