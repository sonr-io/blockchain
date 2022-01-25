package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sonr-io/sonr/x/exchange/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdCreateExchange() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-exchange [label] [recipient] [kind] [payload]",
		Short: "Broadcast message create-exchange",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argRecipient := args[1]
			argKind := args[2]
			argPayload := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateExchange(
				clientCtx.GetFromAddress().String(),
				argLabel,
				argRecipient,
				argKind,
				argPayload,
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
