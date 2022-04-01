package types

import (
	"fmt"

	"github.com/duo-labs/webauthn/protocol"
	"github.com/duo-labs/webauthn/webauthn"
)

// AddCredential adds a webauthn credential to the whois object on the registry
func (w *WhoIs) AddCredential(cred *Credential) {
	if w.Credentials == nil {
		w.Credentials = make([]*Credential, 0)
	}
	w.Credentials = append(w.Credentials, cred)
}

// WebAuthnID returns the ID of the user's authenticator
func (w *WhoIs) WebAuthnID() []byte {
	// Unmarshal DID document from JSON
	return []byte(w.GetName())
}

// WebAuthnDisplayName returns the display name of the user's authenticator
func (w *WhoIs) WebAuthnName() string {
	return w.GetName()
}

// WebAuthnDisplayName returns the display name of the user's authenticator
func (w *WhoIs) WebAuthnDisplayName() string {
	return fmt.Sprintf("%s.snr", w.GetName())
}

// WebAuthnIcon returns the icon of the user's authenticator
func (w *WhoIs) WebAuthnIcon() string {
	return ""
}

// WebAuthnCredentials returns credentials owned by the user
func (w *WhoIs) WebAuthnCredentials() []webauthn.Credential {
	credentials := []webauthn.Credential{}
	for _, cred := range w.Credentials {
		credentials = append(credentials, cred.ToWebAuthn())
	}
	return credentials
}

// CredentialExcludeList returns a CredentialDescriptor array filled
// with all the user's credentials
func (w *WhoIs) CredentialExcludeList() []protocol.CredentialDescriptor {
	credentialExcludeList := []protocol.CredentialDescriptor{}
	for _, cred := range w.GetCredentials() {
		descriptor := protocol.CredentialDescriptor{
			Type:         protocol.PublicKeyCredentialType,
			CredentialID: cred.ID,
		}
		credentialExcludeList = append(credentialExcludeList, descriptor)
	}

	return credentialExcludeList
}
