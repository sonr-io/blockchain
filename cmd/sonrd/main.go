package main

import (
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/sonr-io/sonr/app"
	"github.com/sonr-io/sonr/cmd/sonrd/commands"
	"github.com/sonr-io/sonr/cmd/sonrd/frontend"
	"github.com/sonr-io/sonr/cmd/sonrd/highway"
	cmd "github.com/tendermint/spm/cosmoscmd"
)

var isCLI bool = false
var isHighway bool = false
var isDashboard bool = false
var isSonrd bool = true

func main() {
	if isHighway {
		highway.Start()
		return
	} else if isCLI {
		err := commands.RootCmd.Execute()
		if err != nil {
			os.Exit(1)
		}
		return
	} else if isDashboard {
		frontend.Start()
		return
	} else {
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
}
