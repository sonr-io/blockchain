package crypto_test

import (
	"errors"
	"testing"

	"github.com/sonr-io/sonr/core/crypto"
)

func TestGenerateWallet(t *testing.T) {
	res, err := crypto.GenerateWallet("test")
	if err != nil {
		t.Fatal(err)
	}

	res2, err := crypto.GenerateWallet("test2", crypto.WithType(crypto.KeyringType_KEYRING_TYPE_DEFAULT))
	if err != nil {
		t.Fatal(err)
	}

	if err := validateResult(res); err != nil {
		t.Fatal(err)
	}

	if err := validateResult(res2); err != nil {
		t.Fatal(err)
	}

}

func validateResult(m map[string]string) error {
	if m["mnemonic"] == "" {
		return errors.New("mnemonic is empty")
	}

	if m["address"] == "" {
		return errors.New("address is empty")
	}

	if m["publicKey"] == "" {
		return errors.New("publicKey is empty")
	}

	if m["sName"] == "" {
		return errors.New("sName is empty")
	}

	return nil
}
