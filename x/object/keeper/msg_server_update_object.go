package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/object/types"
)

func (k msgServer) UpdateObject(goCtx context.Context, msg *types.MsgUpdateObject) (*types.MsgUpdateObjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUpdateObjectResponse{}, nil
}
