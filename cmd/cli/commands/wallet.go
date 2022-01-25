package commands

import (
	"fmt"
	"os"
	"path/filepath"

	// "github.com/sonr-io/sonr/core/crypto"

	"github.com/spf13/cobra"
)

var UserSname string

// accountNewCmd represents the accountNew command
var exportCmd = &cobra.Command{
	Use:        "export",
	Short:      "Export the wallet private key to a armored string",
	SuggestFor: []string{"export", "e"},
	Aliases:    []string{"e"},
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			fmt.Println("[INFO]: Out Directory not specified, defaulting to User desktop...")
		}
		outDir := cmd.Flag("outDir").Value.String()
		// passphrase := cmd.Flag("password").Value.String()

		if outDir == "" {
			path, err := os.UserHomeDir()
			if err != nil {
				fmt.Println(err)
				return
			}
			err = os.WriteFile(filepath.Join(path, "Desktop", "armored-priv-key.txt"), []byte(""), 0644)
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
			fmt.Println("[ERROR]: Please enter your mnemonic seed phrase")
			return
		}
		//		mnemonic := args[0]
	},
}

// accountNewCmd represents the accountNew command
var generateCmd = &cobra.Command{
	Use:   "generate",
	Short: "Generates a new wallet and save it to the secure storage.",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	SuggestFor: []string{"generate", "g"},
	Aliases:    []string{"g"},
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			cmd.Usage()
			fmt.Println("")
			fmt.Println("[ERROR]: Please enter your desired '.snr' name")
			return
		}
		sname := args[0]
		// res, err := crypto.GenerateWallet(sname, crypto.WithType(crypto.KeyringType_KEYRING_TYPE_DEFAULT))
		// if err != nil {
		// 	fmt.Println(err)
		// 	return
		// }
		// for k, v := range res {
		// 	fmt.Printf("%s: %s\n", k, v)
		// }
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
	exportCmd.PersistentFlags().StringP("password", "p", "-", "Password for the wallet file")
	exportCmd.PersistentFlags().StringP("outDir", "o", "", "The directory to export the armored wallet file to")
	generateCmd.PersistentFlags().StringP("file", "f", "-", "Path to the wallet file")
	generateCmd.PersistentFlags().StringP("password", "p", "-", "Password for the wallet file")
	restoreCmd.PersistentFlags().StringP("password", "p", "-", "Password for the wallet file")
	WalletCmd.AddCommand(generateCmd, restoreCmd, exportCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// accountNewCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// accountNewCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
