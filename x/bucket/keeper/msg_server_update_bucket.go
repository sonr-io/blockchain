package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/bucket/types"
)

func (k msgServer) UpdateBucket(goCtx context.Context, msg *types.MsgUpdateBucket) (*types.MsgUpdateBucketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUpdateBucketResponse{}, nil
}
