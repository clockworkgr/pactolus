package keeper

import (
	"context"

	"github.com/clockworkgr/pactolus/x/pactolus/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) MintAndSendTokens(goCtx context.Context, msg *types.MsgMintAndSendTokens) (*types.MsgMintAndSendTokensResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message

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

	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	ownerAddress, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}
	recipientAddress, err := sdk.AccAddressFromBech32(msg.Recipient)
	if err != nil {
		return nil, err
	}
	if valFound.Supply+msg.Amount > valFound.Maxsupply {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "max supply reached")
	}
	var mintCoins, feeCoins sdk.Coins
	feeCoins.Add(sdk.NewCoin("upact", sdk.NewInt(20)))
	if err := k.bankKeeper.SendCoins(ctx, ownerAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}
	mintCoins.Add(sdk.NewCoin(msg.Denom, sdk.NewInt(int64(msg.Amount))))
	if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, mintCoins); err != nil {
		return nil, err
	}
	if err := k.bankKeeper.SendCoins(ctx, moduleAcct, recipientAddress, mintCoins); err != nil {
		return nil, err
	}
	var token = types.Token{
		Owner:           valFound.Owner,
		Denom:           valFound.Denom,
		Description:     valFound.Description,
		Maxsupply:       valFound.Maxsupply,
		Supply:          valFound.Supply + msg.Amount,
		Precision:       valFound.Precision,
		Ticker:          valFound.Ticker,
		Url:             valFound.Url,
		CanChangeSupply: valFound.CanChangeSupply,
	}

	k.SetToken(
		ctx,
		token,
	)
	return &types.MsgMintAndSendTokensResponse{}, nil
}
