// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: object/object.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type TypeKind int32

const (
	TypeKind_TypeKind_Invalid TypeKind = 0
	TypeKind_TypeKind_Map     TypeKind = 1
	TypeKind_TypeKind_List    TypeKind = 2
	TypeKind_TypeKind_Unit    TypeKind = 3
	TypeKind_TypeKind_Bool    TypeKind = 4
	TypeKind_TypeKind_Int     TypeKind = 5
	TypeKind_TypeKind_Float   TypeKind = 6
	TypeKind_TypeKind_String  TypeKind = 7
	TypeKind_TypeKind_Bytes   TypeKind = 8
	TypeKind_TypeKind_Link    TypeKind = 9
	TypeKind_TypeKind_Struct  TypeKind = 10
	TypeKind_TypeKind_Union   TypeKind = 11
	TypeKind_TypeKind_Enum    TypeKind = 12
	TypeKind_TypeKind_Any     TypeKind = 13
)

var TypeKind_name = map[int32]string{
	0:  "TypeKind_Invalid",
	1:  "TypeKind_Map",
	2:  "TypeKind_List",
	3:  "TypeKind_Unit",
	4:  "TypeKind_Bool",
	5:  "TypeKind_Int",
	6:  "TypeKind_Float",
	7:  "TypeKind_String",
	8:  "TypeKind_Bytes",
	9:  "TypeKind_Link",
	10: "TypeKind_Struct",
	11: "TypeKind_Union",
	12: "TypeKind_Enum",
	13: "TypeKind_Any",
}

var TypeKind_value = map[string]int32{
	"TypeKind_Invalid": 0,
	"TypeKind_Map":     1,
	"TypeKind_List":    2,
	"TypeKind_Unit":    3,
	"TypeKind_Bool":    4,
	"TypeKind_Int":     5,
	"TypeKind_Float":   6,
	"TypeKind_String":  7,
	"TypeKind_Bytes":   8,
	"TypeKind_Link":    9,
	"TypeKind_Struct":  10,
	"TypeKind_Union":   11,
	"TypeKind_Enum":    12,
	"TypeKind_Any":     13,
}

func (x TypeKind) String() string {
	return proto.EnumName(TypeKind_name, int32(x))
}

func (TypeKind) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_2aa16d24592bbae0, []int{0}
}

// ObjectDoc is a document for an Object stored in the graph.
type ObjectDoc struct {
	// Label is human-readable name of the bucket.
	Label string `protobuf:"bytes,1,opt,name=label,proto3" json:"label,omitempty"`
	// Description is a human-readable description of the bucket.
	Description string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	// Did is the identifier of the object.
	Did string `protobuf:"bytes,3,opt,name=did,proto3" json:"did,omitempty"`
	// Bucket is the did of the bucket that contains this object.
	BucketDid string `protobuf:"bytes,4,opt,name=bucket_did,json=bucketDid,proto3" json:"bucket_did,omitempty"`
	// Fields are the fields associated with the object.
	Fields []*TypeField `protobuf:"bytes,5,rep,name=fields,proto3" json:"fields,omitempty"`
}

func (m *ObjectDoc) Reset()         { *m = ObjectDoc{} }
func (m *ObjectDoc) String() string { return proto.CompactTextString(m) }
func (*ObjectDoc) ProtoMessage()    {}
func (*ObjectDoc) Descriptor() ([]byte, []int) {
	return fileDescriptor_2aa16d24592bbae0, []int{0}
}
func (m *ObjectDoc) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ObjectDoc) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ObjectDoc.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ObjectDoc) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ObjectDoc.Merge(m, src)
}
func (m *ObjectDoc) XXX_Size() int {
	return m.Size()
}
func (m *ObjectDoc) XXX_DiscardUnknown() {
	xxx_messageInfo_ObjectDoc.DiscardUnknown(m)
}

var xxx_messageInfo_ObjectDoc proto.InternalMessageInfo

func (m *ObjectDoc) GetLabel() string {
	if m != nil {
		return m.Label
	}
	return ""
}

func (m *ObjectDoc) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *ObjectDoc) GetDid() string {
	if m != nil {
		return m.Did
	}
	return ""
}

func (m *ObjectDoc) GetBucketDid() string {
	if m != nil {
		return m.BucketDid
	}
	return ""
}

func (m *ObjectDoc) GetFields() []*TypeField {
	if m != nil {
		return m.Fields
	}
	return nil
}

type TypeField struct {
	// Name is the name of the field.
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Type is the type of the field.
	Kind TypeKind `protobuf:"varint,2,opt,name=kind,proto3,enum=sonrio.sonr.object.TypeKind" json:"kind,omitempty"`
}

func (m *TypeField) Reset()         { *m = TypeField{} }
func (m *TypeField) String() string { return proto.CompactTextString(m) }
func (*TypeField) ProtoMessage()    {}
func (*TypeField) Descriptor() ([]byte, []int) {
	return fileDescriptor_2aa16d24592bbae0, []int{1}
}
func (m *TypeField) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TypeField) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TypeField.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TypeField) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TypeField.Merge(m, src)
}
func (m *TypeField) XXX_Size() int {
	return m.Size()
}
func (m *TypeField) XXX_DiscardUnknown() {
	xxx_messageInfo_TypeField.DiscardUnknown(m)
}

var xxx_messageInfo_TypeField proto.InternalMessageInfo

func (m *TypeField) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *TypeField) GetKind() TypeKind {
	if m != nil {
		return m.Kind
	}
	return TypeKind_TypeKind_Invalid
}

func init() {
	proto.RegisterEnum("sonrio.sonr.object.TypeKind", TypeKind_name, TypeKind_value)
	proto.RegisterType((*ObjectDoc)(nil), "sonrio.sonr.object.ObjectDoc")
	proto.RegisterType((*TypeField)(nil), "sonrio.sonr.object.TypeField")
}

func init() { proto.RegisterFile("object/object.proto", fileDescriptor_2aa16d24592bbae0) }

var fileDescriptor_2aa16d24592bbae0 = []byte{
	// 406 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xcf, 0x6e, 0xd3, 0x40,
	0x10, 0xc6, 0xe3, 0xfc, 0xa3, 0x9e, 0xb4, 0x65, 0x98, 0xf6, 0x90, 0x03, 0xb5, 0xa2, 0x9e, 0x2a,
	0x04, 0x36, 0x2a, 0xe2, 0x01, 0x88, 0x4a, 0xa4, 0x0a, 0x10, 0x22, 0xd0, 0x0b, 0x97, 0xca, 0xde,
	0x5d, 0xda, 0x21, 0xce, 0xae, 0x15, 0xaf, 0x11, 0x7e, 0x0b, 0xee, 0x3c, 0x02, 0x2f, 0xc2, 0xb1,
	0x47, 0x8e, 0x28, 0x79, 0x11, 0xe4, 0x75, 0x6a, 0xe1, 0x22, 0x4e, 0xfb, 0xf9, 0xf7, 0x7d, 0x33,
	0xfa, 0x64, 0x0d, 0x1c, 0x98, 0xe4, 0xb3, 0x12, 0x36, 0xaa, 0x9f, 0x30, 0x5b, 0x19, 0x6b, 0x88,
	0x72, 0xa3, 0x57, 0x6c, 0xc2, 0xea, 0x09, 0x6b, 0xe7, 0xf8, 0x87, 0x07, 0xfe, 0x5b, 0x27, 0xcf,
	0x8c, 0xa0, 0x43, 0x18, 0xa4, 0x71, 0xa2, 0xd2, 0xb1, 0x37, 0xf1, 0x4e, 0xfc, 0x79, 0xfd, 0x41,
	0x13, 0x18, 0x49, 0x95, 0x8b, 0x15, 0x67, 0x96, 0x8d, 0x1e, 0x77, 0x9d, 0xf7, 0x37, 0x22, 0x84,
	0x9e, 0x64, 0x39, 0xee, 0x39, 0xa7, 0x92, 0x74, 0x04, 0x90, 0x14, 0x62, 0xa1, 0xec, 0x65, 0x65,
	0xf4, 0x9d, 0xe1, 0xd7, 0xe4, 0x8c, 0x25, 0x3d, 0x87, 0xe1, 0x27, 0x56, 0xa9, 0xcc, 0xc7, 0x83,
	0x49, 0xef, 0x64, 0x74, 0x7a, 0x14, 0xfe, 0xdb, 0x2d, 0xfc, 0x50, 0x66, 0x6a, 0x56, 0xa5, 0xe6,
	0xdb, 0xf0, 0xf1, 0x3b, 0xf0, 0x1b, 0x48, 0x04, 0x7d, 0x1d, 0x2f, 0xd5, 0xb6, 0xab, 0xd3, 0xf4,
	0x14, 0xfa, 0x0b, 0xd6, 0xd2, 0x75, 0xdc, 0x3f, 0x7d, 0xf8, 0xbf, 0xad, 0xaf, 0x58, 0xcb, 0xb9,
	0x4b, 0x3e, 0xfa, 0xde, 0x85, 0x9d, 0x5b, 0x44, 0x87, 0x80, 0xb7, 0xfa, 0xf2, 0x5c, 0x7f, 0x89,
	0x53, 0x96, 0xd8, 0x21, 0x84, 0xdd, 0x86, 0xbe, 0x89, 0x33, 0xf4, 0xe8, 0x01, 0xec, 0x35, 0xe4,
	0x35, 0xe7, 0x16, 0xbb, 0x2d, 0x74, 0xa1, 0xd9, 0x62, 0xaf, 0x85, 0xa6, 0xc6, 0xa4, 0xd8, 0x6f,
	0xad, 0x3a, 0xd7, 0x16, 0x07, 0x44, 0xb0, 0xdf, 0x90, 0x59, 0x6a, 0x62, 0x8b, 0x43, 0x3a, 0x80,
	0xfb, 0x0d, 0x7b, 0x6f, 0x57, 0xac, 0xaf, 0xf0, 0x5e, 0x2b, 0x38, 0x2d, 0xad, 0xca, 0x71, 0xe7,
	0x4e, 0x0f, 0xbd, 0x40, 0xff, 0xee, 0x6c, 0x21, 0x2c, 0x42, 0x6b, 0xf6, 0x42, 0xb3, 0xd1, 0x38,
	0x6a, 0xcd, 0xbe, 0xd4, 0xc5, 0x12, 0x77, 0x5b, 0xed, 0x5e, 0xe8, 0x12, 0xf7, 0xa6, 0xb3, 0x9f,
	0xeb, 0xc0, 0xbb, 0x59, 0x07, 0xde, 0xef, 0x75, 0xe0, 0x7d, 0xdb, 0x04, 0x9d, 0x9b, 0x4d, 0xd0,
	0xf9, 0xb5, 0x09, 0x3a, 0x1f, 0x1f, 0x5f, 0xb1, 0xbd, 0x2e, 0x92, 0x50, 0x98, 0x65, 0x54, 0xfd,
	0xde, 0x27, 0x6c, 0xa2, 0x24, 0x35, 0x62, 0x21, 0xae, 0x63, 0xd6, 0xd1, 0xd7, 0xed, 0xe9, 0x45,
	0xb6, 0xcc, 0x54, 0x9e, 0x0c, 0xdd, 0x05, 0x3e, 0xfb, 0x13, 0x00, 0x00, 0xff, 0xff, 0xaf, 0x84,
	0x2a, 0xae, 0x98, 0x02, 0x00, 0x00,
}

func (m *ObjectDoc) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ObjectDoc) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ObjectDoc) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Fields) > 0 {
		for iNdEx := len(m.Fields) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Fields[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintObject(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.BucketDid) > 0 {
		i -= len(m.BucketDid)
		copy(dAtA[i:], m.BucketDid)
		i = encodeVarintObject(dAtA, i, uint64(len(m.BucketDid)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Did) > 0 {
		i -= len(m.Did)
		copy(dAtA[i:], m.Did)
		i = encodeVarintObject(dAtA, i, uint64(len(m.Did)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Description) > 0 {
		i -= len(m.Description)
		copy(dAtA[i:], m.Description)
		i = encodeVarintObject(dAtA, i, uint64(len(m.Description)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Label) > 0 {
		i -= len(m.Label)
		copy(dAtA[i:], m.Label)
		i = encodeVarintObject(dAtA, i, uint64(len(m.Label)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *TypeField) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TypeField) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TypeField) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Kind != 0 {
		i = encodeVarintObject(dAtA, i, uint64(m.Kind))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintObject(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintObject(dAtA []byte, offset int, v uint64) int {
	offset -= sovObject(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ObjectDoc) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Label)
	if l > 0 {
		n += 1 + l + sovObject(uint64(l))
	}
	l = len(m.Description)
	if l > 0 {
		n += 1 + l + sovObject(uint64(l))
	}
	l = len(m.Did)
	if l > 0 {
		n += 1 + l + sovObject(uint64(l))
	}
	l = len(m.BucketDid)
	if l > 0 {
		n += 1 + l + sovObject(uint64(l))
	}
	if len(m.Fields) > 0 {
		for _, e := range m.Fields {
			l = e.Size()
			n += 1 + l + sovObject(uint64(l))
		}
	}
	return n
}

func (m *TypeField) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovObject(uint64(l))
	}
	if m.Kind != 0 {
		n += 1 + sovObject(uint64(m.Kind))
	}
	return n
}

func sovObject(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozObject(x uint64) (n int) {
	return sovObject(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ObjectDoc) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowObject
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ObjectDoc: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ObjectDoc: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Label", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthObject
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthObject
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Label = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Description", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthObject
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthObject
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Description = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Did", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthObject
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthObject
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Did = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BucketDid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthObject
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthObject
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BucketDid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Fields", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthObject
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthObject
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Fields = append(m.Fields, &TypeField{})
			if err := m.Fields[len(m.Fields)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipObject(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthObject
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *TypeField) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowObject
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TypeField: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TypeField: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthObject
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthObject
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Kind", wireType)
			}
			m.Kind = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowObject
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Kind |= TypeKind(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipObject(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthObject
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipObject(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowObject
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowObject
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowObject
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthObject
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupObject
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthObject
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthObject        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowObject          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupObject = fmt.Errorf("proto: unexpected end of group")
)
