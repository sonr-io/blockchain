/*
Copyright © 2022 NAME HERE <EMAIL ADDRESS>

*/
package cmd

import (
	"fmt"
	"log"

	"github.com/sonr-io/sonr/core/crypto"

	"github.com/spf13/cobra"
)

// accountNewCmd represents the accountNew command
var generateCmd = &cobra.Command{
	Use:   "generate",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		if len(args) < 1 {
			log.Fatal("No .snr name provided")
		}
		sname := args[0]

		res, err := crypto.GenerateWallet(sname, crypto.WithType(crypto.KeyringType_KEYRING_TYPE_DEFAULT))
		if err != nil {
			fmt.Println(err)
		}
		for k, v := range res {
			fmt.Printf("%s: %s\n", k, v)
		}
	},
}

func init() {
	rootCmd.AddCommand(generateCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// accountNewCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// accountNewCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
