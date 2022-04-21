package types

import (
	bt "go.buf.build/grpc/go/sonr-io/blockchain/bucket"
)

func NewBucketDocFromBuf(doc *bt.BucketDoc) *BucketDoc {
	return &BucketDoc{
		Did:         doc.Did,
		Label:       doc.Label,
		Description: doc.Description,
		ObjectDids:  doc.ObjectDids,
		Type:        BucketType(doc.Type),
	}
}

// AddObjects takes a list of fields and adds it to BucketDoc
func (o *BucketDoc) AddObjects(l ...string) {
	for _, v := range o.GetObjectDids() {
		o.ObjectDids = append(o.ObjectDids, v)

	}
}

// RemoveObjects takes a list of Object Dids
// and removes the matching label from the BucketDoc
func (o *BucketDoc) RemoveObjects(l ...string) {
	for _, v := range l {
		remove(o.ObjectDids, v)
	}
}

func remove(l []string, item string) []string {
	for i, other := range l {
		if other == item {
			return append(l[:i], l[i+1:]...)
		}
	}
	return l
}
