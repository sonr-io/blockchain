package highway

import (
	"context"
	"fmt"

	channel "github.com/sonr-io/sonr/x/channel/service"
	hw "go.buf.build/grpc/go/sonr-io/highway/v1"
	bt "go.buf.build/grpc/go/sonr-io/sonr/bucket"
	ct "go.buf.build/grpc/go/sonr-io/sonr/channel"
	ot "go.buf.build/grpc/go/sonr-io/sonr/object"
	rt "go.buf.build/grpc/go/sonr-io/sonr/registry"
)

// AccessName accesses a name.
func (s *HighwayStub) AccessName(ctx context.Context, req *hw.AccessNameRequest) (*hw.AccessNameResponse, error) {
	// instantiate a query client for your `blog` blockchain
	// print response from querying all the dids
	fmt.Print("\n\nAll Dids:\n\n")
	//fmt.Println(queryResp)
	return nil, ErrMethodUnimplemented
}

// RegisterName registers a name.
func (s *HighwayStub) RegisterName(ctx context.Context, req *rt.MsgRegisterName) (*rt.MsgRegisterNameResponse, error) {
	// print response from broadcasting a transaction
	fmt.Print("MsgCreateDidDocument:\n\n")
	// fmt.Println(txResp)
	return nil, ErrMethodUnimplemented
}

// UpdateName updates a name.
func (s *HighwayStub) UpdateName(ctx context.Context, req *rt.MsgUpdateName) (*rt.MsgUpdateNameResponse, error) {
	return nil, ErrMethodUnimplemented
}

// AccessService accesses a service.
func (s *HighwayStub) AccessService(ctx context.Context, req *hw.AccessServiceRequest) (*hw.AccessServiceResponse, error) {
	return nil, ErrMethodUnimplemented
}

// RegisterService registers a service.
func (s *HighwayStub) RegisterService(ctx context.Context, req *rt.MsgRegisterService) (*rt.MsgRegisterServiceResponse, error) {
	// account `alice` was initialized during `starport chain serve`
	//	accountName := "alice"

	// get account from the keyring by account name and return a bech32 address
	//	address, err := s.cosmos.Address(accountName)
	//	if err != nil {
	//		return nil, err
	// }

	// // define a message to create a did
	// msg := &types.MsgRegisterName{
	// 	Creator: address.String(),
	// }

	// // broadcast a transaction from account `alice` with the message to create a did
	// // store response in txResp
	// txResp, err := s.cosmos.BroadcastTx(accountName, msg)
	// if err != nil {
	// 	return nil, err
	// }

	// // print response from broadcasting a transaction
	// fmt.Print("MsgCreateDidDocument:\n\n")
	// fmt.Println(txResp)
	return nil, ErrMethodUnimplemented
}

// UpdateService updates a service.
func (s *HighwayStub) UpdateService(ctx context.Context, req *rt.MsgUpdateService) (*rt.MsgUpdateServiceResponse, error) {
	return nil, ErrMethodUnimplemented
}

// CreateChannel creates a new channel.
func (s *HighwayStub) CreateChannel(ctx context.Context, req *ct.MsgCreateChannel) (*ct.MsgCreateChannelResponse, error) {
	_, err := channel.New(ctx, s.Host, nil)
	if err != nil {
		return nil, err
	}
	return nil, ErrMethodUnimplemented
}

// ReadChannel reads a channel.
func (s *HighwayStub) ReadChannel(ctx context.Context, req *ct.MsgReadChannel) (*ct.MsgReadChannelResponse, error) {
	return &ct.MsgReadChannelResponse{
		// Peers: peers,
	}, nil
}

// UpdateChannel updates a channel.
func (s *HighwayStub) UpdateChannel(ctx context.Context, req *ct.MsgUpdateChannel) (*ct.MsgUpdateChannelResponse, error) {
	return nil, ErrMethodUnimplemented
}

// DeleteChannel deletes a channel.
func (s *HighwayStub) DeleteChannel(ctx context.Context, req *ct.MsgDeleteChannel) (*ct.MsgDeleteChannelResponse, error) {
	return nil, ErrMethodUnimplemented
}

// ListenChannel listens to a channel.
func (s *HighwayStub) ListenChannel(req *hw.ListenChannelRequest, stream hw.HighwayService_ListenChannelServer) error {
	// Find channel by DID
	// ch, ok := s.channels[req.GetDid()]
	// if !ok {
	// 	return ErrInvalidQuery
	// }

	// Listen to the channel
	// chListen := ch.Listen()

	// Listen to the channel
	for {
		select {
		// case msg := <-chListen:
		// 	// Send peer to client
		// 	if err := stream.Send(msg); err != nil {
		// 		return err
		// 	}
		case <-stream.Context().Done():
			return nil
		}
	}
}

// CreateBucket creates a new bucket.
func (s *HighwayStub) CreateBucket(ctx context.Context, req *bt.MsgCreateBucket) (*bt.MsgCreateBucketResponse, error) {
	return nil, ErrMethodUnimplemented
}

// ReadBucket reads a bucket.
func (s *HighwayStub) ReadBucket(ctx context.Context, req *bt.MsgReadBucket) (*bt.MsgReadBucketResponse, error) {
	return nil, ErrMethodUnimplemented
}

// UpdateBucket updates a bucket.
func (s *HighwayStub) UpdateBucket(ctx context.Context, req *bt.MsgUpdateBucket) (*bt.MsgUpdateBucketResponse, error) {
	return nil, ErrMethodUnimplemented
}

// DeleteBucket deletes a bucket.
func (s *HighwayStub) DeleteBucket(ctx context.Context, req *bt.MsgDeleteBucket) (*bt.MsgDeleteBucketResponse, error) {
	return nil, ErrMethodUnimplemented
}

// ListenBucket listens to a bucket.
func (s *HighwayStub) ListenBucket(req *hw.ListenBucketRequest, stream hw.HighwayService_ListenBucketServer) error {
	return nil
}

// CreateObject creates a new object.
func (s *HighwayStub) CreateObject(ctx context.Context, req *ot.MsgCreateObject) (*ot.MsgCreateObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// ReadObject reads an object.
func (s *HighwayStub) ReadObject(ctx context.Context, req *ot.MsgReadObject) (*ot.MsgReadObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// UpdateObject updates an object.
func (s *HighwayStub) UpdateObject(ctx context.Context, req *ot.MsgUpdateObject) (*ot.MsgUpdateObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// DeleteObject deletes an object.
func (s *HighwayStub) DeleteObject(ctx context.Context, req *ot.MsgDeleteObject) (*ot.MsgDeleteObjectResponse, error) {
	return nil, ErrMethodUnimplemented
}

// UploadBlob uploads a blob.
func (s *HighwayStub) UploadBlob(req *hw.UploadBlobRequest, stream hw.HighwayService_UploadBlobServer) error {
	// hash, err := s.ipfs.Upload(req.Path)
	// if err != nil {
	// 	return err
	// }
	logger.Debug("Uploaded blob to IPFS", "hash")
	return nil
}

// DownloadBlob downloads a blob.
func (s *HighwayStub) DownloadBlob(req *hw.DownloadBlobRequest, stream hw.HighwayService_DownloadBlobServer) error {
	// path, err := s.ipfs.Download(req.GetDid())
	// if err != nil {
	// 	return err
	// }
	logger.Debug("Downloaded blob from IPFS", "path")
	return nil
}

// SyncBlob synchronizes a blob with remote version.
func (s *HighwayStub) SyncBlob(req *hw.SyncBlobRequest, stream hw.HighwayService_SyncBlobServer) error {
	return nil
}

// DeleteBlob deletes a blob.
func (s *HighwayStub) DeleteBlob(ctx context.Context, req *hw.DeleteBlobRequest) (*hw.DeleteBlobResponse, error) {
	return nil, ErrMethodUnimplemented
}

// ParseDid parses a DID.
func (s *HighwayStub) ParseDid(ctx context.Context, req *hw.ParseDidRequest) (*hw.ParseDidResponse, error) {
	// d, err := s.node.ParseDid(req.GetDid())
	// if err != nil {
	// 	return nil, err
	// }
	return &hw.ParseDidResponse{
		//Did: d,
	}, nil
}

// ResolveDid resolves a DID.
func (s *HighwayStub) ResolveDid(ctx context.Context, req *hw.ResolveDidRequest) (*hw.ResolveDidResponse, error) {
	// doc, err := s.node.ResolveDid(req.GetDid())
	// if err != nil {
	// 	return nil, err
	// }

	return &hw.ResolveDidResponse{
		DidDocument: nil,
	}, nil
}
