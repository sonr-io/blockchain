package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/exchange/types"
)

func (k msgServer) DeleteExchange(goCtx context.Context, msg *types.MsgDeleteExchange) (*types.MsgDeleteExchangeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDeleteExchangeResponse{}, nil
}
