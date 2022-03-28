package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/object/types"
)

func (k msgServer) ReadObject(goCtx context.Context, msg *types.MsgReadObject) (*types.MsgReadObjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgReadObjectResponse{}, nil
}
