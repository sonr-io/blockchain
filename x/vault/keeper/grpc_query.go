package keeper

import (
	"github.com/sonr-io/blockchain/x/vault/types"
)

var _ types.QueryServer = Keeper{}
