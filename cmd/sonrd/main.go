package main

import (
	"fmt"
	"os"

	svrcmd "github.com/cosmos/cosmos-sdk/server/cmd"
	"github.com/sonr-io/sonr/app"
	"github.com/spf13/viper"
	cmd "github.com/tendermint/spm/cosmoscmd"
)

func init() {
	// Sets the default values for the configuration.
	viper.SetConfigName("sonr")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".")
	viper.AddConfigPath("$HOME/.config/sonr")
	viper.AddConfigPath("$HOME/.sonr")
	viper.AddConfigPath("/etc/sonr")
	viper.AddConfigPath("/usr/local/etc/sonr")
	viper.AddConfigPath("/usr/local/sonr")
	viper.AddConfigPath("/opt/homebrew/etc/sonr")
	viper.AutomaticEnv()

	viper.SetDefault("highway.address", ":")
	viper.SetDefault("highway.port", 69420)
	viper.SetDefault("highway.did", "")
	viper.SetDefault("highway.network", "tcp")
	viper.SetDefault("ipfs.port", 4001)
	viper.SetDefault("ipfs.path", "/ipfs")
	viper.SetDefault("libp2p.lowWater", 200)
	viper.SetDefault("libp2p.highWater", 400)
	viper.SetDefault("libp2p.rendevouz", "/sonr/rendevouz/0.9.2")
	viper.SetDefault("libp2p.bootstrap.peers", []string{
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN",
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa",
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb",
		"/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt",
		"/ip4/104.131.131.82/tcp/4001/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
		"/ip4/104.131.131.82/udp/4001/quic/p2p/QmaCpDMGvV2BGHeYERUEnRQAwe3N8SzbUtfsmvsqQLuvuJ",
	})
}

func main() {
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
	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.cli.yaml)")

	// Execute the root command.
	if err := svrcmd.Execute(rootCmd, app.DefaultNodeHome); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
