package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegisterName = "register_name"

var _ sdk.Msg = &MsgRegisterName{}

func NewMsgRegisterName(creator string, name string, fingerprint string) *MsgRegisterName {
	return &MsgRegisterName{
		Creator:     creator,
		Name:        name,
		Fingerprint: fingerprint,
	}
}

func (msg *MsgRegisterName) Route() string {
	return RouterKey
}

func (msg *MsgRegisterName) Type() string {
	return TypeMsgRegisterName
}

func (msg *MsgRegisterName) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterName) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
