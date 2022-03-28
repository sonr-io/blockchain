package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/registry/types"
)

func (k msgServer) AccessService(goCtx context.Context, msg *types.MsgAccessService) (*types.MsgAccessServiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAccessServiceResponse{}, nil
}
