package types

import (
	bt "go.buf.build/grpc/go/sonr-io/blockchain/bucket"
)

func NewWhichIsFromBuf(cd *bt.WhichIs) *WhichIs {
	return &WhichIs{
		Did:       cd.Did,
		Creator:   cd.Creator,
		Timestamp: cd.Timestamp,
		IsActive:  cd.IsActive,
		Bucket:    NewBucketDocFromBuf(cd.Bucket),
	}
}
