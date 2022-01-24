// +build cli

package main

import "github.com/sonr-io/sonr/cmd/sonrd/cli/commands"

func init() {
	isCLI = true
	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.

	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.cli.yaml)")
	RootCmd.AddCommand(commands.WalletCmd)
	RootCmd.AddCommand(commands.ServeCmd)
	RootCmd.AddCommand(commands.HighwayCmd)
	RootCmd.AddCommand(commands.DeployCmd)

	RootCmd.AddCommand(commands.BindCmd)
	// Cobra also supports local flags, which will only run
	// when this action is called directly.
	RootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
