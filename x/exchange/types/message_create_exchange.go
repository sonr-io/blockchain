package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateExchange = "create_exchange"

var _ sdk.Msg = &MsgCreateExchange{}

func NewMsgCreateExchange(creator string, label string, recipient string, kind string, payload string) *MsgCreateExchange {
	return &MsgCreateExchange{
		Creator:   creator,
		Label:     label,
		Recipient: recipient,
		Kind:      kind,
		Payload:   payload,
	}
}

func (msg *MsgCreateExchange) Route() string {
	return RouterKey
}

func (msg *MsgCreateExchange) Type() string {
	return TypeMsgCreateExchange
}

func (msg *MsgCreateExchange) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateExchange) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateExchange) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
