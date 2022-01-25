package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/channel/types"
)

func (k msgServer) CreateHowIs(goCtx context.Context, msg *types.MsgCreateHowIs) (*types.MsgCreateHowIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetHowIs(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var howIs = types.HowIs{
		Creator: msg.Creator,
		Index:   msg.Index,
		Did:     msg.Did,
		Value:   msg.Value,
	}

	k.SetHowIs(
		ctx,
		howIs,
	)
	return &types.MsgCreateHowIsResponse{}, nil
}

func (k msgServer) UpdateHowIs(goCtx context.Context, msg *types.MsgUpdateHowIs) (*types.MsgUpdateHowIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetHowIs(
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

	var howIs = types.HowIs{
		Creator: msg.Creator,
		Index:   msg.Index,
		Did:     msg.Did,
		Value:   msg.Value,
	}

	k.SetHowIs(ctx, howIs)

	return &types.MsgUpdateHowIsResponse{}, nil
}

func (k msgServer) DeleteHowIs(goCtx context.Context, msg *types.MsgDeleteHowIs) (*types.MsgDeleteHowIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetHowIs(
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

	k.RemoveHowIs(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteHowIsResponse{}, nil
}
