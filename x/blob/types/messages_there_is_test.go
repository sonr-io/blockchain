package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/sonr/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateThereIs_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateThereIs
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateThereIs{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateThereIs{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateThereIs_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateThereIs
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateThereIs{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateThereIs{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteThereIs_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteThereIs
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteThereIs{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteThereIs{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
