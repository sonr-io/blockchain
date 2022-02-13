package cli

import "github.com/spf13/cobra"

// RootCmd represents the base command when called without any subcommands
var RootCmd = &cobra.Command{
	Use:   "sonrd cli [command]",
	Short: "The Sonr Highway CLI tool",
	Long:  `Manage your Motor node configuration, highway services, and blockchain registered types, with the Sonr CLI tool.`,
}
