/*
Copyright © 2022 NAME HERE <EMAIL ADDRESS>

*/
package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// bindCmd represents the bind command
var bindCmd = &cobra.Command{
	Use:   "bind",
	Short: "Bind a motor node to a frontend framework: (React, Flutter)",
	Args:  cobra.OnlyValidArgs,
	PreRun: func(cmd *cobra.Command, args []string) {
		if len(args) == 0 {
			fmt.Println("Please specify a frontend framework: (React, Flutter) ")
			cmd.Usage()
			return
		}
	},
	Run: func(cmd *cobra.Command, args []string) {

	},
}

// motorCmd represents the bind command
var motorCmd = &cobra.Command{
	Use:   "motor",
	Short: "Create or Manage a motor node",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Usage()
	},
	SuggestFor: []string{"motor", "m"},
	Aliases:    []string{"m"},
}

func init() {
	motorCmd.AddCommand(bindCmd)
	rootCmd.AddCommand(motorCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// bindCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// bindCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
