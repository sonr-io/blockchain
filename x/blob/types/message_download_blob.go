package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDownloadBlob = "download_blob"

var _ sdk.Msg = &MsgDownloadBlob{}

func NewMsgDownloadBlob(creator string, did string, path string, timeout int32) *MsgDownloadBlob {
	return &MsgDownloadBlob{
		Creator: creator,
		Did:     did,
		Path:    path,
		Timeout: timeout,
	}
}

func (msg *MsgDownloadBlob) Route() string {
	return RouterKey
}

func (msg *MsgDownloadBlob) Type() string {
	return TypeMsgDownloadBlob
}

func (msg *MsgDownloadBlob) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDownloadBlob) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDownloadBlob) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
