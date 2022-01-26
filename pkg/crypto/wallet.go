package crypto

import (
	"crypto/rand"
	"errors"

	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	"github.com/sonr-io/sonr/core/device"
)

type GenerateOption func(*options) error

func WithPassphrase(s string) GenerateOption {
	return func(o *options) error {
		o.passphrase = s
		return nil
	}
}

// WithType sets keyring to either NewInMemory, or 99Designs cross-platform implementation
func WithType(t KeyringType) GenerateOption {
	return func(o *options) error {
		o.keyringType = t
		return nil
	}
}

// WithPath sets HD path for the keyring
func WithPath(s string) GenerateOption {
	return func(o *options) error {
		if device.IsFile(s) {
			o.walletFolder = device.Folder(s)
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
	keyringType  KeyringType
	sname        string
	walletFolder device.Folder
	passphrase   string
}

func defaultOptions(sname string) *options {
	return &options{
		keyringType: KeyringType_KEYRING_TYPE_IN_MEMORY,
		sname:       sname,
	}
}

func GenerateWallet(sname string, options ...GenerateOption) (map[string]string, error) {
	opts := defaultOptions(sname)
	for _, option := range options {
		if err := option(opts); err != nil {
			return nil, err
		}
	}
	return opts.Apply()
}

// ExportWallet returns armored private key and public key
func ExportWallet(sname string, passphrase string) (string, error) {
	armor, err := Keyring.ExportPrivKeyArmor(sname, passphrase)
	if err != nil {
		return "", err
	}
	return armor, nil
}

// RestoreWallet restores a private key from ASCII armored format.
func RestoreWallet(sname string, armor string, passphrase string) error {
	keyring.New("sonr", "os", "", rand.Reader)

	err := Keyring.ImportPrivKey(sname, armor, passphrase)
	if err != nil {
		return err
	}
	return nil
}

func MasterKey() (keyring.Info, error) {
	if Keyring == nil {
		return nil, ErrKeyringNotSet
	}
	return Keyring.Key("master")
}

func DeviceKey() (keyring.Info, error) {
	if Keyring == nil {
		return nil, ErrKeyringNotSet
	}
	return Keyring.Key("device")
}

func ProvisionKey() (keyring.Info, error) {
	if Keyring == nil {
		return nil, ErrKeyringNotSet
	}
	return Keyring.Key("provision")
}
