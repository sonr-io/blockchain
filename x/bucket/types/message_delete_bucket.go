package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteBucket = "delete_bucket"

var _ sdk.Msg = &MsgDeleteBucket{}

func NewMsgDeleteBucket(creator string, did string, publicKey string) *MsgDeleteBucket {
	return &MsgDeleteBucket{
		Creator:   creator,
		Did:       did,
		PublicKey: publicKey,
	}
}

func (msg *MsgDeleteBucket) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBucket) Type() string {
	return TypeMsgDeleteBucket
}

func (msg *MsgDeleteBucket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBucket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBucket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
