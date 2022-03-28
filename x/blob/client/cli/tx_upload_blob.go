package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sonr-io/blockchain/x/blob/types"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdUploadBlob() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "upload-blob [label] [path] [ref-did] [size] [last-modified]",
		Short: "Broadcast message upload-blob",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argLabel := args[0]
			argPath := args[1]
			argRefDid := args[2]
			argSize, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}
			argLastModified, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUploadBlob(
				clientCtx.GetFromAddress().String(),
				argLabel,
				argPath,
				argRefDid,
				argSize,
				argLastModified,
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
