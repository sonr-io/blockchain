package crypto

import (
	"crypto/rand"
	"fmt"

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
	bob, mnemonic, err := Keyring.NewMnemonic(sname, keyring.English, sdk.FullFundraiserPath, defaultPassphrase, sec)
	if err != nil {
		// this should never happen
		return nil, err
	}

	result["sName"] = sname
	result["mnemonic"] = mnemonic
	result["address"] = bob.GetAddress().String()
	result["publicKey"] = bob.GetPubKey().String()

	fmt.Println("%s address:", sname, mnemonic)

	infoList, _ := Keyring.List()
	for _, k := range infoList {
		fmt.Println(k.GetName())
	}

	// We need to use passphrase to generate a signature
	tx := []byte("deadbeef")
	sig, pub, err := Keyring.Sign(sname, tx)
	if err != nil {
		fmt.Println("don't accept real passphrase")
	}

	// and we can validate the signature with publicly available info
	bRecord, err := Keyring.Key(sname)
	if err != nil {
		fmt.Println("don't accept real passphrase")
	}

	key := bRecord.GetPubKey()
	bobKey := bob.GetPubKey()
	if !key.Equals(bobKey) {
		fmt.Println("Get and Create return different keys")
	}

	if pub.Equals(key) {
		fmt.Println("signed by Bob")
	}
	if !bobKey.VerifySignature(tx, sig) {
		fmt.Println("invalid signature")
	}

	// Output:
	return result, nil
}
