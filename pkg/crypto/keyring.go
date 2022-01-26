package crypto

import (
	"crypto/rand"
	"fmt"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/crypto/keys/multisig"
	. "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/core/device"
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
	Keyring              keyring.Keyring
	walletFolder         device.Folder
	sec                  = hd.Secp256k1
	defaultPassphrase    = keyring.DefaultBIP39Passphrase
	sonrProvisionKeyFile = "sonr-provision.priv"
	sonrDeviceKeyFile    = "sonr-device.priv"
)

func (g *options) Apply() (map[string]string, error) {
	id, err := device.ID()
	if err != nil {
		return nil, err
	}
	if g.keyringType == KeyringType_KEYRING_TYPE_IN_MEMORY {
		Keyring = keyring.NewInMemory()
		return setupKeyring(g.sname, id, g.walletFolder)
	}

	ring, err := keyring.New("sonr", "os", g.walletFolder.Path(), rand.Reader)
	if err != nil {
		return nil, err
	}

	Keyring = ring
	walletFolder = g.walletFolder
	return setupKeyring(g.sname, id, g.walletFolder)
}

func setupKeyring(sname string, id string, folder device.Folder) (map[string]string, error) {
	// Select the encryption and storage for your cryptostore
	result := make(map[string]string)

	// Add keys and see they return in alphabetical order
	master, mnemonic, err := Keyring.NewMnemonic(snrToMasterUid(sname), keyring.English, sdk.FullFundraiserPath, defaultPassphrase, sec)
	if err != nil {
		return nil, err
	}

	// Create default sonr key
	privKey, msig, err := CreateMultiSigKey(folder, mnemonic)
	if err != nil {
		return nil, err
	}

	if _, err := Keyring.SaveMultisig(snrToProvisionUid(sname), msig); err != nil {
		return nil, err
	}

	// Add keys and see they return in alphabetical order
	result["sName"] = sname
	result["mnemonic"] = mnemonic
	result["masterAddress"] = master.GetAddress().String()
	result["masterPublicKey"] = master.GetPubKey().String()
	result["devicePublicKey"] = privKey.p2p.PubKey().String()
	result["provisionPublicKey"] = msig.Address().String()
	return result, nil
}

func snrToMasterUid(sname string) string {
	return fmt.Sprintf("%s.master", sname)
}

func snrToDeviceUid(sname string, id string) string {
	return fmt.Sprintf("%s.%s", sname, id)
}

func snrToProvisionUid(sname string) string {
	return fmt.Sprintf("%s.provision", sname)
}

// CreateMultiSigKey generates a new multisig key
func CreateMultiSigKey(folder device.Folder, mnemonic string) (*PrivateKey, *multisig.LegacyAminoPubKey, error) {
	priv, pub, err := NewKeyPair(mnemonic)
	if err != nil {
		return nil, nil, err
	}
	pks := []PubKey{pub, pub}
	buf, err := priv.Marshal()
	if err != nil {
		return nil, nil, err
	}
	if err := folder.WriteFile(sonrProvisionKeyFile, buf); err != nil {
		return nil, nil, err
	}

	return priv, multisig.NewLegacyAminoPubKey(1, pks), nil
}
