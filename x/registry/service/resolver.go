package service

import "context"

// ResolverFunc is the function signature for resolving DIDs
type ResolverFunc func(ctx context.Context, did DID) (interface{}, error)

const (
	// PublicKeyJwk is the type of public key verification method
	PublicKeyJwk = "PublicKeyJwk"

	// PublicKeyMultibase is the type of public key verification method
	PublicKeyMultibase = "PublicKeyMultibase"
)

// VerificationMethodType is the map of verification method types
var VerificationMethodType = map[string]string{
	"JsonWebKey2020":             PublicKeyJwk,
	"Ed25519VerificationKey2020": PublicKeyMultibase,
}

// ValidNetworkPrefixes is the map of valid network prefixes
var ValidNetworkPrefixes = []string{
	"mainnet",
	"testnet",
	"devnet",
}

// GetVerificationMethodType returns the verification method type
func GetVerificationMethodType(vmType string) string {
	return VerificationMethodType[vmType]
}
