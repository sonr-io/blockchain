package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/registry/types"
)

func (k msgServer) CheckName(goCtx context.Context, msg *types.MsgCheckName) (*types.MsgCheckNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting name information from the store
	_, found := k.GetWhoIs(ctx, msg.GetNameToRegister())
	if found {
		return &types.MsgCheckNameResponse{
			IsAvailable: false,
		}, nil
	}

	return &types.MsgCheckNameResponse{
		IsAvailable: true,
	}, nil
}
