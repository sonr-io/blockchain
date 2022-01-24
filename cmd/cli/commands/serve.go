package commands

import (
	"log"
	"os/exec"

	"github.com/spf13/cobra"
)

// ServeCmd represents the serve command
var ServeCmd = &cobra.Command{
	Use:   "serve",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		// Find highwayd path
		pathd, err := exec.LookPath("highwayd")
		if err != nil {
			log.Fatal("[ERROR] highwayd is not installed")
		}
		hwaydCmd := exec.Command(pathd)
		// Run highwayd

		pathdash, err := exec.LookPath("highway-dashboard")
		if err != nil {
			log.Fatal("[ERROR] highway-dashboard is not installed")
		}
		hwaydashCmd := exec.Command(pathdash)
		hwaydCmd.Run()
		hwaydashCmd.Run()
	},
}

func init() {

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// serveCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// serveCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
