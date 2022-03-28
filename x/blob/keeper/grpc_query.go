package keeper

import (
	"github.com/sonr-io/blockchain/x/blob/types"
)

var _ types.QueryServer = Keeper{}
