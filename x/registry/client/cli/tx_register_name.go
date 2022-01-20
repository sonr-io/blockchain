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

func CmdRegisterName() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "register-name [device-id] [os] [model] [arch] [public-key] [name-to-register]",
		Short: "Broadcast message register-name",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDeviceId := args[0]
			argOs := args[1]
			argModel := args[2]
			argArch := args[3]
			argPublicKey := args[4]
			argNameToRegister := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRegisterName(
				clientCtx.GetFromAddress().String(),
				argDeviceId,
				argOs,
				argModel,
				argArch,
				argPublicKey,
				argNameToRegister,
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
