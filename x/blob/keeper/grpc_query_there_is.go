package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sonr-io/blockchain/x/blob/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ThereIsAll(c context.Context, req *types.QueryAllThereIsRequest) (*types.QueryAllThereIsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var thereIss []types.ThereIs
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	thereIsStore := prefix.NewStore(store, types.KeyPrefix(types.ThereIsKeyPrefix))

	pageRes, err := query.Paginate(thereIsStore, req.Pagination, func(key []byte, value []byte) error {
		var thereIs types.ThereIs
		if err := k.cdc.Unmarshal(value, &thereIs); err != nil {
			return err
		}

		thereIss = append(thereIss, thereIs)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllThereIsResponse{ThereIs: thereIss, Pagination: pageRes}, nil
}

func (k Keeper) ThereIs(c context.Context, req *types.QueryGetThereIsRequest) (*types.QueryGetThereIsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetThereIs(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetThereIsResponse{ThereIs: val}, nil
}
