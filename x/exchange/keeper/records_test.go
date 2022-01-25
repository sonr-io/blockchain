package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sonr-io/sonr/testutil/keeper"
	"github.com/sonr-io/sonr/testutil/nullify"
	"github.com/sonr-io/sonr/x/exchange/keeper"
	"github.com/sonr-io/sonr/x/exchange/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNRecords(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Records {
	items := make([]types.Records, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetRecords(ctx, items[i])
	}
	return items
}

func TestRecordsGet(t *testing.T) {
	keeper, ctx := keepertest.ExchangeKeeper(t)
	items := createNRecords(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetRecords(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestRecordsRemove(t *testing.T) {
	keeper, ctx := keepertest.ExchangeKeeper(t)
	items := createNRecords(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveRecords(ctx,
			item.Index,
		)
		_, found := keeper.GetRecords(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestRecordsGetAll(t *testing.T) {
	keeper, ctx := keepertest.ExchangeKeeper(t)
	items := createNRecords(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllRecords(ctx)),
	)
}
