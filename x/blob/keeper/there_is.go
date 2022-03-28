package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/blob/types"
)

// SetThereIs set a specific thereIs in the store from its index
func (k Keeper) SetThereIs(ctx sdk.Context, thereIs types.ThereIs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThereIsKeyPrefix))
	b := k.cdc.MustMarshal(&thereIs)
	store.Set(types.ThereIsKey(
		thereIs.Index,
	), b)
}

// GetThereIs returns a thereIs from its index
func (k Keeper) GetThereIs(
	ctx sdk.Context,
	index string,

) (val types.ThereIs, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThereIsKeyPrefix))

	b := store.Get(types.ThereIsKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveThereIs removes a thereIs from the store
func (k Keeper) RemoveThereIs(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThereIsKeyPrefix))
	store.Delete(types.ThereIsKey(
		index,
	))
}

// GetAllThereIs returns all thereIs
func (k Keeper) GetAllThereIs(ctx sdk.Context) (list []types.ThereIs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThereIsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ThereIs
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
