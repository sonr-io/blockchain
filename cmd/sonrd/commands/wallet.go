package cli

import (
	"fmt"
	"os"
	"path/filepath"

	// "github.com/sonr-io/sonr/core/crypto"

	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/sonr-io/sonr/config"
	"github.com/sonr-io/sonr/pkg/crypto"
	"github.com/spf13/cobra"
)

var UserSname string
var Keyset crypto.KeySet

// accountNewCmd represents the accountNew command
var exportCmd = &cobra.Command{
	Use:        "export",
	Short:      "Export the wallet private key to a armored string",
	SuggestFor: []string{"export", "e"},
	Aliases:    []string{"e"},
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			cmd.Usage()
			fmt.Println("")
			fmt.Println("[ERROR]: Please provide the SName you wish to export.")
			return
		}
		sname := args[0]
		if err := cmd.MarkFlagRequired("passhprase"); err != nil {
			fmt.Println(err)
			return
		}

		outDir := cmd.Flag("outDir").Value.String()
		passphrase := cmd.Flag("passphrase").Value.String()

		if cmd.Flag("outDir").Value.String() == "" {
			outDir = filepath.Join(os.Getenv("HOME"), ".sonr-wallet")
		}

		armor, err := crypto.ExportWallet(keyring.NewInMemory(), sname, passphrase)
		if err != nil {
			fmt.Println(err)
			return
		}

		if outDir == "" {
			path, err := os.UserHomeDir()
			if err != nil {
				fmt.Println(err)
				return
			}
			err = os.WriteFile(filepath.Join(path, "Desktop", "sonr-private-key.pgp"), []byte(armor), 0644)
			if err != nil {
				fmt.Println(err)
				return
			}
		}
	},
}

// accountNewCmd represents the accountNew command
var restoreCmd = &cobra.Command{
	Use:        "restore",
	Short:      "Restores a wallet with provided mnemonic seed",
	SuggestFor: []string{"restore", "r"},
	Aliases:    []string{"r"},
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			cmd.Usage()
			fmt.Println("")
			fmt.Println("[ERROR]: Please provide the SName you wish to restore.")
			return
		}
		sname := args[0]
		if err := cmd.MarkFlagRequired("armor"); err != nil {
			fmt.Println(err)
			return
		}
		if err := cmd.MarkFlagRequired("passhprase"); err != nil {
			fmt.Println(err)
			return
		}

		armor := cmd.Flag("armor").Value.String()
		passphrase := cmd.Flag("passphrase").Value.String()
		if _, err := crypto.RestoreWallet(sname, armor, passphrase); err != nil {
			fmt.Println(err)
			return
		}
	},
}

// accountNewCmd represents the accountNew command
var generateCmd = &cobra.Command{
	Use:        "generate",
	Short:      "Generates a new wallet and save it to the secure storage.",
	SuggestFor: []string{"generate", "g"},
	Aliases:    []string{"g"},
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			cmd.Usage()
			fmt.Println("")
			fmt.Println("[ERROR]: Please enter your desired '.snr' name")
			return
		}
		cnfg, err := config.Load()
		if err != nil {
			fmt.Println(err)
			return
		}
		sname := args[0]
		kr, _, err := crypto.GenerateKeyring(cnfg, keyring.NewInMemory())
		if err != nil {
			fmt.Println(err)
			return
		}
		Keyset = kr
		UserSname = sname
	},
}

// accountNewCmd represents the accountNew command
var WalletCmd = &cobra.Command{
	Use:   "wallet",
	Short: "Manage your On-Disk development wallet",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	SuggestFor: []string{"wallet", "w"},
	Aliases:    []string{"w"},
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Usage()
	},
}

func init() {
	restoreCmd.PersistentFlags().StringP("passhprase", "p", ".", "Passphrase for the armor file")
	restoreCmd.PersistentFlags().StringP("armor", "a", ".", "Path to the Armor file")
	exportCmd.PersistentFlags().StringP("password", "w", "-", "Password for the wallet file")
	exportCmd.PersistentFlags().StringP("outDir", "o", "", "The directory to export the armored wallet file to")
	generateCmd.PersistentFlags().StringP("file", "f", "-", "Path to the wallet file")
	WalletCmd.AddCommand(generateCmd, restoreCmd, exportCmd)
}
