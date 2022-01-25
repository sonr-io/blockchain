package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WhichIsKeyPrefix is the prefix to retrieve all WhichIs
	WhichIsKeyPrefix = "WhichIs/value/"
)

// WhichIsKey returns the store key to retrieve a WhichIs from the index fields
func WhichIsKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
