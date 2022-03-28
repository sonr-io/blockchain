package keeper

import (
	"context"
	"crypto/rsa"
	"crypto/x509"
	"encoding/json"
	"encoding/pem"
	"fmt"
	"log"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/registry/types"
	ssi "github.com/sonr-io/go-did"
	"github.com/sonr-io/go-did/did"
)

// RegisterName registers a name with the registry for the given validated
func (k msgServer) RegisterName(goCtx context.Context, msg *types.MsgRegisterName) (*types.MsgRegisterNameResponse, error) {
	// Get the sender address and Generate BaseID
	ctx := sdk.UnwrapSDKContext(goCtx)
	doc, err := GenerateDid(msg.GetCreator(), msg.String(), msg.GetPublicKeyBuffer())
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
func GenerateDid(accountAddr, nameToRegister string, pubBuf []byte) (*did.Document, error) {
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
		AlsoKnownAs: []string{
			nameToRegister,
		},
	}

	// Add an assertionMethod
	keyIDstr := fmt.Sprintf("%s#key1", didStr)
	keyID, _ := did.ParseDIDURL(keyIDstr)
	// Create a new JWK
	verificationMethod, err := did.NewVerificationMethod(*keyID, ssi.JsonWebKey2020, did.DID{}, BytesToPublicKey(pubBuf))
	if err != nil {
		return nil, sdkerrors.Wrap(err, "failed to create verification method")
	}

	// This adds the method to the VerificationMethod list and stores a reference to the assertion list
	doc.AddAssertionMethod(verificationMethod)
	return doc, nil
}

// BytesToPublicKey bytes to public key
func BytesToPublicKey(pub []byte) *rsa.PublicKey {
	block, _ := pem.Decode(pub)
	enc := x509.IsEncryptedPEMBlock(block)
	b := block.Bytes
	var err error
	if enc {
		log.Println("is encrypted pem block")
		b, err = x509.DecryptPEMBlock(block, nil)
		if err != nil {
			log.Fatalln(err)
		}
	}
	ifc, err := x509.ParsePKIXPublicKey(b)
	if err != nil {
		log.Fatalln(err)
	}
	key, ok := ifc.(*rsa.PublicKey)
	if !ok {
		log.Fatalln("not ok")
	}
	return key
}
