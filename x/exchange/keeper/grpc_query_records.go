package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sonr-io/sonr/x/exchange/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) RecordsAll(c context.Context, req *types.QueryAllRecordsRequest) (*types.QueryAllRecordsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var recordss []types.Records
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	recordsStore := prefix.NewStore(store, types.KeyPrefix(types.RecordsKeyPrefix))

	pageRes, err := query.Paginate(recordsStore, req.Pagination, func(key []byte, value []byte) error {
		var records types.Records
		if err := k.cdc.Unmarshal(value, &records); err != nil {
			return err
		}

		recordss = append(recordss, records)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRecordsResponse{Records: recordss, Pagination: pageRes}, nil
}

func (k Keeper) Records(c context.Context, req *types.QueryGetRecordsRequest) (*types.QueryGetRecordsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetRecords(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetRecordsResponse{Records: val}, nil
}
