package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sonr-io/sonr/testutil/keeper"
	"github.com/sonr-io/sonr/testutil/nullify"
	"github.com/sonr-io/sonr/x/blob/keeper"
	"github.com/sonr-io/sonr/x/blob/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNThereIs(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.ThereIs {
	items := make([]types.ThereIs, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetThereIs(ctx, items[i])
	}
	return items
}

func TestThereIsGet(t *testing.T) {
	keeper, ctx := keepertest.BlobKeeper(t)
	items := createNThereIs(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetThereIs(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestThereIsRemove(t *testing.T) {
	keeper, ctx := keepertest.BlobKeeper(t)
	items := createNThereIs(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveThereIs(ctx,
			item.Index,
		)
		_, found := keeper.GetThereIs(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestThereIsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BlobKeeper(t)
	items := createNThereIs(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllThereIs(ctx)),
	)
}
