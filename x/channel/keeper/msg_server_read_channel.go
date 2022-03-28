package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/channel/types"
)

func (k msgServer) ReadChannel(goCtx context.Context, msg *types.MsgReadChannel) (*types.MsgReadChannelResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgReadChannelResponse{}, nil
}
