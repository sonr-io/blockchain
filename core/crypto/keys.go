package crypto

import (
	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	"github.com/cosmos/cosmos-sdk/crypto/keys/multisig"
	"github.com/cosmos/cosmos-sdk/crypto/types"

	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
)

// KeyCategory is the platform the key is designed for
type KeyCategory int

const (
	// KeyCategory_KEY_CATEGORY_SONR_MASTER is the key that is used for the wallet (Secp256k1)
	KeyCategory_KEY_CATEGORY_SONR_MASTER KeyCategory = iota

	// KeyCategory_KEY_CATEGORY_SONR_DEVICE is for the individual device registration (ed25119)
	KeyCategory_KEY_CATEGORY_SONR_DEVICE

	// KeyCategory_KEY_CATEGORY_SONR_PROVISION is the multisignature key for the provisioning
	// dapps on the network (multisig)
	KeyCategory_KEY_CATEGORY_SONR_PROVISION

	// KeyCategory_KEY_CATEGORY_ETHEREUM is the key that is used for Ethereum wallets
	KeyCategory_KEY_CATEGORY_ETHEREUM
)

// KeyType is the type of key that is being used
type KeyType int

const (
	// KeyType_KEY_TYPE_ED25519 is the ed25519 key type
	KeyType_KEY_TYPE_ED25519 KeyType = iota

	// KeyType_KEY_TYPE_SECP256K1 is the secp256k1 key type
	KeyType_KEY_TYPE_SECP256K1

	// KeyType_KEY_TYPE_MULTISIG is the multisignature key type
	KeyType_KEY_TYPE_MULTISIG
)

// CreateEd25519Key generates a new ed25519 key
func CreateEd25519Key() (types.PubKey, *ed25519.PrivKey) {
	priv := ed25519.GenPrivKey()
	return priv.PubKey(), priv
}

// CreateSecp256k1Key generates a new secp256k1 key
func CreateSecp256k1Key() (cryptotypes.PubKey, *secp256k1.PrivKey) {
	priv := secp256k1.GenPrivKey()
	return priv.PubKey(), priv
}

// CreateMultiSigKey generates a new multisig key
func CreateMultiSigKey() *multisig.LegacyAminoPubKey {
	pk1 := secp256k1.GenPrivKey().PubKey()
	pks := []cryptotypes.PubKey{pk1, pk1}
	return multisig.NewLegacyAminoPubKey(1, pks)
}
