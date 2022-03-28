package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/channel/types"
)

func (k msgServer) CreateChannel(goCtx context.Context, msg *types.MsgCreateChannel) (*types.MsgCreateChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateChannelResponse{}, nil
}
