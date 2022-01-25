package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/exchange/types"
)

func (k msgServer) ReadExchange(goCtx context.Context, msg *types.MsgReadExchange) (*types.MsgReadExchangeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgReadExchangeResponse{}, nil
}
