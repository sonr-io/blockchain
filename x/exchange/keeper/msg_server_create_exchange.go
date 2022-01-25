package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/exchange/types"
)

func (k msgServer) CreateExchange(goCtx context.Context, msg *types.MsgCreateExchange) (*types.MsgCreateExchangeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateExchangeResponse{}, nil
}
