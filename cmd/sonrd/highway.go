// +build cli

package main

import (
	"fmt"

	"github.com/spf13/cobra"
)

// createHwyCmd represents the serve command
var highwayObjectCmd = &cobra.Command{
	Use:   "object",
	Short: "Manage Objects on the Sonr Blockchain.",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("serve called")
	},
}

// serveCmd represents the serve command
var highwayChannelCmd = &cobra.Command{
	Use:   "channel",
	Short: "Manage Channels on the Sonr Blockchain.",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("serve called")
	},
}

// serveCmd represents the serve command
var highwayBucketCmd = &cobra.Command{
	Use:   "bucket",
	Short: "Manage Project Buckets for the Sonr Blockchain.",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("serve called")
	},
}

// serveCmd represents the serve command
var highwayBlobCmd = &cobra.Command{
	Use:   "blob",
	Short: "Upload/Download/Delete Blobs stored on IPFS",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("serve called")
	},
}

// highwayCmd represents the deploy command
var highwayCmd = &cobra.Command{
	Use:   "highway",
	Short: "Manage your Highway node on the Sonr Testnet and Local Dev Enviorment",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	PreRun: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			cmd.Usage()
			return
		}
	},
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Usage()
	},
	SuggestFor: []string{"highway", "h"},
	Aliases:    []string{"h"},
}

func init() {
	highwayCmd.AddCommand(highwayObjectCmd, highwayChannelCmd, highwayBucketCmd, highwayBlobCmd)
	RootCmd.AddCommand(highwayCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// serveCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// serveCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
