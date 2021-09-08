package pactolus_test

import (
	"testing"

	keepertest "github.com/clockworkgr/pactolus/testutil/keeper"
	"github.com/clockworkgr/pactolus/x/pactolus"
	"github.com/clockworkgr/pactolus/x/pactolus/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PactolusKeeper(t)
	pactolus.InitGenesis(ctx, *k, genesisState)
	got := pactolus.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
