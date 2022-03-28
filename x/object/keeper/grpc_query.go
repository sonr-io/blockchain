package keeper

import (
	"github.com/sonr-io/blockchain/x/object/types"
)

var _ types.QueryServer = Keeper{}
