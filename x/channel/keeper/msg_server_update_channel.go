package keeper

import (
	"context"

    "github.com/sonr-io/sonr/x/channel/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)


func (k msgServer) UpdateChannel(goCtx context.Context,  msg *types.MsgUpdateChannel) (*types.MsgUpdateChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

    // TODO: Handling the message
    _ = ctx

	return &types.MsgUpdateChannelResponse{}, nil
}
