package types

import (
	"strings"

	ot "go.buf.build/grpc/go/sonr-io/blockchain/object"
)

func NewObjectDocFromBuf(obj *ot.ObjectDoc) *ObjectDoc {
	return &ObjectDoc{
		Label:       obj.Label,
		Description: obj.Description,
		Did:         obj.Did,
		BucketDid:   obj.BucketDid,
		Fields:      NewTypeFieldListFromBuf(obj.Fields),
	}
}

func NewObjectDocToBuf(obj *ObjectDoc) *ot.ObjectDoc {
	return &ot.ObjectDoc{
		Label:       obj.Label,
		Description: obj.Description,
		Did:         obj.Did,
		BucketDid:   obj.BucketDid,
		Fields:      NewTypeFieldListToBuf(obj.Fields),
	}
}


func (o *ObjectDoc) Validate(b *ObjectDoc) bool {
	if o.GetLabel() != b.GetLabel() {
		return false
	}

	for k, v := range o.GetFields() {
		if b.GetFields()[k] != v {
			return false
		}
	}
	return true
}

// AddFields takes a list of fields and adds it to ObjectDoc
func (o *ObjectDoc) AddFields(l ...*TypeField) {
	for i, v := range o.GetFields() {
		if strings.EqualFold(v.GetName(), l[i].GetName()) {
			o.Fields[i] = l[i]
		}
	}
}

// RemoveFields takes a list of ObjectFields
// and removes the matching label from the ObjectDoc
func (o *ObjectDoc) RemoveFields(l ...*TypeField) {
	for i, v := range o.GetFields() {
		if strings.EqualFold(v.GetName(), l[i].GetName()) {
			o.Fields = append(o.Fields[:i], o.Fields[i+1:]...)
		}
	}
}

func NewTypeFieldFromBuf(tf *ot.TypeField) *TypeField {
	return &TypeField{
		Name: tf.Name,
		Kind: TypeKind(tf.Kind),
	}
}

func NewTypeFieldToBuf(tf *TypeField) *ot.TypeField {
	return &ot.TypeField{
		Name: tf.Name,
		Kind: ot.TypeKind(tf.Kind),
	}
}

func NewTypeFieldListFromBuf(tfl []*ot.TypeField) []*TypeField {
	var l []*TypeField
	for _, v := range tfl {
		l = append(l, NewTypeFieldFromBuf(v))
	}
	return l
}

func NewTypeFieldListToBuf(tfl []*TypeField) []*ot.TypeField {
	var l []*ot.TypeField
	for _, v := range tfl {
		l = append(l, NewTypeFieldToBuf(v))
	}
	return l
}
