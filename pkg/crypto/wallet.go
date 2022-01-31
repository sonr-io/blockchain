package crypto

import (
	"errors"
	"log"

	"github.com/cosmos/cosmos-sdk/crypto"
	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	device "github.com/sonr-io/sonr/core"
)

type GenerateOption func(*options) error

func WithPassphrase(s string) GenerateOption {
	return func(o *options) error {
		o.passphrase = s
		return nil
	}
}

// WithFolder sets HD path for the keyring
func WithFolder(f device.Folder) GenerateOption {
	return func(o *options) error {
		if device.Exists(f.Path()) {
			o.walletFolder = f
			return nil
		}

		if device.IsDesktop() {
			p, err := device.Support.CreateFolder(".wallet")
			if err != nil {
				return err
			}
			o.walletFolder = device.Folder(p)
		}
		return errors.New("HD path does not exist")
	}
}

type options struct {
	sname        string
	walletFolder device.Folder
	passphrase   string
}

func defaultOptions(sname string) *options {
	return &options{
		sname:      sname,
		passphrase: "bad-passphrase",
	}
}

// ExportWallet returns armored private key and public key
func ExportWallet(kr keyring.Keyring, sname string, passphrase string) (string, error) {
	armor, err := kr.ExportPrivKeyArmor(sname, passphrase)
	if err != nil {
		return "", err
	}
	return armor, nil
}

// RestoreWallet restores a private key from ASCII armored format.
func RestoreWallet(sname string, armor string, passphrase string) (keyring.Keyring, error) {
	privKey, algo, err := crypto.UnarmorDecryptPrivKey(armor, passphrase)
	if err != nil {
		return nil, err
	}
	kr := keyring.NewInMemory()
	if err := kr.ImportPrivKey(sname, algo, passphrase); err != nil {
		return nil, err
	}
	log.Println(privKey.PubKey())
	return kr, nil
}
