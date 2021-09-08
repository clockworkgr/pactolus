package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/clockworkgr/pactolus/testutil/keeper"
	"github.com/clockworkgr/pactolus/x/pactolus/keeper"
	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.PactolusKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
