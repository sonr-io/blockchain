package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgReadBucket = "read_bucket"

var _ sdk.Msg = &MsgReadBucket{}

func NewMsgReadBucket(creator string, did string) *MsgReadBucket {
	return &MsgReadBucket{
		Creator: creator,
		Label:   did,
	}
}

func (msg *MsgReadBucket) Route() string {
	return RouterKey
}

func (msg *MsgReadBucket) Type() string {
	return TypeMsgReadBucket
}

func (msg *MsgReadBucket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgReadBucket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgReadBucket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
