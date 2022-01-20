package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgListenBucket = "listen_bucket"

var _ sdk.Msg = &MsgListenBucket{}

func NewMsgListenBucket(creator string, did string) *MsgListenBucket {
	return &MsgListenBucket{
		Creator: creator,
		Did:     did,
	}
}

func (msg *MsgListenBucket) Route() string {
	return RouterKey
}

func (msg *MsgListenBucket) Type() string {
	return TypeMsgListenBucket
}

func (msg *MsgListenBucket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgListenBucket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgListenBucket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
