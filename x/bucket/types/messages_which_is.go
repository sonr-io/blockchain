package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/x/registry/types"
)

const (
	TypeMsgCreateWhichIs = "create_which_is"
	TypeMsgUpdateWhichIs = "update_which_is"
	TypeMsgDeleteWhichIs = "delete_which_is"
)

var _ sdk.Msg = &MsgCreateWhichIs{}

func NewMsgCreateWhichIs(
	creator string,
	index string,
	did string,
	value *types.DidDocument,

) *MsgCreateWhichIs {
	return &MsgCreateWhichIs{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgCreateWhichIs) Route() string {
	return RouterKey
}

func (msg *MsgCreateWhichIs) Type() string {
	return TypeMsgCreateWhichIs
}

func (msg *MsgCreateWhichIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateWhichIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateWhichIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateWhichIs{}

func NewMsgUpdateWhichIs(
	creator string,
	index string,
	did string,
	value *types.DidDocument,

) *MsgUpdateWhichIs {
	return &MsgUpdateWhichIs{
		Creator: creator,
		Index:   index,
		Did:     did,
		Value:   value,
	}
}

func (msg *MsgUpdateWhichIs) Route() string {
	return RouterKey
}

func (msg *MsgUpdateWhichIs) Type() string {
	return TypeMsgUpdateWhichIs
}

func (msg *MsgUpdateWhichIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateWhichIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateWhichIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteWhichIs{}

func NewMsgDeleteWhichIs(
	creator string,
	index string,

) *MsgDeleteWhichIs {
	return &MsgDeleteWhichIs{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteWhichIs) Route() string {
	return RouterKey
}

func (msg *MsgDeleteWhichIs) Type() string {
	return TypeMsgDeleteWhichIs
}

func (msg *MsgDeleteWhichIs) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteWhichIs) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteWhichIs) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
