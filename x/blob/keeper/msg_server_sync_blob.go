package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/blob/types"
)

func (k msgServer) SyncBlob(goCtx context.Context, msg *types.MsgSyncBlob) (*types.MsgSyncBlobResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSyncBlobResponse{}, nil
}
