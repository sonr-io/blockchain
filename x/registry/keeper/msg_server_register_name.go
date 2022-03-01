package keeper

import (
	"context"
	"crypto/ecdsa"
	"crypto/elliptic"
	"crypto/rand"
	"encoding/json"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	ssi "github.com/sonr-io/go-did"
	"github.com/sonr-io/go-did/did"
	"github.com/sonr-io/sonr/x/registry/types"
)

// RegisterName registers a name with the registry for the given validated
func (k msgServer) RegisterName(goCtx context.Context, msg *types.MsgRegisterName) (*types.MsgRegisterNameResponse, error) {
	// Get the sender address and Generate BaseID
	ctx := sdk.UnwrapSDKContext(goCtx)
	doc, err := GenerateDid(msg.GetCreator())
	if err != nil {
		return nil, err
	}

	// Convert to chain type
	// Marshal to json
	didJson, err := json.MarshalIndent(doc, "", "  ")
	if err != nil {
		return nil, err
	}
	print(string(didJson))

	// Unmarshalling of a json did document:
	parsedDIDDoc := did.Document{}
	err = json.Unmarshal(didJson, &parsedDIDDoc)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to unmarshal did document")
	}

	// Try getting name information from the store
	whois, found := k.GetWhoIs(ctx, msg.GetNameToRegister())
	if found {
		// If the message sender address doesn't match the name owner, throw an error
		if !(msg.Creator == whois.GetCreator()) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Registered name is owned by another address")
		} else {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Name already registered to this Account")
		}
	}

	// Otherwise, create an updated whois record
	newWhois := types.WhoIs{
		Name:     msg.GetNameToRegister(),
		Did:      doc.ID.ID,
		Document: didJson,
		Creator:  msg.Creator,
	}

	// Write whois information to the store
	k.SetWhoIs(ctx, newWhois)

	return &types.MsgRegisterNameResponse{
		IsSuccess:       true,
		DidUrl:          doc.ID.ID,
		DidDocumentJson: string(didJson),
	}, nil
}

// GenerateDid generates a new did document
func GenerateDid(accountAddr string) (*did.Document, error) {
	didStr, err := did.Build(accountAddr)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to build did")
	}

	didID, err := did.ParseDID(didStr.String())
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to parse did")
	}

	// Empty did document:
	doc := &did.Document{
		Context: []ssi.URI{did.DIDContextV1URI()},
		ID:      *didID,
	}

	// Add an assertionMethod
	keyIDstr := fmt.Sprintf("%s#key1", didStr)
	keyID, _ := did.ParseDIDURL(keyIDstr)
	keyPair, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to generate key pair")
	}

	// Create a new JWK
	verificationMethod, err := did.NewVerificationMethod(*keyID, ssi.JsonWebKey2020, did.DID{}, keyPair.Public())
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to create verification method")
	}

	// This adds the method to the VerificationMethod list and stores a reference to the assertion list
	doc.AddAssertionMethod(verificationMethod)
	return doc, nil
}
