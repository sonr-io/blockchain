package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/registry/types"
)

func (k msgServer) RegisterName(goCtx context.Context, msg *types.MsgRegisterName) (*types.MsgRegisterNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting name information from the store
	whois, _ := k.GetWhoIs(ctx, msg.GetNameToRegister())
	// If the message sender address doesn't match the name owner, throw an error
	if !(msg.Creator == whois.GetCreator()) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Incorrect Owner")
	}
	// Otherwise, create an updated whois record
	newWhois := types.WhoIs{
		Address: msg.GetNameToRegister(),
		Did:   msg.GetNameToRegister(),
		//Value:  msg.GetValue(),
		Creator: msg.Creator,
	}
	// Write whois information to the store
	k.SetWhoIs(ctx, newWhois)
	return &types.MsgRegisterNameResponse{}, nil
}
