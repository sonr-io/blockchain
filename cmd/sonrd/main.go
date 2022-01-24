package main

import (
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/sonr-io/sonr/app"
	"github.com/sonr-io/sonr/cmd/sonrd/frontend"
	"github.com/sonr-io/sonr/cmd/sonrd/highway"
	"github.com/spf13/cobra"
	cmd "github.com/tendermint/spm/cosmoscmd"
)

var isCLI bool = false
var isHighway bool = false
var isDashboard bool = false

func main() {
	if isHighway {
		highway.Start()
		return
	}
	if isCLI {
		err := RootCmd.Execute()
		if err != nil {
			os.Exit(1)
		}
	}

	if isDashboard {
		frontend.Start()
		return
	}

	rootCmd, _ := cmd.NewRootCmd(
		app.Name,
		app.AccountAddressPrefix,
		app.DefaultNodeHome,
		app.Name,
		app.ModuleBasics,
		app.New,
		cmd.WithEnvPrefix("SONR_CHAIN"),
		// this line is used by starport scaffolding # root/arguments

	)
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}

// RootCmd represents the base command when called without any subcommands
var RootCmd = &cobra.Command{
	Use:   "sonr",
	Short: "The Official Sonr CLI tool",
	Long: `A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	// Uncomment the following line if your bare application
	// has an action associated with it:
	// Run: func(cmd *cobra.Command, args []string) { },
}
