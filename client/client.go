package main

import (
	"context"
	"fmt"
	"log"

	"github.com/sonr-io/sonr/x/registry/types"
	"github.com/tendermint/starport/starport/pkg/cosmosclient"
)

func main() {

	// create an instance of cosmosclient
	cosmos, err := cosmosclient.New(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	// account `alice` was initialized during `starport chain serve`
	accountName := "alice"

	// get account from the keyring by account name and return a bech32 address
	address, err := cosmos.Address(accountName)
	if err != nil {
		log.Fatal(err)
	}

	// define a message to create a post
	msg := &types.MsgRegisterName{
		Creator: address.String(),
		NameToRegister: "sonr",
	}

	// broadcast a transaction from account `alice` with the message to create a post
	// store response in txResp
	txResp, err := cosmos.BroadcastTx(accountName, msg)
	if err != nil {
		log.Fatal(err)
	}

	// print response from broadcasting a transaction
	fmt.Print("MsgCreatePost:\n\n")
	fmt.Println(txResp)

	// instantiate a query client for your `blog` blockchain
	queryClient := types.NewQueryClient(cosmos.Context)

	// query the blockchain using the client's `PostAll` method to get all posts
	// store all posts in queryResp
	queryResp, err := queryClient.WhoIsAll(context.Background(), &types.QueryAllWhoIsRequest{})
	if err != nil {
		log.Fatal(err)
	}

	// print response from querying all the posts
	fmt.Print("\n\nAll posts:\n\n")
	fmt.Println(queryResp)
}
