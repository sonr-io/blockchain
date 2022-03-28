package keeper

import (
	"github.com/sonr-io/blockchain/x/bucket/types"
)

var _ types.QueryServer = Keeper{}
