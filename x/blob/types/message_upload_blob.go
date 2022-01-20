package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUploadBlob = "upload_blob"

var _ sdk.Msg = &MsgUploadBlob{}

func NewMsgUploadBlob(creator string, label string, path string, refDid string, size int32, lastModified int32) *MsgUploadBlob {
	return &MsgUploadBlob{
		Creator:      creator,
		Label:        label,
		Path:         path,
		RefDid:       refDid,
		LastModified: lastModified,
	}
}

func (msg *MsgUploadBlob) Route() string {
	return RouterKey
}

func (msg *MsgUploadBlob) Type() string {
	return TypeMsgUploadBlob
}

func (msg *MsgUploadBlob) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUploadBlob) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUploadBlob) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
