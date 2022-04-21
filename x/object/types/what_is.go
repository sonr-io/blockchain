package types

import (
	ot "go.buf.build/grpc/go/sonr-io/blockchain/object"
)

func NewWhatIsFromBuf(cd *ot.WhatIs) *WhatIs {
	return &WhatIs{
		Did:       cd.Did,
		Creator:   cd.Creator,
		Timestamp: cd.Timestamp,
		IsActive:  cd.IsActive,
		ObjectDoc: NewObjectDocFromBuf(cd.ObjectDoc),
	}
}

func NewWhatIsToBuf(cd *WhatIs) *ot.WhatIs {
	return &ot.WhatIs{
		Did:       cd.Did,
		Creator:   cd.Creator,
		Timestamp: cd.Timestamp,
		IsActive:  cd.IsActive,
		ObjectDoc: NewObjectDocToBuf(cd.ObjectDoc),
	}
}
