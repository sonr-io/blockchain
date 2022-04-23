package types

import (
	ot "go.buf.build/grpc/go/sonr-io/blockchain/object"
)

func NewObjectDocFromBuf(obj *ot.ObjectDoc) *ObjectDoc {
	return &ObjectDoc{
		Label:       obj.GetLabel(),
		Description: obj.GetDescription(),
		Did:         obj.GetDid(),
		BucketDid:   obj.GetBucketDid(),
		Fields:      NewObjectMapFromBuf(obj.GetFields()),
	}
}

func NewObjectDocToBuf(obj *ObjectDoc) *ot.ObjectDoc {
	return &ot.ObjectDoc{
		Label:       obj.GetLabel(),
		Description: obj.GetDescription(),
		Did:         obj.GetDid(),
		BucketDid:   obj.GetBucketDid(),
		Fields:      NewObjectMapToBuf(obj.GetFields()),
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
func (o *ObjectDoc) MergeFields(l map[string]*ObjectValue) {
	for k, v := range l {
		o.Fields[k] = v
	}
}

// RemoveFields takes a list of ObjectFields
// and removes the matching label from the ObjectDoc
// func (o *ObjectDoc) RemoveFields(l ...*TypeField) {
// 	for i, v := range o.GetFields() {
// 		if strings.EqualFold(v.GetName(), l[i].GetName()) {
// 			o.Fields = append(o.Fields[:i], o.Fields[i+1:]...)
// 		}
// 	}
// }

func NewObjectValueFromBuf(tf *ot.ObjectValue) *ObjectValue {
	newList := make([]*ObjectValue, len(tf.GetListValue()))
	for i, v := range tf.GetListValue() {
		newList[i] = NewObjectValueFromBuf(v)
	}
	newMap := make(map[string]*ObjectValue)
	for k, v := range tf.GetMapValue() {
		newMap[k] = NewObjectValueFromBuf(v)
	}

	var newVal isObjectValue_Value
	switch tf.Value.(type) {
	case *ot.ObjectValue_BoolValue:
		newVal = &ObjectValue_BoolValue{BoolValue: tf.GetBoolValue()}
	case *ot.ObjectValue_IntValue:
		newVal = &ObjectValue_IntValue{IntValue: tf.GetIntValue()}
	case *ot.ObjectValue_FloatValue:
		newVal = &ObjectValue_FloatValue{FloatValue: tf.GetFloatValue()}
	case *ot.ObjectValue_StringValue:
		newVal = &ObjectValue_StringValue{StringValue: tf.GetStringValue()}
	case *ot.ObjectValue_BytesValue:
		newVal = &ObjectValue_BytesValue{BytesValue: tf.GetBytesValue()}
	case *ot.ObjectValue_LinkValue:
		newVal = &ObjectValue_LinkValue{LinkValue: tf.GetLinkValue()}
	}

	return &ObjectValue{
		MapValue:  newMap,
		ListValue: newList,
		Value:     newVal,
	}
}

func NewObjectValueToBuf(tf *ObjectValue) *ot.ObjectValue {
	newList := make([]*ot.ObjectValue, len(tf.GetListValue()))
	for i, v := range tf.GetListValue() {
		newList[i] = NewObjectValueToBuf(v)
	}
	newMap := make(map[string]*ot.ObjectValue)
	for k, v := range tf.GetMapValue() {
		newMap[k] = NewObjectValueToBuf(v)
	}

	switch tf.Value.(type) {
	case *ObjectValue_BoolValue:
		return &ot.ObjectValue{
			MapValue:  newMap,
			ListValue: newList,
			Value:     &ot.ObjectValue_BoolValue{BoolValue: tf.GetBoolValue()},
		}
	case *ObjectValue_IntValue:
		return &ot.ObjectValue{
			MapValue:  newMap,
			ListValue: newList,
			Value:     &ot.ObjectValue_IntValue{IntValue: tf.GetIntValue()},
		}
	case *ObjectValue_FloatValue:
		return &ot.ObjectValue{
			MapValue:  newMap,
			ListValue: newList,
			Value:     &ot.ObjectValue_FloatValue{FloatValue: tf.GetFloatValue()},
		}
	case *ObjectValue_StringValue:
		return &ot.ObjectValue{
			MapValue:  newMap,
			ListValue: newList,
			Value:     &ot.ObjectValue_StringValue{StringValue: tf.GetStringValue()},
		}
	case *ObjectValue_BytesValue:
		return &ot.ObjectValue{
			MapValue:  newMap,
			ListValue: newList,
			Value:     &ot.ObjectValue_BytesValue{BytesValue: tf.GetBytesValue()},
		}
	case *ObjectValue_LinkValue:
		return &ot.ObjectValue{
			MapValue:  newMap,
			ListValue: newList,
			Value:     &ot.ObjectValue_LinkValue{LinkValue: tf.GetLinkValue()},
		}
	}

	return nil
}

func NewTypeFieldToBuf(tf *TypeField) *ot.TypeField {
	return &ot.TypeField{
		Name: tf.Name,
		Kind: ot.TypeKind(tf.Kind),
	}
}

func NewObjectMapFromBuf(tfl map[string]*ot.ObjectValue) map[string]*ObjectValue {
	var l map[string]*ObjectValue
	for k, v := range tfl {
		l[k] = NewObjectValueFromBuf(v)
	}
	return l
}

func NewObjectMapToBuf(tfl map[string]*ObjectValue) map[string]*ot.ObjectValue {
	var l map[string]*ot.ObjectValue
	for k, v := range tfl {
		l[k] = NewObjectValueToBuf(v)
	}
	return l
}
