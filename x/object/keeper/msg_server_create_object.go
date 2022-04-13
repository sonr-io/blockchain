package keeper

import (
	"context"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/object/types"
	"github.com/sonr-io/core/did"
)

func (k msgServer) CreateObject(goCtx context.Context, msg *types.MsgCreateObject) (*types.MsgCreateObjectResponse, error) {
	// Get Properties
	ctx := sdk.UnwrapSDKContext(goCtx)
	appName, err := msg.GetSession().GetWhois().ApplicationName()
	if err != nil {
		return nil, err
	}

	// Generate a new Object Did
	did, err := msg.GetSession().GenerateDID(did.WithPathSegments(appName, "object"), did.WithFragment(msg.GetLabel()))
	if err != nil {
		return nil, err
	}

	// Check if Object exists
	_, found := k.GetWhatIs(ctx, did.ID)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Object already registered to this Application")
	}

	// Create Field Map
	m := make(map[string]*types.ObjectField)
	for _, f := range msg.GetInitialFields() {
		m[f.GetLabel()] = f
	}

	// Create Document for Object
	doc := &types.ObjectDoc{
		Label:  msg.GetLabel(),
		Did:    did.ID,
		Fields: m,
	}

	// Create a new Object record
	newWhatIs := types.WhatIs{
		Did:       did.ID,
		Creator:   msg.GetSession().Creator(),
		ObjectDoc: doc,
		Timestamp: time.Now().Unix(),
		IsActive:  true,
	}

	// Store the Object record
	k.SetWhatIs(ctx, newWhatIs)
	return &types.MsgCreateObjectResponse{
		WhatIs: &newWhatIs,
	}, nil
}
