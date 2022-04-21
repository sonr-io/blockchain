package types

import (
	ct "go.buf.build/grpc/go/sonr-io/blockchain/channel"
)

func NewHowIsFromBuf(cd *ct.HowIs) *HowIs {
	return &HowIs{
		Did:       cd.Did,
		Creator:   cd.Creator,
		Timestamp: cd.Timestamp,
		IsActive:  cd.IsActive,
		Channel:   NewChannelDocFromBuf(cd.Channel),
	}
}

func NewHowIsToBuf(cd *HowIs) *ct.HowIs {
	return &ct.HowIs{
		Did:       cd.Did,
		Creator:   cd.Creator,
		Timestamp: cd.Timestamp,
		IsActive:  cd.IsActive,
		Channel:    NewChannelDocToBuf(cd.Channel),
	}
}
