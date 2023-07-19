package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "kvstore/testutil/keeper"
	"kvstore/x/kvstore/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.KvstoreKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
