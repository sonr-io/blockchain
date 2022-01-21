// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var channel_channel_pb = require('../channel/channel_pb.js');
var channel_tx_pb = require('../channel/tx_pb.js');
var bucket_tx_pb = require('../bucket/tx_pb.js');
var object_tx_pb = require('../object/tx_pb.js');
var registry_tx_pb = require('../registry/tx_pb.js');
var v1_request_pb = require('../v1/request_pb.js');
var v1_response_pb = require('../v1/response_pb.js');

function serialize_highway_v1_AccessNameRequest(arg) {
  if (!(arg instanceof v1_request_pb.AccessNameRequest)) {
    throw new Error('Expected argument of type highway.v1.AccessNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_AccessNameRequest(buffer_arg) {
  return v1_request_pb.AccessNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_AccessNameResponse(arg) {
  if (!(arg instanceof v1_response_pb.AccessNameResponse)) {
    throw new Error('Expected argument of type highway.v1.AccessNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_AccessNameResponse(buffer_arg) {
  return v1_response_pb.AccessNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_AccessServiceRequest(arg) {
  if (!(arg instanceof v1_request_pb.AccessServiceRequest)) {
    throw new Error('Expected argument of type highway.v1.AccessServiceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_AccessServiceRequest(buffer_arg) {
  return v1_request_pb.AccessServiceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_AccessServiceResponse(arg) {
  if (!(arg instanceof v1_response_pb.AccessServiceResponse)) {
    throw new Error('Expected argument of type highway.v1.AccessServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_AccessServiceResponse(buffer_arg) {
  return v1_response_pb.AccessServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_DeleteBlobRequest(arg) {
  if (!(arg instanceof v1_request_pb.DeleteBlobRequest)) {
    throw new Error('Expected argument of type highway.v1.DeleteBlobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_DeleteBlobRequest(buffer_arg) {
  return v1_request_pb.DeleteBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_DeleteBlobResponse(arg) {
  if (!(arg instanceof v1_response_pb.DeleteBlobResponse)) {
    throw new Error('Expected argument of type highway.v1.DeleteBlobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_DeleteBlobResponse(buffer_arg) {
  return v1_response_pb.DeleteBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_DownloadBlobRequest(arg) {
  if (!(arg instanceof v1_request_pb.DownloadBlobRequest)) {
    throw new Error('Expected argument of type highway.v1.DownloadBlobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_DownloadBlobRequest(buffer_arg) {
  return v1_request_pb.DownloadBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_DownloadBlobResponse(arg) {
  if (!(arg instanceof v1_response_pb.DownloadBlobResponse)) {
    throw new Error('Expected argument of type highway.v1.DownloadBlobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_DownloadBlobResponse(buffer_arg) {
  return v1_response_pb.DownloadBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ListenBucketRequest(arg) {
  if (!(arg instanceof v1_request_pb.ListenBucketRequest)) {
    throw new Error('Expected argument of type highway.v1.ListenBucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ListenBucketRequest(buffer_arg) {
  return v1_request_pb.ListenBucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ListenBucketResponse(arg) {
  if (!(arg instanceof v1_response_pb.ListenBucketResponse)) {
    throw new Error('Expected argument of type highway.v1.ListenBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ListenBucketResponse(buffer_arg) {
  return v1_response_pb.ListenBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ListenChannelRequest(arg) {
  if (!(arg instanceof v1_request_pb.ListenChannelRequest)) {
    throw new Error('Expected argument of type highway.v1.ListenChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ListenChannelRequest(buffer_arg) {
  return v1_request_pb.ListenChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ParseDidRequest(arg) {
  if (!(arg instanceof v1_request_pb.ParseDidRequest)) {
    throw new Error('Expected argument of type highway.v1.ParseDidRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ParseDidRequest(buffer_arg) {
  return v1_request_pb.ParseDidRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ParseDidResponse(arg) {
  if (!(arg instanceof v1_response_pb.ParseDidResponse)) {
    throw new Error('Expected argument of type highway.v1.ParseDidResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ParseDidResponse(buffer_arg) {
  return v1_response_pb.ParseDidResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ResolveDidRequest(arg) {
  if (!(arg instanceof v1_request_pb.ResolveDidRequest)) {
    throw new Error('Expected argument of type highway.v1.ResolveDidRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ResolveDidRequest(buffer_arg) {
  return v1_request_pb.ResolveDidRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_ResolveDidResponse(arg) {
  if (!(arg instanceof v1_response_pb.ResolveDidResponse)) {
    throw new Error('Expected argument of type highway.v1.ResolveDidResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_ResolveDidResponse(buffer_arg) {
  return v1_response_pb.ResolveDidResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_SyncBlobRequest(arg) {
  if (!(arg instanceof v1_request_pb.SyncBlobRequest)) {
    throw new Error('Expected argument of type highway.v1.SyncBlobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_SyncBlobRequest(buffer_arg) {
  return v1_request_pb.SyncBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_SyncBlobResponse(arg) {
  if (!(arg instanceof v1_response_pb.SyncBlobResponse)) {
    throw new Error('Expected argument of type highway.v1.SyncBlobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_SyncBlobResponse(buffer_arg) {
  return v1_response_pb.SyncBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_UploadBlobRequest(arg) {
  if (!(arg instanceof v1_request_pb.UploadBlobRequest)) {
    throw new Error('Expected argument of type highway.v1.UploadBlobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_UploadBlobRequest(buffer_arg) {
  return v1_request_pb.UploadBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_highway_v1_UploadBlobResponse(arg) {
  if (!(arg instanceof v1_response_pb.UploadBlobResponse)) {
    throw new Error('Expected argument of type highway.v1.UploadBlobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_highway_v1_UploadBlobResponse(buffer_arg) {
  return v1_response_pb.UploadBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgCreateBucket(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgCreateBucket)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgCreateBucket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgCreateBucket(buffer_arg) {
  return bucket_tx_pb.MsgCreateBucket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgCreateBucketResponse(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgCreateBucketResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgCreateBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgCreateBucketResponse(buffer_arg) {
  return bucket_tx_pb.MsgCreateBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgDeleteBucket(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgDeleteBucket)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgDeleteBucket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgDeleteBucket(buffer_arg) {
  return bucket_tx_pb.MsgDeleteBucket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgDeleteBucketResponse(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgDeleteBucketResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgDeleteBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgDeleteBucketResponse(buffer_arg) {
  return bucket_tx_pb.MsgDeleteBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgReadBucket(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgReadBucket)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgReadBucket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgReadBucket(buffer_arg) {
  return bucket_tx_pb.MsgReadBucket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgReadBucketResponse(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgReadBucketResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgReadBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgReadBucketResponse(buffer_arg) {
  return bucket_tx_pb.MsgReadBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgUpdateBucket(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgUpdateBucket)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgUpdateBucket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgUpdateBucket(buffer_arg) {
  return bucket_tx_pb.MsgUpdateBucket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_bucket_MsgUpdateBucketResponse(arg) {
  if (!(arg instanceof bucket_tx_pb.MsgUpdateBucketResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.bucket.MsgUpdateBucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_bucket_MsgUpdateBucketResponse(buffer_arg) {
  return bucket_tx_pb.MsgUpdateBucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_ChannelMessage(arg) {
  if (!(arg instanceof channel_channel_pb.ChannelMessage)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.ChannelMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_ChannelMessage(buffer_arg) {
  return channel_channel_pb.ChannelMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgCreateChannel(arg) {
  if (!(arg instanceof channel_tx_pb.MsgCreateChannel)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgCreateChannel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgCreateChannel(buffer_arg) {
  return channel_tx_pb.MsgCreateChannel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgCreateChannelResponse(arg) {
  if (!(arg instanceof channel_tx_pb.MsgCreateChannelResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgCreateChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgCreateChannelResponse(buffer_arg) {
  return channel_tx_pb.MsgCreateChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgDeleteChannel(arg) {
  if (!(arg instanceof channel_tx_pb.MsgDeleteChannel)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgDeleteChannel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgDeleteChannel(buffer_arg) {
  return channel_tx_pb.MsgDeleteChannel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgDeleteChannelResponse(arg) {
  if (!(arg instanceof channel_tx_pb.MsgDeleteChannelResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgDeleteChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgDeleteChannelResponse(buffer_arg) {
  return channel_tx_pb.MsgDeleteChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgReadChannel(arg) {
  if (!(arg instanceof channel_tx_pb.MsgReadChannel)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgReadChannel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgReadChannel(buffer_arg) {
  return channel_tx_pb.MsgReadChannel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgReadChannelResponse(arg) {
  if (!(arg instanceof channel_tx_pb.MsgReadChannelResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgReadChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgReadChannelResponse(buffer_arg) {
  return channel_tx_pb.MsgReadChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgUpdateChannel(arg) {
  if (!(arg instanceof channel_tx_pb.MsgUpdateChannel)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgUpdateChannel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgUpdateChannel(buffer_arg) {
  return channel_tx_pb.MsgUpdateChannel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_channel_MsgUpdateChannelResponse(arg) {
  if (!(arg instanceof channel_tx_pb.MsgUpdateChannelResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.channel.MsgUpdateChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_channel_MsgUpdateChannelResponse(buffer_arg) {
  return channel_tx_pb.MsgUpdateChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgCreateObject(arg) {
  if (!(arg instanceof object_tx_pb.MsgCreateObject)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgCreateObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgCreateObject(buffer_arg) {
  return object_tx_pb.MsgCreateObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgCreateObjectResponse(arg) {
  if (!(arg instanceof object_tx_pb.MsgCreateObjectResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgCreateObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgCreateObjectResponse(buffer_arg) {
  return object_tx_pb.MsgCreateObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgDeleteObject(arg) {
  if (!(arg instanceof object_tx_pb.MsgDeleteObject)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgDeleteObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgDeleteObject(buffer_arg) {
  return object_tx_pb.MsgDeleteObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgDeleteObjectResponse(arg) {
  if (!(arg instanceof object_tx_pb.MsgDeleteObjectResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgDeleteObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgDeleteObjectResponse(buffer_arg) {
  return object_tx_pb.MsgDeleteObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgReadObject(arg) {
  if (!(arg instanceof object_tx_pb.MsgReadObject)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgReadObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgReadObject(buffer_arg) {
  return object_tx_pb.MsgReadObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgReadObjectResponse(arg) {
  if (!(arg instanceof object_tx_pb.MsgReadObjectResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgReadObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgReadObjectResponse(buffer_arg) {
  return object_tx_pb.MsgReadObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgUpdateObject(arg) {
  if (!(arg instanceof object_tx_pb.MsgUpdateObject)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgUpdateObject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgUpdateObject(buffer_arg) {
  return object_tx_pb.MsgUpdateObject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_object_MsgUpdateObjectResponse(arg) {
  if (!(arg instanceof object_tx_pb.MsgUpdateObjectResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.object.MsgUpdateObjectResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_object_MsgUpdateObjectResponse(buffer_arg) {
  return object_tx_pb.MsgUpdateObjectResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgRegisterName(arg) {
  if (!(arg instanceof registry_tx_pb.MsgRegisterName)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgRegisterName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgRegisterName(buffer_arg) {
  return registry_tx_pb.MsgRegisterName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgRegisterNameResponse(arg) {
  if (!(arg instanceof registry_tx_pb.MsgRegisterNameResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgRegisterNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgRegisterNameResponse(buffer_arg) {
  return registry_tx_pb.MsgRegisterNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgRegisterService(arg) {
  if (!(arg instanceof registry_tx_pb.MsgRegisterService)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgRegisterService');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgRegisterService(buffer_arg) {
  return registry_tx_pb.MsgRegisterService.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgRegisterServiceResponse(arg) {
  if (!(arg instanceof registry_tx_pb.MsgRegisterServiceResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgRegisterServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgRegisterServiceResponse(buffer_arg) {
  return registry_tx_pb.MsgRegisterServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgUpdateName(arg) {
  if (!(arg instanceof registry_tx_pb.MsgUpdateName)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgUpdateName');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgUpdateName(buffer_arg) {
  return registry_tx_pb.MsgUpdateName.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgUpdateNameResponse(arg) {
  if (!(arg instanceof registry_tx_pb.MsgUpdateNameResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgUpdateNameResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgUpdateNameResponse(buffer_arg) {
  return registry_tx_pb.MsgUpdateNameResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgUpdateService(arg) {
  if (!(arg instanceof registry_tx_pb.MsgUpdateService)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgUpdateService');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgUpdateService(buffer_arg) {
  return registry_tx_pb.MsgUpdateService.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sonrio_sonr_registry_MsgUpdateServiceResponse(arg) {
  if (!(arg instanceof registry_tx_pb.MsgUpdateServiceResponse)) {
    throw new Error('Expected argument of type sonrio.sonr.registry.MsgUpdateServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sonrio_sonr_registry_MsgUpdateServiceResponse(buffer_arg) {
  return registry_tx_pb.MsgUpdateServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// HighwayService is a RPC service for interfacing over the Highway node.
var HighwayServiceService = exports.HighwayServiceService = {
  // AccessName returns details and publicly available information about the Peer given calling node
// has permission to access. i.e "prad.snr" -> "firstname online profilePic city"
accessName: {
    path: '/highway.v1.HighwayService/AccessName',
    requestStream: false,
    responseStream: false,
    requestType: v1_request_pb.AccessNameRequest,
    responseType: v1_response_pb.AccessNameResponse,
    requestSerialize: serialize_highway_v1_AccessNameRequest,
    requestDeserialize: deserialize_highway_v1_AccessNameRequest,
    responseSerialize: serialize_highway_v1_AccessNameResponse,
    responseDeserialize: deserialize_highway_v1_AccessNameResponse,
  },
  // RegisterName registers a new ".snr" name for the calling node. It is only allowed to be called
// once per node.
registerName: {
    path: '/highway.v1.HighwayService/RegisterName',
    requestStream: false,
    responseStream: false,
    requestType: registry_tx_pb.MsgRegisterName,
    responseType: registry_tx_pb.MsgRegisterNameResponse,
    requestSerialize: serialize_sonrio_sonr_registry_MsgRegisterName,
    requestDeserialize: deserialize_sonrio_sonr_registry_MsgRegisterName,
    responseSerialize: serialize_sonrio_sonr_registry_MsgRegisterNameResponse,
    responseDeserialize: deserialize_sonrio_sonr_registry_MsgRegisterNameResponse,
  },
  // UpdateName updates the public information of the calling node.
updateName: {
    path: '/highway.v1.HighwayService/UpdateName',
    requestStream: false,
    responseStream: false,
    requestType: registry_tx_pb.MsgUpdateName,
    responseType: registry_tx_pb.MsgUpdateNameResponse,
    requestSerialize: serialize_sonrio_sonr_registry_MsgUpdateName,
    requestDeserialize: deserialize_sonrio_sonr_registry_MsgUpdateName,
    responseSerialize: serialize_sonrio_sonr_registry_MsgUpdateNameResponse,
    responseDeserialize: deserialize_sonrio_sonr_registry_MsgUpdateNameResponse,
  },
  // AccessService creates a new signing key for the calling node in order to be authorized to
// access the service. It is only allowed to be called once per node.
accessService: {
    path: '/highway.v1.HighwayService/AccessService',
    requestStream: false,
    responseStream: false,
    requestType: v1_request_pb.AccessServiceRequest,
    responseType: v1_response_pb.AccessServiceResponse,
    requestSerialize: serialize_highway_v1_AccessServiceRequest,
    requestDeserialize: deserialize_highway_v1_AccessServiceRequest,
    responseSerialize: serialize_highway_v1_AccessServiceResponse,
    responseDeserialize: deserialize_highway_v1_AccessServiceResponse,
  },
  // RegisterService registers a new service for the calling node. The calling node must have
// already been enabled for development.
registerService: {
    path: '/highway.v1.HighwayService/RegisterService',
    requestStream: false,
    responseStream: false,
    requestType: registry_tx_pb.MsgRegisterService,
    responseType: registry_tx_pb.MsgRegisterServiceResponse,
    requestSerialize: serialize_sonrio_sonr_registry_MsgRegisterService,
    requestDeserialize: deserialize_sonrio_sonr_registry_MsgRegisterService,
    responseSerialize: serialize_sonrio_sonr_registry_MsgRegisterServiceResponse,
    responseDeserialize: deserialize_sonrio_sonr_registry_MsgRegisterServiceResponse,
  },
  // UpdateService updates the details and public configuration of the calling node's service.
updateService: {
    path: '/highway.v1.HighwayService/UpdateService',
    requestStream: false,
    responseStream: false,
    requestType: registry_tx_pb.MsgUpdateService,
    responseType: registry_tx_pb.MsgUpdateServiceResponse,
    requestSerialize: serialize_sonrio_sonr_registry_MsgUpdateService,
    requestDeserialize: deserialize_sonrio_sonr_registry_MsgUpdateService,
    responseSerialize: serialize_sonrio_sonr_registry_MsgUpdateServiceResponse,
    responseDeserialize: deserialize_sonrio_sonr_registry_MsgUpdateServiceResponse,
  },
  // CreateChannel creates a new Publish/Subscribe topic channel for the given service.
// The calling node must have already registered a service for the channel.
createChannel: {
    path: '/highway.v1.HighwayService/CreateChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_tx_pb.MsgCreateChannel,
    responseType: channel_tx_pb.MsgCreateChannelResponse,
    requestSerialize: serialize_sonrio_sonr_channel_MsgCreateChannel,
    requestDeserialize: deserialize_sonrio_sonr_channel_MsgCreateChannel,
    responseSerialize: serialize_sonrio_sonr_channel_MsgCreateChannelResponse,
    responseDeserialize: deserialize_sonrio_sonr_channel_MsgCreateChannelResponse,
  },
  // ReadChannel lists all peers subscribed to the given channel, and additional details about
// the channels configuration.
readChannel: {
    path: '/highway.v1.HighwayService/ReadChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_tx_pb.MsgReadChannel,
    responseType: channel_tx_pb.MsgReadChannelResponse,
    requestSerialize: serialize_sonrio_sonr_channel_MsgReadChannel,
    requestDeserialize: deserialize_sonrio_sonr_channel_MsgReadChannel,
    responseSerialize: serialize_sonrio_sonr_channel_MsgReadChannelResponse,
    responseDeserialize: deserialize_sonrio_sonr_channel_MsgReadChannelResponse,
  },
  // UpdateChannel updates the configuration of the given channel.
updateChannel: {
    path: '/highway.v1.HighwayService/UpdateChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_tx_pb.MsgUpdateChannel,
    responseType: channel_tx_pb.MsgUpdateChannelResponse,
    requestSerialize: serialize_sonrio_sonr_channel_MsgUpdateChannel,
    requestDeserialize: deserialize_sonrio_sonr_channel_MsgUpdateChannel,
    responseSerialize: serialize_sonrio_sonr_channel_MsgUpdateChannelResponse,
    responseDeserialize: deserialize_sonrio_sonr_channel_MsgUpdateChannelResponse,
  },
  // DeleteChannel deletes the given channel if the calling node is the owner of the channel.
deleteChannel: {
    path: '/highway.v1.HighwayService/DeleteChannel',
    requestStream: false,
    responseStream: false,
    requestType: channel_tx_pb.MsgDeleteChannel,
    responseType: channel_tx_pb.MsgDeleteChannelResponse,
    requestSerialize: serialize_sonrio_sonr_channel_MsgDeleteChannel,
    requestDeserialize: deserialize_sonrio_sonr_channel_MsgDeleteChannel,
    responseSerialize: serialize_sonrio_sonr_channel_MsgDeleteChannelResponse,
    responseDeserialize: deserialize_sonrio_sonr_channel_MsgDeleteChannelResponse,
  },
  // ListenChannel subscribes the calling node to the given channel and returns all publish events
// as a stream.
listenChannel: {
    path: '/highway.v1.HighwayService/ListenChannel',
    requestStream: false,
    responseStream: true,
    requestType: v1_request_pb.ListenChannelRequest,
    responseType: channel_channel_pb.ChannelMessage,
    requestSerialize: serialize_highway_v1_ListenChannelRequest,
    requestDeserialize: deserialize_highway_v1_ListenChannelRequest,
    responseSerialize: serialize_sonrio_sonr_channel_ChannelMessage,
    responseDeserialize: deserialize_sonrio_sonr_channel_ChannelMessage,
  },
  // CreateBucket creates a new bucket for the calling nodes service.
createBucket: {
    path: '/highway.v1.HighwayService/CreateBucket',
    requestStream: false,
    responseStream: false,
    requestType: bucket_tx_pb.MsgCreateBucket,
    responseType: bucket_tx_pb.MsgCreateBucketResponse,
    requestSerialize: serialize_sonrio_sonr_bucket_MsgCreateBucket,
    requestDeserialize: deserialize_sonrio_sonr_bucket_MsgCreateBucket,
    responseSerialize: serialize_sonrio_sonr_bucket_MsgCreateBucketResponse,
    responseDeserialize: deserialize_sonrio_sonr_bucket_MsgCreateBucketResponse,
  },
  // ReadBucket lists all the blobs in the given bucket. The calling node must have access to the
// bucket.
readBucket: {
    path: '/highway.v1.HighwayService/ReadBucket',
    requestStream: false,
    responseStream: false,
    requestType: bucket_tx_pb.MsgReadBucket,
    responseType: bucket_tx_pb.MsgReadBucketResponse,
    requestSerialize: serialize_sonrio_sonr_bucket_MsgReadBucket,
    requestDeserialize: deserialize_sonrio_sonr_bucket_MsgReadBucket,
    responseSerialize: serialize_sonrio_sonr_bucket_MsgReadBucketResponse,
    responseDeserialize: deserialize_sonrio_sonr_bucket_MsgReadBucketResponse,
  },
  // UpdateBucket updates the configuration of the given bucket. The calling node must have access
// to the bucket.
updateBucket: {
    path: '/highway.v1.HighwayService/UpdateBucket',
    requestStream: false,
    responseStream: false,
    requestType: bucket_tx_pb.MsgUpdateBucket,
    responseType: bucket_tx_pb.MsgUpdateBucketResponse,
    requestSerialize: serialize_sonrio_sonr_bucket_MsgUpdateBucket,
    requestDeserialize: deserialize_sonrio_sonr_bucket_MsgUpdateBucket,
    responseSerialize: serialize_sonrio_sonr_bucket_MsgUpdateBucketResponse,
    responseDeserialize: deserialize_sonrio_sonr_bucket_MsgUpdateBucketResponse,
  },
  // DeleteBucket deletes the given bucket if the calling node is the owner of the bucket.
deleteBucket: {
    path: '/highway.v1.HighwayService/DeleteBucket',
    requestStream: false,
    responseStream: false,
    requestType: bucket_tx_pb.MsgDeleteBucket,
    responseType: bucket_tx_pb.MsgDeleteBucketResponse,
    requestSerialize: serialize_sonrio_sonr_bucket_MsgDeleteBucket,
    requestDeserialize: deserialize_sonrio_sonr_bucket_MsgDeleteBucket,
    responseSerialize: serialize_sonrio_sonr_bucket_MsgDeleteBucketResponse,
    responseDeserialize: deserialize_sonrio_sonr_bucket_MsgDeleteBucketResponse,
  },
  // ListenBucket subscribes the calling node to the given bucket and returns all publish events
// as a stream.
listenBucket: {
    path: '/highway.v1.HighwayService/ListenBucket',
    requestStream: false,
    responseStream: true,
    requestType: v1_request_pb.ListenBucketRequest,
    responseType: v1_response_pb.ListenBucketResponse,
    requestSerialize: serialize_highway_v1_ListenBucketRequest,
    requestDeserialize: deserialize_highway_v1_ListenBucketRequest,
    responseSerialize: serialize_highway_v1_ListenBucketResponse,
    responseDeserialize: deserialize_highway_v1_ListenBucketResponse,
  },
  // CreateObject defines a new object to be utilized by the calling node's service. The object will
// be placed in the Highway Service Graph and can be used in channels and other modules.
createObject: {
    path: '/highway.v1.HighwayService/CreateObject',
    requestStream: false,
    responseStream: false,
    requestType: object_tx_pb.MsgCreateObject,
    responseType: object_tx_pb.MsgCreateObjectResponse,
    requestSerialize: serialize_sonrio_sonr_object_MsgCreateObject,
    requestDeserialize: deserialize_sonrio_sonr_object_MsgCreateObject,
    responseSerialize: serialize_sonrio_sonr_object_MsgCreateObjectResponse,
    responseDeserialize: deserialize_sonrio_sonr_object_MsgCreateObjectResponse,
  },
  // ReadObject returns the details of the given object provided its DID or Label.
readObject: {
    path: '/highway.v1.HighwayService/ReadObject',
    requestStream: false,
    responseStream: false,
    requestType: object_tx_pb.MsgReadObject,
    responseType: object_tx_pb.MsgReadObjectResponse,
    requestSerialize: serialize_sonrio_sonr_object_MsgReadObject,
    requestDeserialize: deserialize_sonrio_sonr_object_MsgReadObject,
    responseSerialize: serialize_sonrio_sonr_object_MsgReadObjectResponse,
    responseDeserialize: deserialize_sonrio_sonr_object_MsgReadObjectResponse,
  },
  // UpdateObject modifies the property fields of the given object.
updateObject: {
    path: '/highway.v1.HighwayService/UpdateObject',
    requestStream: false,
    responseStream: false,
    requestType: object_tx_pb.MsgUpdateObject,
    responseType: object_tx_pb.MsgUpdateObjectResponse,
    requestSerialize: serialize_sonrio_sonr_object_MsgUpdateObject,
    requestDeserialize: deserialize_sonrio_sonr_object_MsgUpdateObject,
    responseSerialize: serialize_sonrio_sonr_object_MsgUpdateObjectResponse,
    responseDeserialize: deserialize_sonrio_sonr_object_MsgUpdateObjectResponse,
  },
  // DeleteObject deletes the given object if the calling node is the owner of the object.
deleteObject: {
    path: '/highway.v1.HighwayService/DeleteObject',
    requestStream: false,
    responseStream: false,
    requestType: object_tx_pb.MsgDeleteObject,
    responseType: object_tx_pb.MsgDeleteObjectResponse,
    requestSerialize: serialize_sonrio_sonr_object_MsgDeleteObject,
    requestDeserialize: deserialize_sonrio_sonr_object_MsgDeleteObject,
    responseSerialize: serialize_sonrio_sonr_object_MsgDeleteObjectResponse,
    responseDeserialize: deserialize_sonrio_sonr_object_MsgDeleteObjectResponse,
  },
  // UploadBlob uploads a file or buffer to the calling node's service IPFS storage.
uploadBlob: {
    path: '/highway.v1.HighwayService/UploadBlob',
    requestStream: false,
    responseStream: true,
    requestType: v1_request_pb.UploadBlobRequest,
    responseType: v1_response_pb.UploadBlobResponse,
    requestSerialize: serialize_highway_v1_UploadBlobRequest,
    requestDeserialize: deserialize_highway_v1_UploadBlobRequest,
    responseSerialize: serialize_highway_v1_UploadBlobResponse,
    responseDeserialize: deserialize_highway_v1_UploadBlobResponse,
  },
  // DownloadBlob downloads a file or buffer from the calling node's service IPFS storage.
downloadBlob: {
    path: '/highway.v1.HighwayService/DownloadBlob',
    requestStream: false,
    responseStream: true,
    requestType: v1_request_pb.DownloadBlobRequest,
    responseType: v1_response_pb.DownloadBlobResponse,
    requestSerialize: serialize_highway_v1_DownloadBlobRequest,
    requestDeserialize: deserialize_highway_v1_DownloadBlobRequest,
    responseSerialize: serialize_highway_v1_DownloadBlobResponse,
    responseDeserialize: deserialize_highway_v1_DownloadBlobResponse,
  },
  // SyncBlob synchronizes a local file from the calling node to the given service's IPFS storage.
syncBlob: {
    path: '/highway.v1.HighwayService/SyncBlob',
    requestStream: false,
    responseStream: true,
    requestType: v1_request_pb.SyncBlobRequest,
    responseType: v1_response_pb.SyncBlobResponse,
    requestSerialize: serialize_highway_v1_SyncBlobRequest,
    requestDeserialize: deserialize_highway_v1_SyncBlobRequest,
    responseSerialize: serialize_highway_v1_SyncBlobResponse,
    responseDeserialize: deserialize_highway_v1_SyncBlobResponse,
  },
  // DeleteBlob deletes the given file from the calling node's service IPFS storage.
deleteBlob: {
    path: '/highway.v1.HighwayService/DeleteBlob',
    requestStream: false,
    responseStream: false,
    requestType: v1_request_pb.DeleteBlobRequest,
    responseType: v1_response_pb.DeleteBlobResponse,
    requestSerialize: serialize_highway_v1_DeleteBlobRequest,
    requestDeserialize: deserialize_highway_v1_DeleteBlobRequest,
    responseSerialize: serialize_highway_v1_DeleteBlobResponse,
    responseDeserialize: deserialize_highway_v1_DeleteBlobResponse,
  },
  // ParseDid parses a potential DID string into a DID object.
parseDid: {
    path: '/highway.v1.HighwayService/ParseDid',
    requestStream: false,
    responseStream: false,
    requestType: v1_request_pb.ParseDidRequest,
    responseType: v1_response_pb.ParseDidResponse,
    requestSerialize: serialize_highway_v1_ParseDidRequest,
    requestDeserialize: deserialize_highway_v1_ParseDidRequest,
    responseSerialize: serialize_highway_v1_ParseDidResponse,
    responseDeserialize: deserialize_highway_v1_ParseDidResponse,
  },
  // ResolveDid resolves a DID to its DID document if the DID is valid and the calling node has
// access to the DID Document.
resolveDid: {
    path: '/highway.v1.HighwayService/ResolveDid',
    requestStream: false,
    responseStream: false,
    requestType: v1_request_pb.ResolveDidRequest,
    responseType: v1_response_pb.ResolveDidResponse,
    requestSerialize: serialize_highway_v1_ResolveDidRequest,
    requestDeserialize: deserialize_highway_v1_ResolveDidRequest,
    responseSerialize: serialize_highway_v1_ResolveDidResponse,
    responseDeserialize: deserialize_highway_v1_ResolveDidResponse,
  },
};

exports.HighwayServiceClient = grpc.makeGenericClientConstructor(HighwayServiceService);
