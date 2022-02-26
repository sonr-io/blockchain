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
	ssi "github.com/nuts-foundation/go-did"
	"github.com/nuts-foundation/go-did/did"
	"github.com/sonr-io/sonr/x/registry/types"
)

// RegisterName registers a name with the registry for the given validated
func (k msgServer) RegisterName(goCtx context.Context, msg *types.MsgRegisterName) (*types.MsgRegisterNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	doc, err := GenerateDid(msg.GetCreator())
	if err != nil {
		return nil, err
	}

	// Convert to chain type
	didDoc, err := DidToChain(msg.GetNameToRegister(), doc)
	if err != nil {
		return nil, err
	}

	didJson, _ := json.MarshalIndent(didDoc, "", "  ")
	fmt.Println(string(didJson))

	// Unmarshalling of a json did document:
	parsedDIDDoc := did.Document{}
	err = json.Unmarshal(didJson, &parsedDIDDoc)
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to unmarshal did document")
	}

	// Try getting name information from the store
	whois, _ := k.GetWhoIs(ctx, msg.GetNameToRegister())
	// If the message sender address doesn't match the name owner, throw an error
	if !(msg.Creator == whois.GetCreator()) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Incorrect Owner")
	}
	// Otherwise, create an updated whois record
	newWhois := types.WhoIs{
		Address: msg.GetNameToRegister(),
		Did:     didDoc.Id,
		Value:   didDoc,
		Creator: msg.Creator,
	}
	// Write whois information to the store
	k.SetWhoIs(ctx, newWhois)
	return &types.MsgRegisterNameResponse{}, nil
}

// GenerateDid generates a new did document
func GenerateDid(accountAddr string) (*did.Document, error) {
	didStr := fmt.Sprintf("did:sonr:%s", accountAddr)
	didID, err := did.ParseDID(didStr)
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

// DidToChain converts a did document to the Sonr Blockchain DID format
func DidToChain(sName string, doc *did.Document) (*types.DidDocument, error) {
	// Convert ssi.Context to string array
	var ctx []string
	for _, v := range doc.Context {
		ctx = append(ctx, v.String())
	}

	// Convert VerificationMethod to types.VerificationMethod array
	var vms []*types.VerificationMethod
	for _, v := range doc.AssertionMethod {
		// Get the PublicKey
		k, err := v.JWK()
		if err != nil {
			return nil, sdkerrors.Wrap(err, "failed to get public key")
		}
		// Get crv, x, y, and kid
		jwk, err := k.AsMap(context.Background())
		if err != nil {
			return nil, sdkerrors.Wrap(err, "failed to get jwk")
		}

		// Convert map interface to map strings
		var jwkMap map[string]string
		for k, v := range jwk {
			jwkMap[k] = v.(string)
		}

		// Create a new VerificationMethod
		vm := &types.VerificationMethod{
			Id:           v.ID.String(),
			Controller:   v.Controller.String(),
			PublicKeyJwk: jwkMap,
		}
		vms = append(vms, vm)
	}

	// Return DidDocument
	return &types.DidDocument{
		Context:            ctx,
		Id:                 doc.ID.String(),
		VerificationMethod: vms,
		AlsoKnownAs:        []string{sName},
	}, nil
}
