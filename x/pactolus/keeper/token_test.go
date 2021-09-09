package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/clockworkgr/pactolus/testutil/keeper"
	"github.com/clockworkgr/pactolus/x/pactolus/keeper"
	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNToken(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Token {
	items := make([]types.Token, n)
	for i := range items {
		items[i].Denom = strconv.Itoa(i)

		keeper.SetToken(ctx, items[i])
	}
	return items
}

func TestTokenGet(t *testing.T) {
	keeper, ctx := keepertest.PactolusKeeper(t)
	items := createNToken(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetToken(ctx,
			item.Denom,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestTokenRemove(t *testing.T) {
	keeper, ctx := keepertest.PactolusKeeper(t)
	items := createNToken(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveToken(ctx,
			item.Denom,
		)
		_, found := keeper.GetToken(ctx,
			item.Denom,
		)
		require.False(t, found)
	}
}

func TestTokenGetAll(t *testing.T) {
	keeper, ctx := keepertest.PactolusKeeper(t)
	items := createNToken(keeper, ctx, 10)
	require.Equal(t, items, keeper.GetAllToken(ctx))
}
