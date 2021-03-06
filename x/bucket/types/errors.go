package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/bucket module sentinel errors
var (
	ErrSample         = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInactiveBucket = sdkerrors.Register(ModuleName, 1104, "Requested bucket has been deactivated")
)
