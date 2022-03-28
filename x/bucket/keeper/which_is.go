package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

// SetWhichIs set a specific whichIs in the store from its index
func (k Keeper) SetWhichIs(ctx sdk.Context, whichIs types.WhichIs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhichIsKeyPrefix))
	b := k.cdc.MustMarshal(&whichIs)
	store.Set(types.WhichIsKey(
		whichIs.Index,
	), b)
}

// GetWhichIs returns a whichIs from its index
func (k Keeper) GetWhichIs(
	ctx sdk.Context,
	index string,

) (val types.WhichIs, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhichIsKeyPrefix))

	b := store.Get(types.WhichIsKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWhichIs removes a whichIs from the store
func (k Keeper) RemoveWhichIs(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhichIsKeyPrefix))
	store.Delete(types.WhichIsKey(
		index,
	))
}

// GetAllWhichIs returns all whichIs
func (k Keeper) GetAllWhichIs(ctx sdk.Context) (list []types.WhichIs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhichIsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.WhichIs
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
