package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/channel/types"
)

func (k msgServer) DeleteChannel(goCtx context.Context, msg *types.MsgDeleteChannel) (*types.MsgDeleteChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDeleteChannelResponse{}, nil
}
