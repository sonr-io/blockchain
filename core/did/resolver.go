package did

import "context"

type ResolverFunc func(ctx context.Context, did DID) (interface{}, error)

const (
	PublicKeyJwk       = "PublicKeyJwk"
	PublicKeyMultibase = "PublicKeyMultibase"
)

var VerificationMethodType = map[string]string{
	"JsonWebKey2020":             PublicKeyJwk,
	"Ed25519VerificationKey2020": PublicKeyMultibase,
}

var ValidNetworkPrefixes = []string{
	"mainnet",
	"testnet",
	"devnet",
}

// GetVerificationMethodType returns the verification method type
func GetVerificationMethodType(vmType string) string {
	return VerificationMethodType[vmType]
}
