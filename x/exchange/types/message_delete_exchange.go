package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteExchange = "delete_exchange"

var _ sdk.Msg = &MsgDeleteExchange{}

func NewMsgDeleteExchange(creator string, did string, status string) *MsgDeleteExchange {
	return &MsgDeleteExchange{
		Creator: creator,
		Did:     did,
		Status:  status,
	}
}

func (msg *MsgDeleteExchange) Route() string {
	return RouterKey
}

func (msg *MsgDeleteExchange) Type() string {
	return TypeMsgDeleteExchange
}

func (msg *MsgDeleteExchange) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteExchange) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteExchange) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
