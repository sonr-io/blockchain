package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/registry/types"
)

func (k msgServer) CreateWhoIs(goCtx context.Context, msg *types.MsgCreateWhoIs) (*types.MsgCreateWhoIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetWhoIs(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var whoIs = types.WhoIs{
		Creator: msg.Creator,
		Address: msg.Index,
		Did:     msg.Did,
		Value:   msg.Value,
	}

	k.SetWhoIs(
		ctx,
		whoIs,
	)
	return &types.MsgCreateWhoIsResponse{}, nil
}

func (k msgServer) UpdateWhoIs(goCtx context.Context, msg *types.MsgUpdateWhoIs) (*types.MsgUpdateWhoIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetWhoIs(
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

	var whoIs = types.WhoIs{
		Creator: msg.Creator,
		Address: msg.Index,
		Did:     msg.Did,
		Value:   msg.Value,
	}

	k.SetWhoIs(ctx, whoIs)

	return &types.MsgUpdateWhoIsResponse{}, nil
}

func (k msgServer) DeleteWhoIs(goCtx context.Context, msg *types.MsgDeleteWhoIs) (*types.MsgDeleteWhoIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetWhoIs(
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

	k.RemoveWhoIs(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteWhoIsResponse{}, nil
}
