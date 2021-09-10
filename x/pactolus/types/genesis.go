package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		DenomList: []Denom{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated index in denom
	denomIndexMap := make(map[string]struct{})

	for _, elem := range gs.DenomList {
		index := string(DenomKey(elem.Denom))
		if _, ok := denomIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for denom")
		}
		denomIndexMap[index] = struct{}{}
	}

	return nil
}
