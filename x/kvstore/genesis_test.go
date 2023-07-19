package kvstore_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "kvstore/testutil/keeper"
	"kvstore/testutil/nullify"
	"kvstore/x/kvstore"
	"kvstore/x/kvstore/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.KvstoreKeeper(t)
	kvstore.InitGenesis(ctx, *k, genesisState)
	got := kvstore.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
