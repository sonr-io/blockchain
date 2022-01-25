package keeper

import (
	"github.com/sonr-io/sonr/x/exchange/types"
)

var _ types.QueryServer = Keeper{}
