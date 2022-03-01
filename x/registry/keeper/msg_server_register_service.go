package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/sonr-io/sonr/x/registry/types"
)

func (k msgServer) RegisterService(goCtx context.Context, msg *types.MsgRegisterService) (*types.MsgRegisterServiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx
	// Try getting name information from the store
	whois, _ := k.GetWhoIs(ctx, msg.GetServiceName())
	// If the message sender address doesn't match the name owner, throw an error
	if !(msg.Creator == whois.GetCreator()) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Incorrect Owner")
	}

	// buyer, err := sdk.AccAddressFromBech32(msg.Creator)
	// if err != nil {
	// 	return nil, err
	// }

	// Otherwise, create an updated whois record
	newWhois := types.WhoIs{
		//Address: buyer.String(),
		//		Did:     did.ToString(),
		//Value:  msg.GetValue(),
		Creator: msg.Creator,
	}
	// Write whois information to the store
	k.SetWhoIs(ctx, newWhois)
	return &types.MsgRegisterServiceResponse{}, nil
}
