package keeper

import (
	"github.com/sonr-io/sonr/x/vault/types"
)

var _ types.QueryServer = Keeper{}
