package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/exchange/types"
)

// SetRecords set a specific records in the store from its index
func (k Keeper) SetRecords(ctx sdk.Context, records types.Records) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordsKeyPrefix))
	b := k.cdc.MustMarshal(&records)
	store.Set(types.RecordsKey(
		records.Index,
	), b)
}

// GetRecords returns a records from its index
func (k Keeper) GetRecords(
	ctx sdk.Context,
	index string,

) (val types.Records, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordsKeyPrefix))

	b := store.Get(types.RecordsKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRecords removes a records from the store
func (k Keeper) RemoveRecords(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordsKeyPrefix))
	store.Delete(types.RecordsKey(
		index,
	))
}

// GetAllRecords returns all records
func (k Keeper) GetAllRecords(ctx sdk.Context) (list []types.Records) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RecordsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Records
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
