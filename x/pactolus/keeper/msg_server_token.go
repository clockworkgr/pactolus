package keeper

import (
	"context"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateToken(goCtx context.Context, msg *types.MsgCreateToken) (*types.MsgCreateTokenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetToken(
		ctx,
		msg.Denom,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	tickerLength := len(msg.Ticker)

	var price string
	if tickerLength < 3 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Ticker must be 3 chars or more")
	}
	if tickerLength > 10 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Ticker cannot be more than 10 chars long")
	}
	if tickerLength <= 10 {
		price = "100upact"
	}
	if tickerLength <= 7 {
		price = "500upact"
	}
	if tickerLength <= 4 {
		price = "3000upact"
	}
	feeCoins, err := sdk.ParseCoinsNormalized(price)

	if err != nil {
		return nil, err
	}
	ownerAddress, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}
	if err := k.bankKeeper.SendCoins(ctx, ownerAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}
	if err != nil {
		return nil, err
	}
	var token = types.Token{
		Owner:           msg.Owner,
		Denom:           msg.Denom,
		Description:     msg.Description,
		Maxsupply:       msg.Maxsupply,
		Supply:          msg.Supply,
		Precision:       msg.Precision,
		Ticker:          msg.Ticker,
		Url:             msg.Url,
		CanChangeSupply: msg.CanChangeSupply,
	}

	k.SetToken(
		ctx,
		token,
	)
	return &types.MsgCreateTokenResponse{}, nil
}

func (k msgServer) UpdateToken(goCtx context.Context, msg *types.MsgUpdateToken) (*types.MsgUpdateTokenResponse, error) {
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
	if !valFound.CanChangeSupply && valFound.Maxsupply != msg.Maxsupply {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "cannot change maxsupply")
	}

	var token = types.Token{
		Owner:           msg.Owner,
		Denom:           msg.Denom,
		Description:     msg.Description,
		Maxsupply:       msg.Maxsupply,
		Supply:          valFound.Supply,
		Precision:       valFound.Precision,
		Ticker:          valFound.Ticker,
		Url:             msg.Url,
		CanChangeSupply: valFound.CanChangeSupply,
	}

	k.SetToken(ctx, token)

	return &types.MsgUpdateTokenResponse{}, nil
}
