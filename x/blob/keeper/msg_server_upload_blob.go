package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/blob/types"
)

func (k msgServer) UploadBlob(goCtx context.Context, msg *types.MsgUploadBlob) (*types.MsgUploadBlobResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUploadBlobResponse{}, nil
}
