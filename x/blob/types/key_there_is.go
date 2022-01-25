package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ThereIsKeyPrefix is the prefix to retrieve all ThereIs
	ThereIsKeyPrefix = "ThereIs/value/"
)

// ThereIsKey returns the store key to retrieve a ThereIs from the index fields
func ThereIsKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
