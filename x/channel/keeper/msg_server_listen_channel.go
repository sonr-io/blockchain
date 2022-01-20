package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/channel/types"
)

func (k msgServer) ListenChannel(msg *types.MsgListenChannel, call types.Msg_ListenChannelServer) error {
	ctx := sdk.UnwrapSDKContext(call.Context())

	// TODO: Handling the message
	_ = ctx

	return nil
}
