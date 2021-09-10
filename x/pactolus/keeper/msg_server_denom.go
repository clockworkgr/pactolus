package keeper

import (
	"context"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateDenom(goCtx context.Context, msg *types.MsgCreateDenom) (*types.MsgCreateDenomResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetDenom(
		ctx,
		msg.Denom,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	moduleAcct := k.accountKeeper.GetModuleAddress(types.ModuleName)
	ownerAddress, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}
	var extraFee sdk.Coins
	tickerLength := len(msg.Ticker)
	if 7 < tickerLength && tickerLength <= 10 {
		extraFee = extraFee.Add(sdk.NewCoin("upact", sdk.NewInt(100)))
	}
	if 4 < tickerLength && tickerLength <= 7 {
		extraFee = extraFee.Add(sdk.NewCoin("upact", sdk.NewInt(500)))
	}
	if tickerLength <= 4 {
		extraFee = extraFee.Add(sdk.NewCoin("upact", sdk.NewInt(3000)))
	}
	if err := k.bankKeeper.SendCoins(ctx, ownerAddress, moduleAcct, extraFee); err != nil {
		return nil, err
	}
	var denom = types.Denom{
		Owner:              msg.Owner,
		Denom:              msg.Denom,
		Description:        msg.Description,
		Ticker:             msg.Ticker,
		Precision:          msg.Precision,
		Url:                msg.Url,
		MaxSupply:          msg.MaxSupply,
		Supply:             0,
		CanChangeMaxSupply: msg.CanChangeMaxSupply,
	}

	k.SetDenom(
		ctx,
		denom,
	)
	return &types.MsgCreateDenomResponse{}, nil
}

func (k msgServer) UpdateDenom(goCtx context.Context, msg *types.MsgUpdateDenom) (*types.MsgUpdateDenomResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetDenom(
		ctx,
		msg.Denom,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	moduleAcct := k.accountKeeper.GetModuleAddress(types.ModuleName)
	ownerAddress, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}
	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	if !valFound.CanChangeMaxSupply && valFound.MaxSupply != msg.MaxSupply {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot change maxsupply")
	}
	if !valFound.CanChangeMaxSupply && msg.CanChangeMaxSupply {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Cannot revert change maxsupply flag")
	}
	var extraFee sdk.Coins
	extraFee = extraFee.Add(sdk.NewCoin("upact", sdk.NewInt(50)))
	if err := k.bankKeeper.SendCoins(ctx, ownerAddress, moduleAcct, extraFee); err != nil {
		return nil, err
	}
	var denom = types.Denom{
		Owner:              msg.Owner,
		Denom:              msg.Denom,
		Description:        msg.Description,
		Ticker:             valFound.Ticker,
		Precision:          valFound.Precision,
		Url:                msg.Url,
		MaxSupply:          msg.MaxSupply,
		Supply:             valFound.Supply,
		CanChangeMaxSupply: msg.CanChangeMaxSupply,
	}

	k.SetDenom(ctx, denom)

	return &types.MsgUpdateDenomResponse{}, nil
}
