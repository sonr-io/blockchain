package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateExchange = "update_exchange"

var _ sdk.Msg = &MsgUpdateExchange{}

func NewMsgUpdateExchange(creator string, did string, status string) *MsgUpdateExchange {
	return &MsgUpdateExchange{
		Creator: creator,
		Did:     did,
		Status:  status,
	}
}

func (msg *MsgUpdateExchange) Route() string {
	return RouterKey
}

func (msg *MsgUpdateExchange) Type() string {
	return TypeMsgUpdateExchange
}

func (msg *MsgUpdateExchange) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateExchange) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateExchange) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
