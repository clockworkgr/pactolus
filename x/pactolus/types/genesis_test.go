package types_test

import (
	"testing"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				// this line is used by starport scaffolding # types/genesis/validField
				DenomList: []types.Denom{
					{
						Denom: "0",
					},
					{
						Denom: "1",
					},
				},
			},
			valid: true,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
		{
			desc: "duplicated denom",
			genState: &types.GenesisState{
				DenomList: []types.Denom{
					{
						Denom: "0",
					},
					{
						Denom: "0",
					},
				},
			},
			valid: false,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
