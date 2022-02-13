package service

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	"github.com/sonr-io/sonr/x/registry/types"
)

var (
	DefaultContext = []string{
		"https: //www.w3.org/ns/did/v1",
		"https://w3id.org/security/suites/jws-2020/v1",
		"https://w3id.org/security/suites/ed25519-2020/v1",
	}
)

type DocOption func(bo *docConfig)

func SetDeviceId(deviceId string, label string) DocOption {
	return func(bo *docConfig) {
		bo.deviceId = deviceId
		bo.deviceLabel = label
	}
}

func SetPubKey(pubKey secp256k1.PubKey, keyID string) DocOption {
	return func(bo *docConfig) {
		bo.pubKey = pubKey
		bo.keyID = keyID
	}
}

func SetSName(sName string) DocOption {
	return func(bo *docConfig) {
		bo.sName = sName
	}
}

func SetContext(ctx []string) DocOption {
	return func(bo *docConfig) {
		for _, c := range ctx {
			bo.context = append(bo.context, c)
		}
	}
}

type docConfig struct {
	sonrAccountAddr string
	deviceId        string
	pubKey          secp256k1.PubKey
	sName           string
	deviceLabel     string
	keyID           string
	context         []string
}

func defaultDocConfig(sonrAccountAdr string) *docConfig {
	return &docConfig{
		sonrAccountAddr: sonrAccountAdr,
		deviceId:        "000001",
		pubKey:          secp256k1.PubKey{},
		sName:           "test",
		deviceLabel:     "Anon",
		keyID:           "",
		context:         DefaultContext,
	}
}

func (bo *docConfig) GetBase() string {
	return "did:sonr:" + bo.sonrAccountAddr
}

func (bo *docConfig) GetController() string {
	return fmt.Sprintf("did:sonr:%s#%s", bo.sonrAccountAddr, bo.deviceId)
}

func NewSecp256DIDDocument(sonrAccountAddr string, options ...DocOption) *types.DidDocument {
	opts := defaultDocConfig(sonrAccountAddr)
	for _, o := range options {
		o(opts)
	}
	return &types.DidDocument{
		Context:    opts.context,
		Id:         "did:sonr:" + sonrAccountAddr,
		Controller: []string{},
		VerificationMethod: []*types.VerificationMethod{
			NewSecp256VerificationMethod(opts),
		},
	}
}

func NewSecp256VerificationMethod(cfg *docConfig) *types.VerificationMethod {
	return &types.VerificationMethod{
		Type:            types.VerificationMethod_TYPE_ECDSA_SECP256K1,
		PublicKeyBase58: cfg.pubKey.String(),
		Controller:      cfg.GetController(),
		Id:              cfg.keyID,
	}
}
