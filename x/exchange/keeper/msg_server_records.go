package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/exchange/types"
)

func (k msgServer) CreateRecords(goCtx context.Context, msg *types.MsgCreateRecords) (*types.MsgCreateRecordsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetRecords(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var records = types.Records{
		Creator: msg.Creator,
		Index:   msg.Index,
		Did:     msg.Did,
		Value:   msg.Value,
	}

	k.SetRecords(
		ctx,
		records,
	)
	return &types.MsgCreateRecordsResponse{}, nil
}

func (k msgServer) UpdateRecords(goCtx context.Context, msg *types.MsgUpdateRecords) (*types.MsgUpdateRecordsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRecords(
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

	var records = types.Records{
		Creator: msg.Creator,
		Index:   msg.Index,
		Did:     msg.Did,
		Value:   msg.Value,
	}

	k.SetRecords(ctx, records)

	return &types.MsgUpdateRecordsResponse{}, nil
}

func (k msgServer) DeleteRecords(goCtx context.Context, msg *types.MsgDeleteRecords) (*types.MsgDeleteRecordsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetRecords(
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

	k.RemoveRecords(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteRecordsResponse{}, nil
}
