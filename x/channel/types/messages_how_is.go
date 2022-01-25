package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateHowIs = "create_how_is"
	TypeMsgUpdateHowIs = "update_how_is"
	TypeMsgDeleteHowIs = "delete_how_is"
)

var _ sdk.Msg = &MsgCreateHowIs{}

func NewMsgCreateHowIs(
	creator string,
	index string,
	did string,
	value string,

) *MsgCreateHowIs {
	return &MsgCreateHowIs{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgCreateHowIs) Route() string {
	return RouterKey
}

func (msg *MsgCreateHowIs) Type() string {
	return TypeMsgCreateHowIs
}

func (msg *MsgCreateHowIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateHowIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateHowIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateHowIs{}

func NewMsgUpdateHowIs(
	creator string,
	index string,
	did string,
	value string,

) *MsgUpdateHowIs {
	return &MsgUpdateHowIs{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgUpdateHowIs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateHowIs) Type() string {
	return TypeMsgUpdateHowIs
}

func (msg *MsgUpdateHowIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateHowIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateHowIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteHowIs{}

func NewMsgDeleteHowIs(
	creator string,
	index string,

) *MsgDeleteHowIs {
	return &MsgDeleteHowIs{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteHowIs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteHowIs) Type() string {
	return TypeMsgDeleteHowIs
}

func (msg *MsgDeleteHowIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteHowIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteHowIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
