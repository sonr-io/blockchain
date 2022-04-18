// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: object/query.proto

package types

import (
	context "context"
	fmt "fmt"
	query "github.com/cosmos/cosmos-sdk/types/query"
	_ "github.com/gogo/protobuf/gogoproto"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	types "github.com/sonr-io/blockchain/x/registry/types"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
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

// QueryParamsRequest is request type for the Query/Params RPC method.
type QueryParamsRequest struct {
}

func (m *QueryParamsRequest) Reset()         { *m = QueryParamsRequest{} }
func (m *QueryParamsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryParamsRequest) ProtoMessage()    {}
func (*QueryParamsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_96e82c889b96923b, []int{0}
}
func (m *QueryParamsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsRequest.Merge(m, src)
}
func (m *QueryParamsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsRequest proto.InternalMessageInfo

// QueryParamsResponse is response type for the Query/Params RPC method.
type QueryParamsResponse struct {
	// params holds all the parameters of this module.
	Params Params `protobuf:"bytes,1,opt,name=params,proto3" json:"params"`
}

func (m *QueryParamsResponse) Reset()         { *m = QueryParamsResponse{} }
func (m *QueryParamsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryParamsResponse) ProtoMessage()    {}
func (*QueryParamsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_96e82c889b96923b, []int{1}
}
func (m *QueryParamsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryParamsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryParamsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryParamsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryParamsResponse.Merge(m, src)
}
func (m *QueryParamsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryParamsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryParamsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryParamsResponse proto.InternalMessageInfo

func (m *QueryParamsResponse) GetParams() Params {
	if m != nil {
		return m.Params
	}
	return Params{}
}

type QueryWhatIsRequest struct {
	Did     string         `protobuf:"bytes,1,opt,name=did,proto3" json:"did,omitempty"`
	Session *types.Session `protobuf:"bytes,2,opt,name=session,proto3" json:"session,omitempty"`
}

func (m *QueryWhatIsRequest) Reset()         { *m = QueryWhatIsRequest{} }
func (m *QueryWhatIsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryWhatIsRequest) ProtoMessage()    {}
func (*QueryWhatIsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_96e82c889b96923b, []int{2}
}
func (m *QueryWhatIsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryWhatIsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryWhatIsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryWhatIsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryWhatIsRequest.Merge(m, src)
}
func (m *QueryWhatIsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryWhatIsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryWhatIsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryWhatIsRequest proto.InternalMessageInfo

func (m *QueryWhatIsRequest) GetDid() string {
	if m != nil {
		return m.Did
	}
	return ""
}

func (m *QueryWhatIsRequest) GetSession() *types.Session {
	if m != nil {
		return m.Session
	}
	return nil
}

type QueryWhatIsResponse struct {
	WhatIs WhatIs `protobuf:"bytes,1,opt,name=what_is,json=whatIs,proto3" json:"what_is"`
}

func (m *QueryWhatIsResponse) Reset()         { *m = QueryWhatIsResponse{} }
func (m *QueryWhatIsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryWhatIsResponse) ProtoMessage()    {}
func (*QueryWhatIsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_96e82c889b96923b, []int{3}
}
func (m *QueryWhatIsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryWhatIsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryWhatIsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryWhatIsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryWhatIsResponse.Merge(m, src)
}
func (m *QueryWhatIsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryWhatIsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryWhatIsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryWhatIsResponse proto.InternalMessageInfo

func (m *QueryWhatIsResponse) GetWhatIs() WhatIs {
	if m != nil {
		return m.WhatIs
	}
	return WhatIs{}
}

type QueryAllWhatIsRequest struct {
	Pagination *query.PageRequest `protobuf:"bytes,1,opt,name=pagination,proto3" json:"pagination,omitempty"`
	Session    *types.Session     `protobuf:"bytes,2,opt,name=session,proto3" json:"session,omitempty"`
}

func (m *QueryAllWhatIsRequest) Reset()         { *m = QueryAllWhatIsRequest{} }
func (m *QueryAllWhatIsRequest) String() string { return proto.CompactTextString(m) }
func (*QueryAllWhatIsRequest) ProtoMessage()    {}
func (*QueryAllWhatIsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_96e82c889b96923b, []int{4}
}
func (m *QueryAllWhatIsRequest) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllWhatIsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllWhatIsRequest.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllWhatIsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllWhatIsRequest.Merge(m, src)
}
func (m *QueryAllWhatIsRequest) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllWhatIsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllWhatIsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllWhatIsRequest proto.InternalMessageInfo

func (m *QueryAllWhatIsRequest) GetPagination() *query.PageRequest {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func (m *QueryAllWhatIsRequest) GetSession() *types.Session {
	if m != nil {
		return m.Session
	}
	return nil
}

type QueryAllWhatIsResponse struct {
	WhatIs     []WhatIs            `protobuf:"bytes,1,rep,name=what_is,json=whatIs,proto3" json:"what_is"`
	Pagination *query.PageResponse `protobuf:"bytes,2,opt,name=pagination,proto3" json:"pagination,omitempty"`
}

func (m *QueryAllWhatIsResponse) Reset()         { *m = QueryAllWhatIsResponse{} }
func (m *QueryAllWhatIsResponse) String() string { return proto.CompactTextString(m) }
func (*QueryAllWhatIsResponse) ProtoMessage()    {}
func (*QueryAllWhatIsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_96e82c889b96923b, []int{5}
}
func (m *QueryAllWhatIsResponse) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *QueryAllWhatIsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_QueryAllWhatIsResponse.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *QueryAllWhatIsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_QueryAllWhatIsResponse.Merge(m, src)
}
func (m *QueryAllWhatIsResponse) XXX_Size() int {
	return m.Size()
}
func (m *QueryAllWhatIsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_QueryAllWhatIsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_QueryAllWhatIsResponse proto.InternalMessageInfo

func (m *QueryAllWhatIsResponse) GetWhatIs() []WhatIs {
	if m != nil {
		return m.WhatIs
	}
	return nil
}

func (m *QueryAllWhatIsResponse) GetPagination() *query.PageResponse {
	if m != nil {
		return m.Pagination
	}
	return nil
}

func init() {
	proto.RegisterType((*QueryParamsRequest)(nil), "sonrio.sonr.object.QueryParamsRequest")
	proto.RegisterType((*QueryParamsResponse)(nil), "sonrio.sonr.object.QueryParamsResponse")
	proto.RegisterType((*QueryWhatIsRequest)(nil), "sonrio.sonr.object.QueryWhatIsRequest")
	proto.RegisterType((*QueryWhatIsResponse)(nil), "sonrio.sonr.object.QueryWhatIsResponse")
	proto.RegisterType((*QueryAllWhatIsRequest)(nil), "sonrio.sonr.object.QueryAllWhatIsRequest")
	proto.RegisterType((*QueryAllWhatIsResponse)(nil), "sonrio.sonr.object.QueryAllWhatIsResponse")
}

func init() { proto.RegisterFile("object/query.proto", fileDescriptor_96e82c889b96923b) }

var fileDescriptor_96e82c889b96923b = []byte{
	// 535 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x94, 0xc1, 0x6f, 0xd3, 0x30,
	0x14, 0xc6, 0x9b, 0x15, 0x3a, 0xcd, 0x5c, 0x90, 0xd7, 0xa1, 0x29, 0x2a, 0x01, 0x45, 0xd3, 0x06,
	0x15, 0xd8, 0xda, 0x38, 0x00, 0xc7, 0xed, 0x30, 0xc4, 0x89, 0x12, 0x0e, 0x48, 0x5c, 0x26, 0x27,
	0xb5, 0x12, 0x43, 0x9a, 0x97, 0xc5, 0x2e, 0xa5, 0x42, 0xbb, 0x20, 0x21, 0x71, 0x44, 0xe2, 0x02,
	0x12, 0x7f, 0xd0, 0x8e, 0x93, 0xb8, 0x70, 0x42, 0xa8, 0xe5, 0x0f, 0x41, 0xb1, 0x9d, 0xb1, 0x74,
	0xa3, 0x83, 0x9d, 0x92, 0xda, 0xdf, 0x7b, 0xbf, 0xef, 0xf3, 0x73, 0x83, 0x30, 0x84, 0x2f, 0x79,
	0xa4, 0xe8, 0xfe, 0x90, 0x17, 0x63, 0x92, 0x17, 0xa0, 0x00, 0x63, 0x09, 0x59, 0x21, 0x80, 0x94,
	0x0f, 0x62, 0xf6, 0xdd, 0x76, 0x0c, 0x31, 0xe8, 0x6d, 0x5a, 0xbe, 0x19, 0xa5, 0xdb, 0x89, 0x01,
	0xe2, 0x94, 0x53, 0x96, 0x0b, 0xca, 0xb2, 0x0c, 0x14, 0x53, 0x02, 0x32, 0x69, 0x77, 0xbb, 0x11,
	0xc8, 0x01, 0x48, 0x1a, 0x32, 0xc9, 0x0d, 0x80, 0xbe, 0xde, 0x0c, 0xb9, 0x62, 0x9b, 0x34, 0x67,
	0xb1, 0xc8, 0xb4, 0xd8, 0x6a, 0x97, 0xad, 0x8f, 0x9c, 0x15, 0x6c, 0x50, 0x35, 0x68, 0xdb, 0xc5,
	0x51, 0xc2, 0xd4, 0x9e, 0xa8, 0x56, 0x57, 0x0a, 0x1e, 0x0b, 0xa9, 0x8a, 0x31, 0x1d, 0x25, 0x70,
	0xbc, 0xec, 0xb7, 0x11, 0x7e, 0x5a, 0x32, 0x7a, 0xba, 0x43, 0xc0, 0xf7, 0x87, 0x5c, 0x2a, 0xff,
	0x09, 0x5a, 0xae, 0xad, 0xca, 0x1c, 0x32, 0xc9, 0xf1, 0x03, 0xd4, 0x32, 0xa4, 0x55, 0xe7, 0xa6,
	0x73, 0xeb, 0xca, 0x96, 0x4b, 0x4e, 0x67, 0x26, 0xa6, 0x66, 0xe7, 0xd2, 0xe1, 0x8f, 0x1b, 0x8d,
	0xc0, 0xea, 0xfd, 0x3d, 0x8b, 0x79, 0x9e, 0x30, 0xf5, 0xb8, 0xc2, 0xe0, 0xab, 0xa8, 0xd9, 0x17,
	0x7d, 0xdd, 0x6c, 0x29, 0x28, 0x5f, 0xf1, 0x7d, 0xb4, 0x28, 0xb9, 0x94, 0x02, 0xb2, 0xd5, 0x05,
	0x8d, 0xb8, 0x5e, 0x43, 0x54, 0x19, 0xc8, 0x33, 0x23, 0x0a, 0x2a, 0xb5, 0xdf, 0xb3, 0x8e, 0x2b,
	0x80, 0x75, 0xfc, 0x10, 0x2d, 0xda, 0x63, 0x98, 0x67, 0xd9, 0x14, 0x55, 0x96, 0x47, 0xfa, 0x97,
	0xff, 0xd9, 0x41, 0x2b, 0xba, 0xe5, 0x76, 0x9a, 0xd6, 0x6d, 0xef, 0x22, 0xf4, 0x67, 0x12, 0xb6,
	0xef, 0x3a, 0x31, 0x63, 0x23, 0xe5, 0xd8, 0x88, 0xb9, 0x17, 0x76, 0x6c, 0xa4, 0xc7, 0x62, 0x6e,
	0x6b, 0x83, 0x13, 0x95, 0x17, 0x0f, 0xfb, 0xd5, 0x41, 0xd7, 0x66, 0xad, 0x9d, 0x15, 0xb8, 0xf9,
	0x3f, 0x81, 0xf1, 0xa3, 0x5a, 0x2c, 0xe3, 0x68, 0xe3, 0xdc, 0x58, 0x86, 0x7b, 0x32, 0xd7, 0xd6,
	0x97, 0x26, 0xba, 0xac, 0xed, 0xe1, 0x03, 0xd4, 0x32, 0xd7, 0x01, 0xaf, 0x9f, 0x65, 0xe3, 0xf4,
	0xcd, 0x73, 0x37, 0xce, 0xd5, 0x19, 0xa0, 0xef, 0xbf, 0xfb, 0xf6, 0xeb, 0xd3, 0x42, 0x07, 0xbb,
	0xd4, 0x14, 0xe8, 0x07, 0xad, 0xfd, 0x1f, 0xf0, 0x7b, 0x07, 0xb5, 0x4c, 0xd4, 0x39, 0xfc, 0xda,
	0x6c, 0xe7, 0xf0, 0xeb, 0x07, 0xed, 0x77, 0x35, 0x7f, 0x0d, 0xfb, 0x1a, 0x7c, 0x77, 0xc6, 0x80,
	0x9d, 0x01, 0x7d, 0xdb, 0x17, 0xfd, 0x03, 0xfc, 0xc1, 0x41, 0x4b, 0xa6, 0x7c, 0x3b, 0x4d, 0xf1,
	0xed, 0xbf, 0x22, 0x66, 0x6f, 0x9a, 0xdb, 0xfd, 0x17, 0xa9, 0x35, 0xb4, 0xa6, 0x0d, 0x79, 0xb8,
	0x33, 0xcf, 0xd0, 0xce, 0xee, 0xe1, 0xc4, 0x73, 0x8e, 0x26, 0x9e, 0xf3, 0x73, 0xe2, 0x39, 0x1f,
	0xa7, 0x5e, 0xe3, 0x68, 0xea, 0x35, 0xbe, 0x4f, 0xbd, 0xc6, 0x8b, 0x3b, 0xb1, 0x50, 0xc9, 0x30,
	0x24, 0x11, 0x0c, 0x8e, 0x3b, 0x84, 0x29, 0x44, 0xaf, 0xa2, 0x84, 0x89, 0x8c, 0xbe, 0xa9, 0x3a,
	0xa9, 0x71, 0xce, 0x65, 0xd8, 0xd2, 0x9f, 0x8f, 0x7b, 0xbf, 0x03, 0x00, 0x00, 0xff, 0xff, 0xcf,
	0x3e, 0xb5, 0x39, 0x0a, 0x05, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// QueryClient is the client API for Query service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type QueryClient interface {
	// Params
	//
	// Parameters queries the parameters of the module.
	Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error)
	// WhatIs
	//
	// Queries a WhatIs by DID.
	WhatIs(ctx context.Context, in *QueryWhatIsRequest, opts ...grpc.CallOption) (*QueryWhatIsResponse, error)
	// WhatIsAll
	//
	// Queries a list of WhatIs items.
	WhatIsAll(ctx context.Context, in *QueryAllWhatIsRequest, opts ...grpc.CallOption) (*QueryAllWhatIsResponse, error)
}

type queryClient struct {
	cc grpc1.ClientConn
}

func NewQueryClient(cc grpc1.ClientConn) QueryClient {
	return &queryClient{cc}
}

func (c *queryClient) Params(ctx context.Context, in *QueryParamsRequest, opts ...grpc.CallOption) (*QueryParamsResponse, error) {
	out := new(QueryParamsResponse)
	err := c.cc.Invoke(ctx, "/sonrio.sonr.object.Query/Params", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) WhatIs(ctx context.Context, in *QueryWhatIsRequest, opts ...grpc.CallOption) (*QueryWhatIsResponse, error) {
	out := new(QueryWhatIsResponse)
	err := c.cc.Invoke(ctx, "/sonrio.sonr.object.Query/WhatIs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *queryClient) WhatIsAll(ctx context.Context, in *QueryAllWhatIsRequest, opts ...grpc.CallOption) (*QueryAllWhatIsResponse, error) {
	out := new(QueryAllWhatIsResponse)
	err := c.cc.Invoke(ctx, "/sonrio.sonr.object.Query/WhatIsAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// QueryServer is the server API for Query service.
type QueryServer interface {
	// Params
	//
	// Parameters queries the parameters of the module.
	Params(context.Context, *QueryParamsRequest) (*QueryParamsResponse, error)
	// WhatIs
	//
	// Queries a WhatIs by DID.
	WhatIs(context.Context, *QueryWhatIsRequest) (*QueryWhatIsResponse, error)
	// WhatIsAll
	//
	// Queries a list of WhatIs items.
	WhatIsAll(context.Context, *QueryAllWhatIsRequest) (*QueryAllWhatIsResponse, error)
}

// UnimplementedQueryServer can be embedded to have forward compatible implementations.
type UnimplementedQueryServer struct {
}

func (*UnimplementedQueryServer) Params(ctx context.Context, req *QueryParamsRequest) (*QueryParamsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Params not implemented")
}
func (*UnimplementedQueryServer) WhatIs(ctx context.Context, req *QueryWhatIsRequest) (*QueryWhatIsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhatIs not implemented")
}
func (*UnimplementedQueryServer) WhatIsAll(ctx context.Context, req *QueryAllWhatIsRequest) (*QueryAllWhatIsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method WhatIsAll not implemented")
}

func RegisterQueryServer(s grpc1.Server, srv QueryServer) {
	s.RegisterService(&_Query_serviceDesc, srv)
}

func _Query_Params_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryParamsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).Params(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sonrio.sonr.object.Query/Params",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).Params(ctx, req.(*QueryParamsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_WhatIs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryWhatIsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).WhatIs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sonrio.sonr.object.Query/WhatIs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).WhatIs(ctx, req.(*QueryWhatIsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Query_WhatIsAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QueryAllWhatIsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(QueryServer).WhatIsAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/sonrio.sonr.object.Query/WhatIsAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(QueryServer).WhatIsAll(ctx, req.(*QueryAllWhatIsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Query_serviceDesc = grpc.ServiceDesc{
	ServiceName: "sonrio.sonr.object.Query",
	HandlerType: (*QueryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Params",
			Handler:    _Query_Params_Handler,
		},
		{
			MethodName: "WhatIs",
			Handler:    _Query_WhatIs_Handler,
		},
		{
			MethodName: "WhatIsAll",
			Handler:    _Query_WhatIsAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "object/query.proto",
}

func (m *QueryParamsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *QueryParamsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryParamsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryParamsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.Params.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryWhatIsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryWhatIsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryWhatIsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Session != nil {
		{
			size, err := m.Session.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Did) > 0 {
		i -= len(m.Did)
		copy(dAtA[i:], m.Did)
		i = encodeVarintQuery(dAtA, i, uint64(len(m.Did)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryWhatIsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryWhatIsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryWhatIsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	{
		size, err := m.WhatIs.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintQuery(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0xa
	return len(dAtA) - i, nil
}

func (m *QueryAllWhatIsRequest) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllWhatIsRequest) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllWhatIsRequest) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Session != nil {
		{
			size, err := m.Session.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *QueryAllWhatIsResponse) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *QueryAllWhatIsResponse) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *QueryAllWhatIsResponse) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Pagination != nil {
		{
			size, err := m.Pagination.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintQuery(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.WhatIs) > 0 {
		for iNdEx := len(m.WhatIs) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.WhatIs[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintQuery(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintQuery(dAtA []byte, offset int, v uint64) int {
	offset -= sovQuery(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *QueryParamsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *QueryParamsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.Params.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QueryWhatIsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Did)
	if l > 0 {
		n += 1 + l + sovQuery(uint64(l))
	}
	if m.Session != nil {
		l = m.Session.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryWhatIsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = m.WhatIs.Size()
	n += 1 + l + sovQuery(uint64(l))
	return n
}

func (m *QueryAllWhatIsRequest) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	if m.Session != nil {
		l = m.Session.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func (m *QueryAllWhatIsResponse) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.WhatIs) > 0 {
		for _, e := range m.WhatIs {
			l = e.Size()
			n += 1 + l + sovQuery(uint64(l))
		}
	}
	if m.Pagination != nil {
		l = m.Pagination.Size()
		n += 1 + l + sovQuery(uint64(l))
	}
	return n
}

func sovQuery(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozQuery(x uint64) (n int) {
	return sovQuery(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *QueryParamsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryParamsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryParamsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryParamsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Params", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Params.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryWhatIsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryWhatIsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryWhatIsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Did", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Did = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Session", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Session == nil {
				m.Session = &types.Session{}
			}
			if err := m.Session.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryWhatIsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryWhatIsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryWhatIsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WhatIs", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.WhatIs.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAllWhatIsRequest) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAllWhatIsRequest: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllWhatIsRequest: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageRequest{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Session", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Session == nil {
				m.Session = &types.Session{}
			}
			if err := m.Session.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func (m *QueryAllWhatIsResponse) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowQuery
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
			return fmt.Errorf("proto: QueryAllWhatIsResponse: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: QueryAllWhatIsResponse: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WhatIs", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WhatIs = append(m.WhatIs, WhatIs{})
			if err := m.WhatIs[len(m.WhatIs)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pagination", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowQuery
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
				return ErrInvalidLengthQuery
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthQuery
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Pagination == nil {
				m.Pagination = &query.PageResponse{}
			}
			if err := m.Pagination.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipQuery(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthQuery
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
func skipQuery(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
					return 0, ErrIntOverflowQuery
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
				return 0, ErrInvalidLengthQuery
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupQuery
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthQuery
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthQuery        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowQuery          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupQuery = fmt.Errorf("proto: unexpected end of group")
)
