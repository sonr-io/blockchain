package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/object/types"
)

func (k msgServer) DeleteObject(goCtx context.Context, msg *types.MsgDeleteObject) (*types.MsgDeleteObjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if Object exists
	_, found := k.GetWhatIs(ctx, msg.GetDid())
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Object was not found in this Application")
	}
	k.RemoveWhatIs(ctx, msg.GetDid())
	return &types.MsgDeleteObjectResponse{}, nil
}
