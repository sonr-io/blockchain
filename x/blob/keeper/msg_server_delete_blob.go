package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/blob/types"
)

func (k msgServer) DeleteBlob(goCtx context.Context, msg *types.MsgDeleteBlob) (*types.MsgDeleteBlobResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDeleteBlobResponse{}, nil
}
