package service

import (
	"context"

	"github.com/kataras/golog"
	"github.com/libp2p/go-libp2p-core/peer"
	pubsub "github.com/libp2p/go-libp2p-pubsub"
	"github.com/pkg/errors"

	"github.com/sonr-io/sonr/pkg/p2p"
	o "github.com/sonr-io/sonr/x/object/types"
	"github.com/sonr-io/sonr/x/registry/service"

	v1 "github.com/sonr-io/sonr/x/channel/types"
)

var (
	logger            *golog.Logger
	ErrNotOwner       = errors.New("Not owner of key - (Beam)")
	ErrNotFound       = errors.New("Key not found in store - (Beam)")
	ErrInvalidMessage = errors.New("Invalid message received in Pubsub Topic - (Beam)")
)

// Channel is a pubsub based Key-Value store for Libp2p nodes.
type Channel interface {
	// Did returns the DID of the channel.
	DID() service.DID

	// Read returns a list of all peers subscribed to the channel topic.
	Read() []peer.ID

	// Publish publishes the given message to the channel topic.
	Publish(obj *o.ObjectDoc, option ...PublishOption) error

	// Listen subscribes to the channel topic and returns a channel that will
	// receive the messages.
	Listen() <-chan *v1.ChannelMessage

	// Close closes the channel.
	Close() error
}

// channel is the implementation of the Beam interface.
type channel struct {
	Channel
	ctx    context.Context
	n      p2p.HostImpl
	config *v1.Channel
	name   string
	did    service.DID
	object *o.ObjectDoc

	// Channel Messages
	messages        chan *v1.ChannelMessage
	messagesHandler *pubsub.TopicEventHandler
	messagesSub     *pubsub.Subscription
	messagesTopic   *pubsub.Topic
}

// New creates a new beam with the given name and options.
func New(ctx context.Context, h p2p.HostImpl, registeredObject *o.ObjectDoc, options ...Option) (Channel, error) {
	c := &channel{
		ctx:    ctx,
		n:      h,
		object: registeredObject,
	}

	opts := defaultOptions()
	for _, option := range options {
		option(opts)
	}
	id := opts.Apply(c)
	mTopic, mHandler, mSub, err := h.NewTopic(id.ToString())
	if err != nil {
		return nil, err
	}

	b := &channel{
		ctx:             ctx,
		n:               h,
		did:             id,
		messages:        make(chan *v1.ChannelMessage),
		messagesHandler: mHandler,
		messagesSub:     mSub,
		messagesTopic:   mTopic,
	}

	// Start the event handler.
	go b.handleChannelEvents()
	go b.handleChannelMessages()
	return b, nil
}

// Read lists all peers subscribed to the beam topic.
func (b *channel) Read() []peer.ID {
	messagesPeers := b.messagesTopic.ListPeers()

	// filter out duplicates
	peers := make(map[peer.ID]struct{})
	for _, p := range messagesPeers {
		peers[p] = struct{}{}
	}

	// convert to slice
	var result []peer.ID
	for p := range peers {
		result = append(result, p)
	}
	return result
}

// Publish publishes the given message to the beam topic.
func (b *channel) Publish(obj *o.ObjectDoc, options ...PublishOption) error {
	// Handle Options
	opts := publishOptions{
		metadata: make(map[string]string),
	}
	for _, option := range options {
		option(&opts)
	}

	// Check if both text and data are empty.
	if obj != nil {
		return errors.New("text and data cannot be empty")
	}

	// Check if the object is already published.
	if b.object.Validate(obj) {
		// Create the message.
		msg := &v1.ChannelMessage{
			Did:  b.did.ToProto(),
			Data: obj,
		}

		// Encode the message.
		buf, err := msg.Marshal()
		if err != nil {
			return err
		}

		// Publish the message to the beam topic.
		return b.messagesTopic.Publish(b.ctx, buf)
	}
	return ErrInvalidMessage
}

// Listen subscribes to the beam topic and returns a channel that will
func (b *channel) Listen() <-chan *v1.ChannelMessage {
	return b.messages
}

// Close closes the channel.
func (b *channel) Close() error {
	err := b.messagesTopic.Close()
	if err != nil {
		return err
	}
	return nil
}

// handleStoreEvents method listens to Pubsub Events for room
func (b *channel) handleChannelEvents() {
	// Loop Events
	for {
		// Get next event
		event, err := b.messagesHandler.NextPeerEvent(b.ctx)
		if err != nil {
			return
		}

		// Check Event and Validate not User
		switch event.Type {
		case pubsub.PeerJoin:
			// event := b.NewSyncEvent()
			// err = PublishEvent(b.ctx, b.topic, event)
			// if err != nil {
			// 	logger.Error(err)
			// 	continue
			// }
		default:
			continue
		}
	}
}

// handleStoreMessages method listens to Pubsub Messages for room
func (b *channel) handleChannelMessages() {
	// Loop Messages
	for {
		// Get next message
		buf, err := b.messagesSub.Next(b.ctx)
		if err != nil {
			return
		}

		// Unmarshal Message Data
		msg := &v1.ChannelMessage{}
		err = msg.Unmarshal(buf.Data)
		if err != nil {
			logger.Errorf("failed to Unmarshal Message from pubsub.Message")
			return
		}

		// Push Message to Channel
		b.messages <- msg
	}
}
