package keeper

import (
	"github.com/sonr-io/blockchain/x/channel/types"
)

var _ types.QueryServer = Keeper{}
