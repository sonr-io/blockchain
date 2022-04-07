package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/bucket/types"
	"github.com/sonr-io/core/did"
)

func (k msgServer) CreateBucket(goCtx context.Context, msg *types.MsgCreateBucket) (*types.MsgCreateBucketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	appName, err := msg.GetSession().GetWhois().ApplicationName()
	if err != nil {
		return nil, err
	}

	// Generate a new channel Did
	did, err := msg.GetSession().GenerateDID(did.WithPathSegments(appName, "bucket"), did.WithFragment(msg.GetLabel()))
	if err != nil {
		return nil, err
	}

	// Check if Channel exists
	_, found := k.GetWhichIs(ctx, did.ID)
	if found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Bucket already registered to this Application")
	}

	// Create new Document for Channel
	doc := &types.BucketDoc{
		Label:       msg.GetLabel(),
		Did:         did.ID,
		Description: msg.GetDescription(),
		Objects:     msg.GetInitialObjects(),
	}

	// Create a new channel record
	newWhichIs := types.WhichIs{
		Did:     did.ID,
		Creator: msg.GetSession().Creator(),
		Bucket:  doc,
	}

	// Store the channel record
	k.SetWhichIs(ctx, newWhichIs)
	return &types.MsgCreateBucketResponse{
		WhichIs: &newWhichIs,
	}, nil
}
