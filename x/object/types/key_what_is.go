package types

import "encoding/binary"

var _ binary.ByteOrder

const (
    // WhatIsKeyPrefix is the prefix to retrieve all WhatIs
	WhatIsKeyPrefix = "WhatIs/value/"
)

// WhatIsKey returns the store key to retrieve a WhatIs from the index fields
func WhatIsKey(
index string,
) []byte {
	var key []byte
    
    indexBytes := []byte(index)
    key = append(key, indexBytes...)
    key = append(key, []byte("/")...)
    
	return key
}