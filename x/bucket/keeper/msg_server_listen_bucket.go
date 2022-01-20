package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/bucket/types"
)

func (k msgServer) ListenBucket(msg *types.MsgListenBucket, call types.Msg_ListenBucketServer) error {
	ctx := sdk.UnwrapSDKContext(call.Context())

	// TODO: Handling the message
	_ = ctx

	return nil
}
