package crypto

import (
	"github.com/cosmos/cosmos-sdk/crypto/keys/multisig"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	. "github.com/cosmos/cosmos-sdk/crypto/types"
)

// CreateMultiSigKey generates a new multisig key
func CreateMultiSigKey() *multisig.LegacyAminoPubKey {
	pk1 := secp256k1.GenPrivKey().PubKey()
	pks := []PubKey{pk1, pk1}
	return multisig.NewLegacyAminoPubKey(1, pks)
}
