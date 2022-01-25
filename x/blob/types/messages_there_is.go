package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/registry/types"
)

const (
	TypeMsgCreateThereIs = "create_there_is"
	TypeMsgUpdateThereIs = "update_there_is"
	TypeMsgDeleteThereIs = "delete_there_is"
)

var _ sdk.Msg = &MsgCreateThereIs{}

func NewMsgCreateThereIs(
	creator string,
	index string,
	did string,
	value *types.DidDocument,

) *MsgCreateThereIs {
	return &MsgCreateThereIs{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgCreateThereIs) Route() string {
	return RouterKey
}

func (msg *MsgCreateThereIs) Type() string {
	return TypeMsgCreateThereIs
}

func (msg *MsgCreateThereIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateThereIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateThereIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateThereIs{}

func NewMsgUpdateThereIs(
	creator string,
	index string,
	did string,
	value *types.DidDocument,

) *MsgUpdateThereIs {
	return &MsgUpdateThereIs{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgUpdateThereIs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateThereIs) Type() string {
	return TypeMsgUpdateThereIs
}

func (msg *MsgUpdateThereIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateThereIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateThereIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteThereIs{}

func NewMsgDeleteThereIs(
	creator string,
	index string,

) *MsgDeleteThereIs {
	return &MsgDeleteThereIs{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteThereIs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteThereIs) Type() string {
	return TypeMsgDeleteThereIs
}

func (msg *MsgDeleteThereIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteThereIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteThereIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
