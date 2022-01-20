package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgReadChannel = "read_channel"

var _ sdk.Msg = &MsgReadChannel{}

func NewMsgReadChannel(creator string, did string) *MsgReadChannel {
	return &MsgReadChannel{
		Creator: creator,
		Did:     did,
	}
}

func (msg *MsgReadChannel) Route() string {
	return RouterKey
}

func (msg *MsgReadChannel) Type() string {
	return TypeMsgReadChannel
}

func (msg *MsgReadChannel) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgReadChannel) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgReadChannel) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
