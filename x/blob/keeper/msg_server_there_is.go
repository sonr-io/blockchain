package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/blob/types"
)

func (k msgServer) CreateThereIs(goCtx context.Context, msg *types.MsgCreateThereIs) (*types.MsgCreateThereIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetThereIs(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var thereIs = types.ThereIs{
		Creator: msg.Creator,
		Index:   msg.Index,
		Did:     msg.Did,
		Document:   msg.Value,
	}

	k.SetThereIs(
		ctx,
		thereIs,
	)
	return &types.MsgCreateThereIsResponse{}, nil
}

func (k msgServer) UpdateThereIs(goCtx context.Context, msg *types.MsgUpdateThereIs) (*types.MsgUpdateThereIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetThereIs(
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

	var thereIs = types.ThereIs{
		Creator: msg.Creator,
		Index:   msg.Index,
		Did:     msg.Did,
		Document:   msg.Value,
	}

	k.SetThereIs(ctx, thereIs)

	return &types.MsgUpdateThereIsResponse{}, nil
}

func (k msgServer) DeleteThereIs(goCtx context.Context, msg *types.MsgDeleteThereIs) (*types.MsgDeleteThereIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetThereIs(
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

	k.RemoveThereIs(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteThereIsResponse{}, nil
}
