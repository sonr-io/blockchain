package crypto

import (
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/libp2p/go-libp2p-core/crypto"
)

type PublicKey struct {
	p2p crypto.PubKey
	cryptotypes.PubKey
}

type PrivateKey struct {
	crypto.PrivKey
	p2p *secp256k1.PrivKey
}

func (pk *PrivateKey) Marshal() ([]byte, error) {
	return crypto.MarshalPrivateKey(pk.PrivKey)
}

func (pk *PrivateKey) Sign(msg []byte) ([]byte, error) {
	return pk.p2p.Sign(msg)
}

func NewKeyPair(seed string) (*PrivateKey, *PublicKey, error) {
	priv := secp256k1.GenPrivKeyFromSecret([]byte(seed))
	privp2p, err := crypto.UnmarshalSecp256k1PrivateKey(priv.Bytes())
	if err != nil {
		return nil, nil, err
	}

	return &PrivateKey{
			PrivKey: privp2p,
			p2p:     priv,
		}, &PublicKey{
			PubKey: priv.PubKey(),
			p2p:    privp2p.GetPublic(),
		}, nil
}
