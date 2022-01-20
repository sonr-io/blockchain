package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgListenChannel = "listen_channel"

var _ sdk.Msg = &MsgListenChannel{}

func NewMsgListenChannel(creator string, did string) *MsgListenChannel {
	return &MsgListenChannel{
		Creator: creator,
		Did:     did,
	}
}

func (msg *MsgListenChannel) Route() string {
	return RouterKey
}

func (msg *MsgListenChannel) Type() string {
	return TypeMsgListenChannel
}

func (msg *MsgListenChannel) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgListenChannel) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgListenChannel) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
