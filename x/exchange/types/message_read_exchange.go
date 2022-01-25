package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgReadExchange = "read_exchange"

var _ sdk.Msg = &MsgReadExchange{}

func NewMsgReadExchange(creator string, did string) *MsgReadExchange {
	return &MsgReadExchange{
		Creator: creator,
		Did:     did,
	}
}

func (msg *MsgReadExchange) Route() string {
	return RouterKey
}

func (msg *MsgReadExchange) Type() string {
	return TypeMsgReadExchange
}

func (msg *MsgReadExchange) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgReadExchange) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgReadExchange) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
