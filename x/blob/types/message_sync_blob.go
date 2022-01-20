package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSyncBlob = "sync_blob"

var _ sdk.Msg = &MsgSyncBlob{}

func NewMsgSyncBlob(creator string, did string, path string, timeout int32) *MsgSyncBlob {
	return &MsgSyncBlob{
		Creator: creator,
		Did:     did,
		Path:    path,
		Timeout: timeout,
	}
}

func (msg *MsgSyncBlob) Route() string {
	return RouterKey
}

func (msg *MsgSyncBlob) Type() string {
	return TypeMsgSyncBlob
}

func (msg *MsgSyncBlob) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSyncBlob) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSyncBlob) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
