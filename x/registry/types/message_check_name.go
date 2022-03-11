package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const TypeMsgRequestName = "check_name"

var _ sdk.Msg = &MsgAccessName{}

func NewMsgCheckName(name string) *MsgRequestName {
	return &MsgRequestName{
		NameToRegister: name,
	}
}

func (msg *MsgRequestName) Route() string {
	return RouterKey
}

func (msg *MsgRequestName) Type() string {
	return TypeMsgRequestName
}

func (msg *MsgRequestName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}
