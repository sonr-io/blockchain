package keeper

import (
	"github.com/sonr-io/blockchain/x/registry/types"
)

var _ types.QueryServer = Keeper{}
