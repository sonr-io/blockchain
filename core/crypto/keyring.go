package crypto

import (
	"crypto/rand"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// KeyringType is the type of the Keyring
type KeyringType int32

const (
	// KeyringType_KEYRING_TYPE_IN_MEMORY is the default value
	KeyringType_KEYRING_TYPE_IN_MEMORY KeyringType = 0

	// KeyringType_KEYRING_TYPE_DEFAULT is a string or text field
	KeyringType_KEYRING_TYPE_DEFAULT KeyringType = 1
)

var (
	Keyring           keyring.Keyring
	sec               = hd.Secp256k1
	defaultPassphrase = keyring.DefaultBIP39Passphrase
)

func (g *generateOptions) Apply() (map[string]string, error) {
	if g.keyringType == KeyringType_KEYRING_TYPE_IN_MEMORY {
		Keyring = keyring.NewInMemory()
		return setupKeyring(g.sname, "")
	}

	ring, err := keyring.New("sonr", "os", g.walletPath, rand.Reader)
	if err != nil {
		return nil, err
	}

	Keyring = ring
	return setupKeyring(g.sname, g.walletPath)
}

func setupKeyring(sname string, path string) (map[string]string, error) {
	// Select the encryption and storage for your cryptostore
	result := make(map[string]string)

	// Add keys and see they return in alphabetical order
	wallet, mnemonic, err := Keyring.NewMnemonic(sname, keyring.English, sdk.FullFundraiserPath, defaultPassphrase, sec)
	if err != nil {
		return nil, err
	}

	// Create default sonr keys
	pub, _ := CreateEd25519Key()
	msig := CreateMultiSigKey()
	Keyring.SavePubKey("device", pub, hd.Ed25519Type)
	Keyring.SaveMultisig("provision", msig)

	// Add keys and see they return in alphabetical order
	result["sName"] = sname
	result["mnemonic"] = mnemonic
	result["walletAddress"] = wallet.GetAddress().String()
	result["masterPublicKey"] = wallet.GetPubKey().String()
	result["devicePublicKey"] = pub.String()
	result["provisionPublicKey"] = msig.Address().String()
	return result, nil
}
