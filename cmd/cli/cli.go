package cli

import (
	"os"

	"github.com/sonr-io/sonr/cmd/cli/commands"
)

func init() {

	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.

	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.cli.yaml)")
	commands.RootCmd.AddCommand(commands.WalletCmd)
	commands.RootCmd.AddCommand(commands.ServeCmd)
	commands.RootCmd.AddCommand(commands.HighwayCmd)
	commands.RootCmd.AddCommand(commands.DeployCmd)
	// Cobra also supports local flags, which will only run
	// when this action is called directly.
	commands.RootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}

func main() {
	err := commands.RootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}
