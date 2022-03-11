package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRequestName = "check_name"

var _ sdk.Msg = &MsgAccessName{}

func NewMsgCheckName(name string) *MsgCheckName {
	return &MsgCheckName{
		NameToRegister: name,
	}
}

func (msg *MsgCheckName) Route() string {
	return RouterKey
}

func (msg *MsgCheckName) Type() string {
	return TypeMsgRequestName
}

func (msg *MsgCheckName) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32("alice")
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCheckName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCheckName) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32("alice")
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
