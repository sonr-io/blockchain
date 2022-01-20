package crypto

import (
	"errors"

	"github.com/sonr-io/sonr/core/device"
	"github.com/tendermint/tendermint/libs/os"
)

type GenerateOption func(*generateOptions) error

func WithPassphrase(s string) GenerateOption {
	return func(o *generateOptions) error {
		o.passphrase = s
		return nil
	}
}

// WithType sets keyring to either NewInMemory, or 99Designs cross-platform implementation
func WithType(t KeyringType) GenerateOption {
	return func(o *generateOptions) error {
		o.keyringType = t
		return nil
	}
}

// WithPath sets HD path for the keyring
func WithPath(s string) GenerateOption {
	return func(o *generateOptions) error {
		if os.FileExists(s) {
			o.walletPath = s
			return nil
		}

		if device.IsDesktop() {
			p, err := device.Support.CreateFolder(".wallet")
			if err != nil {
				return err
			}

			o.walletPath = p.Path()
		}
		return errors.New("HD path does not exist")
	}
}

type generateOptions struct {
	keyringType KeyringType
	sname       string
	walletPath  string
	passphrase  string
}

func defaultGenerateOptions(sname string) generateOptions {
	return generateOptions{
		keyringType: KeyringType_KEYRING_TYPE_IN_MEMORY,
		sname:       sname,
	}
}

func GenerateWallet(sname string, options ...GenerateOption) (map[string]string, error) {
	opts := defaultGenerateOptions(sname)
	for _, option := range options {
		if err := option(&opts); err != nil {
			return nil, err
		}
	}

	return opts.Apply()
}

func OpenWallet(sname string) (map[string]string, error) {
	return nil, nil
}
