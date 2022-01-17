package v1

import (
	"fmt"

	olc "github.com/google/open-location-code/go"
	"github.com/kataras/golog"

	"github.com/libp2p/go-libp2p-core/crypto"
	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/pkg/errors"
	"google.golang.org/protobuf/proto"
)

var (
	logger = golog.Default.Child("internal/common")
)

// IsMdnsCompatible returns true if the Connection is MDNS compatible
func (c Connection) IsMdnsCompatible() bool {
	return c == Connection_CONNECTION_WIFI || c == Connection_CONNECTION_ETHERNET
}

// OLC returns Open Location code
func (l *Location) OLC() string {
	return olc.Encode(l.GetLatitude(), l.GetLongitude(), 4)
}

// ** ───────────────────────────────────────────────────────
// ** ─── Payload Management ────────────────────────────────
// ** ───────────────────────────────────────────────────────
// PayloadItemFunc is the Map function for PayloadItem
type PayloadItemFunc func(item *Payload_Item, index int, total int) error

// IsFile returns true if the Item is a File
func (p *Payload) IsFile() bool {
	isFile := false
	for _, item := range p.GetItems() {
		isFile = item.GetMime().IsFile()
	}
	return isFile
}

// IsSingle returns true if the transfer is a single transfer. Error returned
// if No Items present in Payload
func (p *Payload) IsSingle() (bool, error) {
	if len(p.GetItems()) == 0 {
		return false, errors.New("No Items present in Payload")
	}
	if len(p.GetItems()) > 1 {
		return false, nil
	}
	return true, nil
}

// IsMultiple returns true if the transfer is a multiple transfer. Error returned
// if No Items present in Payload
func (p *Payload) IsMultiple() (bool, error) {
	if len(p.GetItems()) == 0 {
		return false, errors.New("No Items present in Payload")
	}
	if len(p.GetItems()) > 1 {
		return true, nil
	}
	return false, nil
}

// FileCount returns the number of files in the Payload
func (p *Payload) FileCount() int {
	// Initialize
	count := 0

	// Iterate over Items
	for _, item := range p.GetItems() {
		// Check if Item is File
		if item.GetMime().Type != MIME_TYPE_URL {
			// Increase Count
			count++
		}
	}

	// Return Count
	return count
}

// MapItems performs method chaining on the Items in the Payload
func (p *Payload) MapItems(fn PayloadItemFunc) error {
	count := len(p.GetItems())
	for i, item := range p.GetItems() {
		if err := fn(item, i, count); err != nil {
			return err
		}
	}
	return nil
}

// MapItems performs method chaining on the Items in the Payload
func (p *Payload) MapItemsWithIndex(fn PayloadItemFunc) error {
	count := len(p.GetItems())
	for i, item := range p.GetItems() {
		if err := fn(item, i, count); err != nil {
			return err
		}
	}
	return nil
}

// MapFileItems performs method chaining on ONLY the FileItems in the Payload
func (p *Payload) MapFileItems(fn PayloadItemFunc) error {
	count := len(p.GetItems())
	for i, item := range p.GetItems() {
		if item.GetFile() != nil {
			if err := fn(item, i, count); err != nil {
				return err
			}
		}
	}
	return nil
}

// URLCount returns the number of URLs in the Payload
func (p *Payload) URLCount() int {
	// Initialize
	count := 0

	// Iterate over Items
	for _, item := range p.GetItems() {
		// Check if Item is File
		if item.GetMime().Type == MIME_TYPE_URL {
			// Increase Count
			count++
		}
	}

	// Return Count
	return count
}

// Buffer returns Peer as a buffer
func (p *Profile) Buffer() ([]byte, error) {
	// Marshal Peer
	data, err := proto.Marshal(p)
	if err != nil {
		return nil, err
	}

	// Return Peer as buffer
	return data, nil
}

// GetProfileFunc returns a function that returns the Profile and error
type GetProfileFunc func() (*Profile, error)

// Buffer returns Peer as a buffer
func (p *Peer) Buffer() ([]byte, error) {
	// Marshal Peer
	data, err := proto.Marshal(p)
	if err != nil {
		return nil, err
	}

	// Return Peer as buffer
	return data, nil
}

// Arch returns Peer Device GOARCH
func (p *Peer) Arch() string {
	return p.GetDevice().GetArch()
}

// Libp2pID returns the PeerID based on PublicKey from Profile
func (p *Peer) Libp2pID() (peer.ID, error) {
	// Check if PublicKey is empty
	if len(p.GetPublicKey()) == 0 {
		return "", errors.New("Peer Public Key is not set.")
	}

	pubKey, err := crypto.UnmarshalPublicKey(p.GetPublicKey())
	if err != nil {
		return "", err
	}

	// Return Peer ID
	id, err := peer.IDFromPublicKey(pubKey)
	if err != nil {
		return "", err
	}
	return id, nil
}

// PubKey returns the Public Key from the Peer
func (p *Peer) PubKey() (crypto.PubKey, error) {
	// Check if PublicKey is empty
	if len(p.GetPublicKey()) == 0 {
		return nil, errors.New("Peer Public Key is not set.")
	}

	// Unmarshal Public Key
	pubKey, err := crypto.UnmarshalPublicKey(p.GetPublicKey())
	if err != nil {
		logger.Error(fmt.Sprintf("Failed to Unmarshal Public Key: %s", p.GetSName()), err)
		return nil, err
	}
	return pubKey, nil
}

// OS returns Peer Device GOOS
func (p *Peer) OS() string {
	return p.GetDevice().GetOs()
}
