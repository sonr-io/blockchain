package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sonr-io/sonr/x/registry/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateAccount() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-account [home] [device-id] [fingerprint] [os] [model] [arch] [public-key] [metadata]",
		Short: "Broadcast message create-account",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argHome := args[0]
			argDeviceId := args[1]
			argFingerprint := args[2]
			argOs := args[3]
			argModel := args[4]
			argArch := args[5]
			argPublicKey := args[6]
			argMetadata := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAccount(
				clientCtx.GetFromAddress().String(),
				argHome,
				argDeviceId,
				argFingerprint,
				argOs,
				argModel,
				argArch,
				argPublicKey,
				argMetadata,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
