package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// RecordsKeyPrefix is the prefix to retrieve all Records
	RecordsKeyPrefix = "Records/value/"
)

// RecordsKey returns the store key to retrieve a Records from the index fields
func RecordsKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
