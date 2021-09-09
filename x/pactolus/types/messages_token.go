package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateToken{}

func NewMsgCreateToken(
	owner string,
	denom string,
	description string,
	maxsupply uint64,
	precision uint32,
	ticker string,
	url string,
	canChangeSupply bool,

) *MsgCreateToken {
	return &MsgCreateToken{
		Owner:           owner,
		Denom:           denom,
		Description:     description,
		Maxsupply:       maxsupply,
		Precision:       precision,
		Ticker:          ticker,
		Url:             url,
		CanChangeSupply: canChangeSupply,
	}
}

func (msg *MsgCreateToken) Route() string {
	return RouterKey
}

func (msg *MsgCreateToken) Type() string {
	return "CreateToken"
}

func (msg *MsgCreateToken) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgCreateToken) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateToken) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateToken{}

func NewMsgUpdateToken(
	owner string,
	denom string,
	description string,
	maxsupply uint64,
	url string,

) *MsgUpdateToken {
	return &MsgUpdateToken{
		Owner:       owner,
		Denom:       denom,
		Description: description,
		Maxsupply:   maxsupply,
		Url:         url,
	}
}

func (msg *MsgUpdateToken) Route() string {
	return RouterKey
}

func (msg *MsgUpdateToken) Type() string {
	return "UpdateToken"
}

func (msg *MsgUpdateToken) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgUpdateToken) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateToken) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
