package types

import "strings"

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
func (o *ObjectDoc) AddFields(l ...*ObjectField) {
	i := 0
	for k, v := range o.GetFields() {
		if strings.EqualFold(k, l[i].GetLabel()) && v.Did == l[i].GetDid() {
			o.Fields[l[i].GetLabel()] = l[i]
		}
		i++
	}
}

// RemoveFields takes a list of ObjectFields
// and removes the matching label from the ObjectDoc
func (o *ObjectDoc) RemoveFields(l ...*ObjectField) {
	i := 0
	for k, v := range o.GetFields() {
		if strings.EqualFold(k, l[i].GetLabel()) && v.Did == l[i].GetDid() {
			delete(o.Fields, k)
		}
		i++
	}
}
