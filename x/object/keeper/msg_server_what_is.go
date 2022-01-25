package keeper

import (
	"context"

    "github.com/sonr-io/sonr/x/object/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)


func (k msgServer) CreateWhatIs(goCtx context.Context,  msg *types.MsgCreateWhatIs) (*types.MsgCreateWhatIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // Check if the value already exists
    _, isFound := k.GetWhatIs(
        ctx,
        msg.Index,
        )
    if isFound {
        return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
    }

    var whatIs = types.WhatIs{
        Creator: msg.Creator,
        Index: msg.Index,
        Did: msg.Did,
        Value: msg.Value,
        
    }

   k.SetWhatIs(
   		ctx,
   		whatIs,
   	)
	return &types.MsgCreateWhatIsResponse{}, nil
}

func (k msgServer) UpdateWhatIs(goCtx context.Context,  msg *types.MsgUpdateWhatIs) (*types.MsgUpdateWhatIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // Check if the value exists
    valFound, isFound := k.GetWhatIs(
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

    var whatIs = types.WhatIs{
		Creator: msg.Creator,
		Index: msg.Index,
        Did: msg.Did,
		Value: msg.Value,
		
	}

	k.SetWhatIs(ctx, whatIs)

	return &types.MsgUpdateWhatIsResponse{}, nil
}

func (k msgServer) DeleteWhatIs(goCtx context.Context,  msg *types.MsgDeleteWhatIs) (*types.MsgDeleteWhatIsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // Check if the value exists
    valFound, isFound := k.GetWhatIs(
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

	k.RemoveWhatIs(
	    ctx,
	msg.Index,
    )

	return &types.MsgDeleteWhatIsResponse{}, nil
}