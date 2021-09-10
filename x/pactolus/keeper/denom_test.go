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

func createNDenom(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Denom {
	items := make([]types.Denom, n)
	for i := range items {
		items[i].Denom = strconv.Itoa(i)

		keeper.SetDenom(ctx, items[i])
	}
	return items
}

func TestDenomGet(t *testing.T) {
	keeper, ctx := keepertest.PactolusKeeper(t)
	items := createNDenom(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetDenom(ctx,
			item.Denom,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestDenomRemove(t *testing.T) {
	keeper, ctx := keepertest.PactolusKeeper(t)
	items := createNDenom(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveDenom(ctx,
			item.Denom,
		)
		_, found := keeper.GetDenom(ctx,
			item.Denom,
		)
		require.False(t, found)
	}
}

func TestDenomGetAll(t *testing.T) {
	keeper, ctx := keepertest.PactolusKeeper(t)
	items := createNDenom(keeper, ctx, 10)
	require.Equal(t, items, keeper.GetAllDenom(ctx))
}
