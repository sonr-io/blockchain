package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteChannel = "delete_channel"

var _ sdk.Msg = &MsgDeleteChannel{}

func NewMsgDeleteChannel(creator string, did string, publicKey string) *MsgDeleteChannel {
	return &MsgDeleteChannel{
		Creator:   creator,
		Did:       did,
		PublicKey: publicKey,
	}
}

func (msg *MsgDeleteChannel) Route() string {
	return RouterKey
}

func (msg *MsgDeleteChannel) Type() string {
	return TypeMsgDeleteChannel
}

func (msg *MsgDeleteChannel) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteChannel) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteChannel) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
