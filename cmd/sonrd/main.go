package main

import (
	"fmt"
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/sonr-io/sonr/app"
	"github.com/spf13/cobra"
	cmd "github.com/tendermint/spm/cosmoscmd"
)

func main() {
	rootCmd, _ := cmd.NewRootCmd(
		app.Name,
		app.AccountAddressPrefix,
		app.DefaultNodeHome,
		app.Name,
		app.ModuleBasics,
		app.New,
		cmd.WithEnvPrefix("SONR_CHAIN"),
		cmd.CustomizeStartCmd(start),
		// this line is used by starport scaffolding # root/arguments

	)
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		os.Exit(1)
	}
}

func start(cmd *cobra.Command) {
	cmd.Aliases = append(cmd.Aliases, "sonr", "sonrd")
	calledAs := cmd.CalledAs()
	if calledAs == "sonr" {
		fmt.Printf("[INFO] Starting %s\n", calledAs)
		RootCmd.Execute()
		select {}
	}
}
