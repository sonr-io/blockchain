package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/exchange/types"
)

func (k msgServer) UpdateExchange(goCtx context.Context, msg *types.MsgUpdateExchange) (*types.MsgUpdateExchangeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUpdateExchangeResponse{}, nil
}
