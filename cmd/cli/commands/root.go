package commands

import "github.com/spf13/cobra"

// RootCmd represents the base command when called without any subcommands
var RootCmd = &cobra.Command{
	Use:   "sonr",
	Short: "The Official Sonr CLI tool",
	Long:  `Manage your Motor node configuration, highway services, and blockchain registered types, with the Sonr CLI tool.`,
}
