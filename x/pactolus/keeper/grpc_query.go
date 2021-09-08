package keeper

import (
	"github.com/clockworkgr/pactolus/x/pactolus/types"
)

var _ types.QueryServer = Keeper{}
