package registry_test

import (
	"testing"

	keepertest "github.com/sonr-io/sonr/testutil/keeper"
	"github.com/sonr-io/sonr/testutil/nullify"
	"github.com/sonr-io/sonr/x/registry"
	"github.com/sonr-io/sonr/x/registry/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.RegistryKeeper(t)
	registry.InitGenesis(ctx, *k, genesisState)
	got := registry.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
