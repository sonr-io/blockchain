package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/object/types"
)

func (k msgServer) QueryObject(goCtx context.Context, msg *types.MsgQueryObject) (*types.MsgQueryObjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	whatIs, found := k.GetWhatIs(ctx, msg.GetDid())
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Object not found")
	}

	return &types.MsgQueryObjectResponse{
		Code:    200,
		Message: "success",
		WhatIs:  &whatIs,
	}, nil
}
