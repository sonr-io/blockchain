/*
Copyright © 2022 NAME HERE <EMAIL ADDRESS>

*/
package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// createCmd represents the keys command
var deleteKeysCmd = &cobra.Command{
	Use:   "delete",
	Short: "Delete a key from the wallet",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("keys called")
	},
}

// createCmd represents the keys command
var findKeysCmd = &cobra.Command{
	Use:   "find",
	Short: "A brief description of your command",
	Run: func(cmd *cobra.Command, args []string) {

	},
}

// createCmd represents the keys command
var createKeysCmd = &cobra.Command{
	Use:   "create",
	Short: "A brief description of your command",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("keys called")
	},
}

// keysCmd represents the keys command
var keysCmd = &cobra.Command{
	Use:   "keys",
	Short: "Manage the Keys in the Sonr wallet",
	Run: func(cmd *cobra.Command, args []string) {

	},
}

func init() {
	findKeysCmd.PersistentFlags().StringP("file", "f", "-", "Path to the wallet file")
	findKeysCmd.PersistentFlags().StringP("password", "p", "-", "Password for the wallet file")
	createKeysCmd.PersistentFlags().StringP("file", "f", "-", "Path to the wallet file")
	createKeysCmd.PersistentFlags().StringP("password", "p", "-", "Password for the wallet file")
	deleteKeysCmd.PersistentFlags().StringP("file", "f", "-", "Path to the wallet file")
	deleteKeysCmd.PersistentFlags().StringP("password", "p", "-", "Password for the wallet file")
	keysCmd.AddCommand(createKeysCmd)
	keysCmd.AddCommand(deleteKeysCmd)
	keysCmd.AddCommand(findKeysCmd)
	rootCmd.AddCommand(keysCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// keysCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// keysCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
