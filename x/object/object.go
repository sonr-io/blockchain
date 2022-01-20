package object

import (
	"time"

	"github.com/sonr-io/sonr/core/did"

	o "github.com/sonr-io/sonr/x/object/types"
)

type Object interface {
	// NewTextField creates a new field for a string on the object doc
	NewTextField(name string, value string) (did.DID, error)

	// NewIntegerField creates a new field for an integer on the object doc
	NewIntegerField(name string, value int) (did.DID, error)

	// NewBooleanField creates a new field for a boolean on the object doc
	NewBooleanField(name string, value bool) (did.DID, error)

	// NewFloatField creates a new field for a float on the object doc
	NewFloatField(name string, value float64) (did.DID, error)

	// NewDateField creates a new field for a date on the object doc
	NewDateField(name string, value time.Time) (did.DID, error)

	// NewArrayField creates a new field for an array on the object doc
	NewArrayField(name string, value []interface{}) (did.DID, error)

	// NewObjectField creates a new field for an object on the object doc
	NewObjectField(name string, value map[string]interface{}) (did.DID, error)

	// GetField returns a field value
	GetField(name string) (*o.ObjectField, bool)
}
