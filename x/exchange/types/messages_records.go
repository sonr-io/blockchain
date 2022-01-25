package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateRecords = "create_records"
	TypeMsgUpdateRecords = "update_records"
	TypeMsgDeleteRecords = "delete_records"
)

var _ sdk.Msg = &MsgCreateRecords{}

func NewMsgCreateRecords(
	creator string,
	index string,
	did string,
	value string,

) *MsgCreateRecords {
	return &MsgCreateRecords{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgCreateRecords) Route() string {
	return RouterKey
}

func (msg *MsgCreateRecords) Type() string {
	return TypeMsgCreateRecords
}

func (msg *MsgCreateRecords) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRecords) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRecords) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRecords{}

func NewMsgUpdateRecords(
	creator string,
	index string,
	did string,
	value string,

) *MsgUpdateRecords {
	return &MsgUpdateRecords{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgUpdateRecords) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRecords) Type() string {
	return TypeMsgUpdateRecords
}

func (msg *MsgUpdateRecords) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRecords) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRecords) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRecords{}

func NewMsgDeleteRecords(
	creator string,
	index string,

) *MsgDeleteRecords {
	return &MsgDeleteRecords{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteRecords) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRecords) Type() string {
	return TypeMsgDeleteRecords
}

func (msg *MsgDeleteRecords) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRecords) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRecords) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
