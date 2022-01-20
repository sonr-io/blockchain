package keeper

import (
	"github.com/sonr-io/sonr/x/blob/types"
)

var _ types.QueryServer = Keeper{}
