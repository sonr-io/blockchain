package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// HowIsKeyPrefix is the prefix to retrieve all HowIs
	HowIsKeyPrefix = "HowIs/value/"
)

// HowIsKey returns the store key to retrieve a HowIs from the index fields
func HowIsKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
