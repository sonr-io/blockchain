package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

func (k msgServer) CreateWhichIs(goCtx context.Context, msg *types.MsgCreateWhichIs) (*types.MsgCreateWhichIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetWhichIs(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var whichIs = types.WhichIs{
		Creator:  msg.Creator,
		Index:    msg.Index,
		Did:      msg.Did,
		Document: []byte(msg.DocumentJson),
	}

	k.SetWhichIs(
		ctx,
		whichIs,
	)
	return &types.MsgCreateWhichIsResponse{}, nil
}

func (k msgServer) UpdateWhichIs(goCtx context.Context, msg *types.MsgUpdateWhichIs) (*types.MsgUpdateWhichIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetWhichIs(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var whichIs = types.WhichIs{
		Creator:  msg.Creator,
		Index:    msg.Index,
		Did:      msg.Did,
		Document: []byte(msg.DocumentJson),
	}

	k.SetWhichIs(ctx, whichIs)

	return &types.MsgUpdateWhichIsResponse{}, nil
}

func (k msgServer) DeleteWhichIs(goCtx context.Context, msg *types.MsgDeleteWhichIs) (*types.MsgDeleteWhichIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetWhichIs(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveWhichIs(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteWhichIsResponse{}, nil
}
