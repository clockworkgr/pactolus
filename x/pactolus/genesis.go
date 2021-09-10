package pactolus

import (
	"fmt"

	"github.com/clockworkgr/pactolus/x/pactolus/keeper"
	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the denom
	moduleAcc := k.GetPactolusAccount(ctx)
	if moduleAcc == nil {
		panic(fmt.Sprintf("%s module account has not been set", types.ModuleName))
	}
	for _, elem := range genState.DenomList {
		k.SetDenom(ctx, elem)
	}

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	genesis.DenomList = k.GetAllDenom(ctx)

	return genesis
}
