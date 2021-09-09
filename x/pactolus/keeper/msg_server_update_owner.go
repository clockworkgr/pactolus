package keeper

import (
	"context"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) UpdateOwner(goCtx context.Context, msg *types.MsgUpdateOwner) (*types.MsgUpdateOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetToken(
		ctx,
		msg.Denom,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	moduleAcct := k.accountKeeper.GetModuleAddress(types.ModuleName)
	ownerAddress, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}
	var feeCoins sdk.Coins
	feeCoins = feeCoins.Add(sdk.NewCoin("upact", sdk.NewInt(1000)))
	if err := k.bankKeeper.SendCoins(ctx, ownerAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}
	var token = types.Token{
		Owner:           msg.Newowner,
		Denom:           msg.Denom,
		Description:     valFound.Description,
		Maxsupply:       valFound.Maxsupply,
		Supply:          valFound.Supply,
		Precision:       valFound.Precision,
		Ticker:          valFound.Ticker,
		Url:             valFound.Url,
		CanChangeSupply: valFound.CanChangeSupply,
	}

	k.SetToken(
		ctx,
		token,
	)
	return &types.MsgUpdateOwnerResponse{}, nil
}
