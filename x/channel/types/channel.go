package types

import (
	ot "github.com/sonr-io/blockchain/x/object/types"
	ct "go.buf.build/grpc/go/sonr-io/blockchain/channel"
)

func NewChannelDocFromBuf(cd *ct.ChannelDoc) *ChannelDoc {
	return &ChannelDoc{
		Did:              cd.Did,
		Label:            cd.Label,
		Description:      cd.Description,
		RegisteredObject: ot.NewObjectDocFromBuf(cd.RegisteredObject),
	}
}
