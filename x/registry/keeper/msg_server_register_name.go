package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/registry/types"
)

func (k msgServer) RegisterName(goCtx context.Context, msg *types.MsgRegisterName) (*types.MsgRegisterNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRegisterNameResponse{}, nil
}
