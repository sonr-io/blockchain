package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

func (k msgServer) QueryBucket(goCtx context.Context, msg *types.MsgQueryBucket) (*types.MsgQueryBucketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	whichIs, found := k.GetWhichIs(ctx, msg.GetDid())
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Object not found")
	}

	return &types.MsgQueryBucketResponse{
		Code:    200,
		Message: "success",
		WhichIs: &whichIs,
	}, nil
}
