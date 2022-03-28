package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/blob/types"
)

func (k msgServer) DownloadBlob(goCtx context.Context, msg *types.MsgDownloadBlob) (*types.MsgDownloadBlobResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDownloadBlobResponse{}, nil
}
