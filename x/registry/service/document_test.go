package service_test

import (
	"testing"

	"github.com/sonr-io/sonr/x/registry/service"
	"github.com/stretchr/testify/assert"
)

// TestNewSecp256DIDDocument
func TestNewSecp256DIDDocument(t *testing.T) {
	doc := service.NewSecp256DIDDocument("")
	assert.Equal(t, "did:sonr:bafybeiemzcxynbrrhtcpmmdtkl42molkiyfqu3j5ewp2o7izdmomptfkgi", doc.Id)
}
