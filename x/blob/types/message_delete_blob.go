package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteBlob = "delete_blob"

var _ sdk.Msg = &MsgDeleteBlob{}

func NewMsgDeleteBlob(creator string, did string, publicKey string) *MsgDeleteBlob {
	return &MsgDeleteBlob{
		Creator:   creator,
		Did:       did,
		PublicKey: publicKey,
	}
}

func (msg *MsgDeleteBlob) Route() string {
	return RouterKey
}

func (msg *MsgDeleteBlob) Type() string {
	return TypeMsgDeleteBlob
}

func (msg *MsgDeleteBlob) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteBlob) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteBlob) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
