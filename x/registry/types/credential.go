package types

import (
	"crypto"

	"github.com/duo-labs/webauthn/webauthn"
	"github.com/fxamacker/cbor/v2"
)

// ConvertToSonrCredential converts a webauthn.Credential to a sonrio.sonr.registry.Credential
func ConvertToSonrCredential(cred webauthn.Credential) *Credential {
	// Create a new credential
	c := &Credential{
		ID:              cred.ID,
		PublicKey:       cred.PublicKey,
		AttestationType: cred.AttestationType,
		Authenticator:   ConvertToSonrAuthenticator(cred.Authenticator),
	}
	return c
}

// ToWebAuthn converts a sonrio.sonr.registry.Credential to a webauthn.Credential
func (cred *Credential) ToWebAuthn() webauthn.Credential {
	return webauthn.Credential{
		ID:              cred.ID,
		PublicKey:       cred.PublicKey,
		AttestationType: cred.AttestationType,
		Authenticator:   cred.Authenticator.ToWebAuthn(),
	}
}

// ConvertToSonrAuthenticator converts a webauthn.Authenticator to a sonrio.sonr.registry.Authenticator
func ConvertToSonrAuthenticator(auth webauthn.Authenticator) *Authenticator {
	return &Authenticator{
		Aaguid:       auth.AAGUID,
		SignCount:    auth.SignCount,
		CloneWarning: auth.CloneWarning,
	}
}

// ToWebAuthn converts a sonrio.sonr.registry.Authenticator to a webauthn.Authenticator
func (auth *Authenticator) ToWebAuthn() webauthn.Authenticator {
	return webauthn.Authenticator{
		AAGUID:       auth.Aaguid,
		SignCount:    auth.SignCount,
		CloneWarning: auth.CloneWarning,
	}
}

// DecodePublicKey converts a public key from a CBOR encoded byte array to a crypto.PublicKey
func (cred *Credential) DecodePublicKey() (crypto.PublicKey, error) {
	coseKey := COSEKey{}
	err := cbor.Unmarshal(cred.PublicKey, &coseKey)
	if err != nil {
		return nil, err
	}
	pubKey, err := DecodePublicKey(&coseKey)
	if err != nil {
		return nil, err
	}
	return pubKey, nil
}
