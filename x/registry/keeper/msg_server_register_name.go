package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sonr-io/blockchain/x/registry/types"
)

// RegisterName registers a name with the registry for the given validated
func (k msgServer) RegisterName(goCtx context.Context, msg *types.MsgRegisterName) (*types.MsgRegisterNameResponse, error) {
	// Get the sender address and Generate BaseID
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check for valid length
	name, err := types.ValidateName(msg.GetNameToRegister())
	if err != nil {
		return nil, err
	}

	// Try getting name information from the store
	whois, found := k.GetWhoIs(ctx, name)
	if found {
		// If the message sender address doesn't match the name owner, throw an error
		if !(msg.Creator == whois.GetCreator()) {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Registered name is owned by another address")
		} else {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Name already registered to this Account")
		}
	}

	// Create a new DID Document
	doc, err := types.GenerateNameDid(msg.GetCreator(), name, msg.GetCredential())
	if err != nil {
		return nil, err
	}

	// Marshal the DID Document
	didJson, err := doc.MarshalJSON()
	if err != nil {
		return nil, err
	}

	// Create a new who is record
	newWhois := types.WhoIs{
		Name:     name,
		Did:      doc.ID.ID,
		Document: didJson,
		Creator:  msg.GetCreator(),
		Type:     types.WhoIs_User,
	}

	// Create new session object
	session := &types.Session{
		BaseDid:    doc.ID.ID,
		Whois:      &newWhois,
		Credential: msg.GetCredential(),
	}

	// Write whois information to the store
	newWhois.AddCredential(msg.GetCredential())
	k.SetWhoIs(ctx, newWhois)

	// Return the DID and WhoIs information
	return &types.MsgRegisterNameResponse{

		WhoIs:   &newWhois,
		Session: session,
	}, nil
}
