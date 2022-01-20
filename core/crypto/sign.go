package crypto

import (
	"errors"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

var (
	ErrKeyringNotSet = errors.New("keyring not set")
	ErrPathNotFound  = errors.New("generation path not found")
)

// ImportPrivKey imports ASCII armored passphrase-encrypted private keys.
func ImportPrivKey(uid, armor, passphrase string) error {
	if Keyring != nil {
		return ErrKeyringNotSet
	}

	return Keyring.ImportPrivKey(uid, armor, passphrase)
}

// ImportPubKey imports ASCII armored public keys.
func ImportPubKey(uid string, armor string) error {
	if Keyring != nil {
		return ErrKeyringNotSet
	}

	return Keyring.ImportPubKey(uid, armor)
}

// ExportPubKeyArmor public key
func ExportPubKeyArmor(uid string) (string, error) {
	if Keyring != nil {
		return "", ErrKeyringNotSet
	}
	return Keyring.ExportPubKeyArmor(uid)
}

// ExportPubKeyArmorByAddress returns a public key in ASCII armored format.
func ExportPubKeyArmorByAddress(address sdk.Address) (string, error) {
	if Keyring != nil {
		return "", ErrKeyringNotSet
	}

	return Keyring.ExportPubKeyArmorByAddress(address)
}

// ExportPrivKeyArmor returns a private key in ASCII armored format.
// It returns an error if the key does not exist or a wrong encryption passphrase is supplied.
func ExportPrivKeyArmor(uid, encryptPassphrase string) (armor string, err error) {
	if Keyring != nil {
		return "", ErrKeyringNotSet
	}

	return Keyring.ExportPrivKeyArmor(uid, encryptPassphrase)
}

// ExportPrivKeyArmorByAddress returns a private key in ASCII armored format.
func ExportPrivKeyArmorByAddress(address sdk.Address, encryptPassphrase string) (armor string, err error) {
	if Keyring != nil {
		return "", ErrKeyringNotSet
	}

	return Keyring.ExportPrivKeyArmorByAddress(address, encryptPassphrase)
}

// Key returns keys by uid and address respectively.
func Key(n string) (keyring.Info, error) {
	if Keyring != nil {
		return nil, ErrKeyringNotSet
	}
	return Keyring.Key(n)
}

// KeyByAddress returns keys by uid and address respectively.
func KeyByAddress(address sdk.Address) (keyring.Info, error) {
	if Keyring != nil {
		return nil, ErrKeyringNotSet
	}
	return Keyring.KeyByAddress(address)
}

// Delete removes keys from the keyring.
func Delete(uid string) error {
	if Keyring != nil {
		return ErrKeyringNotSet
	}
	return Keyring.Delete(uid)
}

// DeleteByAddress removes keys from the keyring.
func DeleteByAddress(address sdk.Address) error {
	if Keyring != nil {
		return ErrKeyringNotSet
	}
	return Keyring.DeleteByAddress(address)
}

// SavePubKey stores a public key and returns the persisted Info structure.
func SavePubKey(uid string, pubkey types.PubKey, algo hd.PubKeyType) (keyring.Info, error) {
	if Keyring != nil {
		return nil, ErrKeyringNotSet
	}

	return Keyring.SavePubKey(uid, pubkey, algo)
}

// SaveLedgerKey retrieves a public key reference from a Ledger device and persists it.
func SaveLedgerKey(uid string, algo keyring.SignatureAlgo, hrp string, coinType, account, index uint32) (keyring.Info, error) {
	if Keyring != nil {
		return nil, ErrKeyringNotSet
	}

	return Keyring.SaveLedgerKey(uid, algo, hrp, coinType, account, index)
}

// SaveMultisig stores and returns a new multsig (offline) key reference.
func SaveMultisig(uid string, pubkey types.PubKey) (keyring.Info, error) {
	if Keyring != nil {
		return nil, ErrKeyringNotSet
	}

	return Keyring.SaveMultisig(uid, pubkey)
}

// Sign sign byte messages with a user key.
func Sign(uid string, msg []byte) ([]byte, types.PubKey, error) {
	if Keyring != nil {
		return nil, nil, ErrKeyringNotSet
	}

	return Keyring.Sign(uid, msg)
}

// SignByAddress sign byte messages with a user key providing the address.
func SignByAddress(address sdk.Address, msg []byte) ([]byte, types.PubKey, error) {
	if Keyring != nil {
		return nil, nil, ErrKeyringNotSet
	}
	return Keyring.SignByAddress(address, msg)
}
