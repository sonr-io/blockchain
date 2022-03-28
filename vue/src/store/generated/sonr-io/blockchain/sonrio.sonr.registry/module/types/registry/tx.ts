/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.registry";

export interface MsgRegisterService {
  /** Creator is the account address of the creator of the service. */
  creator: string;
  /** Service Name is the endpoint of the service. */
  serviceName: string;
  /** JWT is the JWT used to authenticate the service. */
  jwt: string;
}

export interface MsgRegisterServiceResponse {
  /** The name that was registered */
  isSuccess: boolean;
  /** The Did string in url format i.e. did:sonr:<did> */
  didUrl: string;
  /** The Document for the registered DID in Json format */
  didDocumentJson: string;
}

/** MsgRegisterName is a request to register a name with the ".snr" name of a peer */
export interface MsgRegisterName {
  /** Account address of the name owner */
  creator: string;
  nameToRegister: string;
  /** Device Id of the client node */
  payload: { [key: string]: string };
  /** Client side JSON Web Token for AssertionMethod */
  publicKeyBuffer: Uint8Array;
}

export interface MsgRegisterName_PayloadEntry {
  key: string;
  value: string;
}

export interface MsgRegisterNameResponse {
  /** The name that was registered */
  isSuccess: boolean;
  /** The Did string in url format i.e. did:sonr:<did> */
  didUrl: string;
  /** The Document for the registered DID in Json format */
  didDocumentJson: string;
}

/** ask to see if a name is available */
export interface MsgCheckName {
  /** Account address of the name owner */
  nameToRegister: string;
  /** Account address of the name owner */
  creator: string;
}

/** ask to see if a name is available */
export interface MsgCheckNameResponse {
  /** Is the name available */
  isAvailable: boolean;
}

/** MsgAccessName defines the MsgAccessName transaction. */
export interface MsgAccessName {
  /** The account that is accessing the name */
  creator: string;
  /** The name to access */
  name: string;
  /** The Public Key of the peer to access */
  publicKey: string;
  /** The Libp2p peer ID of the peer to access */
  peerId: string;
}

export interface MsgAccessNameResponse {
  did: string;
  publicKey: string;
  peerId: string;
}

export interface MsgUpdateName {
  /** The account that owns the name. */
  creator: string;
  /** The did of the peer to update the name of */
  did: string;
  /** The Updated Metadata */
  metadata: { [key: string]: string };
}

export interface MsgUpdateName_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgUpdateNameResponse {
  didDocument: string;
  /** optional */
  metadata: { [key: string]: string };
}

export interface MsgUpdateNameResponse_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgAccessService {
  /** The account that is accessing the service */
  creator: string;
  /** The name of the service to access */
  did: string;
}

export interface MsgAccessServiceResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** Data of the response */
  metadata: { [key: string]: string };
}

export interface MsgAccessServiceResponse_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgUpdateService {
  /** The account that owns the name. */
  creator: string;
  /** The name of the peer to update the service details of */
  did: string;
  /** The updated configuration for the service */
  configuration: { [key: string]: string };
  /** The metadata for any service information required */
  metadata: { [key: string]: string };
}

export interface MsgUpdateService_ConfigurationEntry {
  key: string;
  value: string;
}

export interface MsgUpdateService_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgUpdateServiceResponse {
  didDocument: string;
  /** The updated configuration for the service */
  configuration: { [key: string]: string };
  /** The metadata for any service information required */
  metadata: { [key: string]: string };
}

export interface MsgUpdateServiceResponse_ConfigurationEntry {
  key: string;
  value: string;
}

export interface MsgUpdateServiceResponse_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgCreateWhoIs {
  creator: string;
  index: string;
  did: string;
  value: string;
}

export interface MsgCreateWhoIsResponse {}

export interface MsgUpdateWhoIs {
  creator: string;
  index: string;
  did: string;
  value: string;
}

export interface MsgUpdateWhoIsResponse {}

export interface MsgDeleteWhoIs {
  creator: string;
  index: string;
}

export interface MsgDeleteWhoIsResponse {}

const baseMsgRegisterService: object = {
  creator: "",
  serviceName: "",
  jwt: "",
};

export const MsgRegisterService = {
  encode(
    message: MsgRegisterService,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.serviceName !== "") {
      writer.uint32(18).string(message.serviceName);
    }
    if (message.jwt !== "") {
      writer.uint32(26).string(message.jwt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterService } as MsgRegisterService;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.serviceName = reader.string();
          break;
        case 3:
          message.jwt = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterService {
    const message = { ...baseMsgRegisterService } as MsgRegisterService;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = String(object.serviceName);
    } else {
      message.serviceName = "";
    }
    if (object.jwt !== undefined && object.jwt !== null) {
      message.jwt = String(object.jwt);
    } else {
      message.jwt = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterService): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.serviceName !== undefined &&
      (obj.serviceName = message.serviceName);
    message.jwt !== undefined && (obj.jwt = message.jwt);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterService>): MsgRegisterService {
    const message = { ...baseMsgRegisterService } as MsgRegisterService;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.serviceName !== undefined && object.serviceName !== null) {
      message.serviceName = object.serviceName;
    } else {
      message.serviceName = "";
    }
    if (object.jwt !== undefined && object.jwt !== null) {
      message.jwt = object.jwt;
    } else {
      message.jwt = "";
    }
    return message;
  },
};

const baseMsgRegisterServiceResponse: object = {
  isSuccess: false,
  didUrl: "",
  didDocumentJson: "",
};

export const MsgRegisterServiceResponse = {
  encode(
    message: MsgRegisterServiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.isSuccess === true) {
      writer.uint32(8).bool(message.isSuccess);
    }
    if (message.didUrl !== "") {
      writer.uint32(18).string(message.didUrl);
    }
    if (message.didDocumentJson !== "") {
      writer.uint32(26).string(message.didDocumentJson);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterServiceResponse,
    } as MsgRegisterServiceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSuccess = reader.bool();
          break;
        case 2:
          message.didUrl = reader.string();
          break;
        case 3:
          message.didDocumentJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterServiceResponse {
    const message = {
      ...baseMsgRegisterServiceResponse,
    } as MsgRegisterServiceResponse;
    if (object.isSuccess !== undefined && object.isSuccess !== null) {
      message.isSuccess = Boolean(object.isSuccess);
    } else {
      message.isSuccess = false;
    }
    if (object.didUrl !== undefined && object.didUrl !== null) {
      message.didUrl = String(object.didUrl);
    } else {
      message.didUrl = "";
    }
    if (
      object.didDocumentJson !== undefined &&
      object.didDocumentJson !== null
    ) {
      message.didDocumentJson = String(object.didDocumentJson);
    } else {
      message.didDocumentJson = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterServiceResponse): unknown {
    const obj: any = {};
    message.isSuccess !== undefined && (obj.isSuccess = message.isSuccess);
    message.didUrl !== undefined && (obj.didUrl = message.didUrl);
    message.didDocumentJson !== undefined &&
      (obj.didDocumentJson = message.didDocumentJson);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterServiceResponse>
  ): MsgRegisterServiceResponse {
    const message = {
      ...baseMsgRegisterServiceResponse,
    } as MsgRegisterServiceResponse;
    if (object.isSuccess !== undefined && object.isSuccess !== null) {
      message.isSuccess = object.isSuccess;
    } else {
      message.isSuccess = false;
    }
    if (object.didUrl !== undefined && object.didUrl !== null) {
      message.didUrl = object.didUrl;
    } else {
      message.didUrl = "";
    }
    if (
      object.didDocumentJson !== undefined &&
      object.didDocumentJson !== null
    ) {
      message.didDocumentJson = object.didDocumentJson;
    } else {
      message.didDocumentJson = "";
    }
    return message;
  },
};

const baseMsgRegisterName: object = { creator: "", nameToRegister: "" };

export const MsgRegisterName = {
  encode(message: MsgRegisterName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nameToRegister !== "") {
      writer.uint32(18).string(message.nameToRegister);
    }
    Object.entries(message.payload).forEach(([key, value]) => {
      MsgRegisterName_PayloadEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.publicKeyBuffer.length !== 0) {
      writer.uint32(34).bytes(message.publicKeyBuffer);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterName } as MsgRegisterName;
    message.payload = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nameToRegister = reader.string();
          break;
        case 3:
          const entry3 = MsgRegisterName_PayloadEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.payload[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.publicKeyBuffer = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterName {
    const message = { ...baseMsgRegisterName } as MsgRegisterName;
    message.payload = {};
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nameToRegister !== undefined && object.nameToRegister !== null) {
      message.nameToRegister = String(object.nameToRegister);
    } else {
      message.nameToRegister = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      Object.entries(object.payload).forEach(([key, value]) => {
        message.payload[key] = String(value);
      });
    }
    if (
      object.publicKeyBuffer !== undefined &&
      object.publicKeyBuffer !== null
    ) {
      message.publicKeyBuffer = bytesFromBase64(object.publicKeyBuffer);
    }
    return message;
  },

  toJSON(message: MsgRegisterName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nameToRegister !== undefined &&
      (obj.nameToRegister = message.nameToRegister);
    obj.payload = {};
    if (message.payload) {
      Object.entries(message.payload).forEach(([k, v]) => {
        obj.payload[k] = v;
      });
    }
    message.publicKeyBuffer !== undefined &&
      (obj.publicKeyBuffer = base64FromBytes(
        message.publicKeyBuffer !== undefined
          ? message.publicKeyBuffer
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterName>): MsgRegisterName {
    const message = { ...baseMsgRegisterName } as MsgRegisterName;
    message.payload = {};
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nameToRegister !== undefined && object.nameToRegister !== null) {
      message.nameToRegister = object.nameToRegister;
    } else {
      message.nameToRegister = "";
    }
    if (object.payload !== undefined && object.payload !== null) {
      Object.entries(object.payload).forEach(([key, value]) => {
        if (value !== undefined) {
          message.payload[key] = String(value);
        }
      });
    }
    if (
      object.publicKeyBuffer !== undefined &&
      object.publicKeyBuffer !== null
    ) {
      message.publicKeyBuffer = object.publicKeyBuffer;
    } else {
      message.publicKeyBuffer = new Uint8Array();
    }
    return message;
  },
};

const baseMsgRegisterName_PayloadEntry: object = { key: "", value: "" };

export const MsgRegisterName_PayloadEntry = {
  encode(
    message: MsgRegisterName_PayloadEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterName_PayloadEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterName_PayloadEntry,
    } as MsgRegisterName_PayloadEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterName_PayloadEntry {
    const message = {
      ...baseMsgRegisterName_PayloadEntry,
    } as MsgRegisterName_PayloadEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterName_PayloadEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterName_PayloadEntry>
  ): MsgRegisterName_PayloadEntry {
    const message = {
      ...baseMsgRegisterName_PayloadEntry,
    } as MsgRegisterName_PayloadEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgRegisterNameResponse: object = {
  isSuccess: false,
  didUrl: "",
  didDocumentJson: "",
};

export const MsgRegisterNameResponse = {
  encode(
    message: MsgRegisterNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.isSuccess === true) {
      writer.uint32(8).bool(message.isSuccess);
    }
    if (message.didUrl !== "") {
      writer.uint32(18).string(message.didUrl);
    }
    if (message.didDocumentJson !== "") {
      writer.uint32(26).string(message.didDocumentJson);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterNameResponse,
    } as MsgRegisterNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSuccess = reader.bool();
          break;
        case 2:
          message.didUrl = reader.string();
          break;
        case 3:
          message.didDocumentJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterNameResponse {
    const message = {
      ...baseMsgRegisterNameResponse,
    } as MsgRegisterNameResponse;
    if (object.isSuccess !== undefined && object.isSuccess !== null) {
      message.isSuccess = Boolean(object.isSuccess);
    } else {
      message.isSuccess = false;
    }
    if (object.didUrl !== undefined && object.didUrl !== null) {
      message.didUrl = String(object.didUrl);
    } else {
      message.didUrl = "";
    }
    if (
      object.didDocumentJson !== undefined &&
      object.didDocumentJson !== null
    ) {
      message.didDocumentJson = String(object.didDocumentJson);
    } else {
      message.didDocumentJson = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterNameResponse): unknown {
    const obj: any = {};
    message.isSuccess !== undefined && (obj.isSuccess = message.isSuccess);
    message.didUrl !== undefined && (obj.didUrl = message.didUrl);
    message.didDocumentJson !== undefined &&
      (obj.didDocumentJson = message.didDocumentJson);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterNameResponse>
  ): MsgRegisterNameResponse {
    const message = {
      ...baseMsgRegisterNameResponse,
    } as MsgRegisterNameResponse;
    if (object.isSuccess !== undefined && object.isSuccess !== null) {
      message.isSuccess = object.isSuccess;
    } else {
      message.isSuccess = false;
    }
    if (object.didUrl !== undefined && object.didUrl !== null) {
      message.didUrl = object.didUrl;
    } else {
      message.didUrl = "";
    }
    if (
      object.didDocumentJson !== undefined &&
      object.didDocumentJson !== null
    ) {
      message.didDocumentJson = object.didDocumentJson;
    } else {
      message.didDocumentJson = "";
    }
    return message;
  },
};

const baseMsgCheckName: object = { nameToRegister: "", creator: "" };

export const MsgCheckName = {
  encode(message: MsgCheckName, writer: Writer = Writer.create()): Writer {
    if (message.nameToRegister !== "") {
      writer.uint32(10).string(message.nameToRegister);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCheckName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCheckName } as MsgCheckName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameToRegister = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCheckName {
    const message = { ...baseMsgCheckName } as MsgCheckName;
    if (object.nameToRegister !== undefined && object.nameToRegister !== null) {
      message.nameToRegister = String(object.nameToRegister);
    } else {
      message.nameToRegister = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgCheckName): unknown {
    const obj: any = {};
    message.nameToRegister !== undefined &&
      (obj.nameToRegister = message.nameToRegister);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCheckName>): MsgCheckName {
    const message = { ...baseMsgCheckName } as MsgCheckName;
    if (object.nameToRegister !== undefined && object.nameToRegister !== null) {
      message.nameToRegister = object.nameToRegister;
    } else {
      message.nameToRegister = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgCheckNameResponse: object = { isAvailable: false };

export const MsgCheckNameResponse = {
  encode(
    message: MsgCheckNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.isAvailable === true) {
      writer.uint32(8).bool(message.isAvailable);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCheckNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCheckNameResponse } as MsgCheckNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isAvailable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCheckNameResponse {
    const message = { ...baseMsgCheckNameResponse } as MsgCheckNameResponse;
    if (object.isAvailable !== undefined && object.isAvailable !== null) {
      message.isAvailable = Boolean(object.isAvailable);
    } else {
      message.isAvailable = false;
    }
    return message;
  },

  toJSON(message: MsgCheckNameResponse): unknown {
    const obj: any = {};
    message.isAvailable !== undefined &&
      (obj.isAvailable = message.isAvailable);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCheckNameResponse>): MsgCheckNameResponse {
    const message = { ...baseMsgCheckNameResponse } as MsgCheckNameResponse;
    if (object.isAvailable !== undefined && object.isAvailable !== null) {
      message.isAvailable = object.isAvailable;
    } else {
      message.isAvailable = false;
    }
    return message;
  },
};

const baseMsgAccessName: object = {
  creator: "",
  name: "",
  publicKey: "",
  peerId: "",
};

export const MsgAccessName = {
  encode(message: MsgAccessName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.publicKey !== "") {
      writer.uint32(26).string(message.publicKey);
    }
    if (message.peerId !== "") {
      writer.uint32(34).string(message.peerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAccessName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAccessName } as MsgAccessName;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.publicKey = reader.string();
          break;
        case 4:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessName {
    const message = { ...baseMsgAccessName } as MsgAccessName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    return message;
  },

  toJSON(message: MsgAccessName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAccessName>): MsgAccessName {
    const message = { ...baseMsgAccessName } as MsgAccessName;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    return message;
  },
};

const baseMsgAccessNameResponse: object = {
  did: "",
  publicKey: "",
  peerId: "",
};

export const MsgAccessNameResponse = {
  encode(
    message: MsgAccessNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    if (message.peerId !== "") {
      writer.uint32(26).string(message.peerId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAccessNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAccessNameResponse } as MsgAccessNameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.publicKey = reader.string();
          break;
        case 3:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessNameResponse {
    const message = { ...baseMsgAccessNameResponse } as MsgAccessNameResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = String(object.peerId);
    } else {
      message.peerId = "";
    }
    return message;
  },

  toJSON(message: MsgAccessNameResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAccessNameResponse>
  ): MsgAccessNameResponse {
    const message = { ...baseMsgAccessNameResponse } as MsgAccessNameResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    if (object.peerId !== undefined && object.peerId !== null) {
      message.peerId = object.peerId;
    } else {
      message.peerId = "";
    }
    return message;
  },
};

const baseMsgUpdateName: object = { creator: "", did: "" };

export const MsgUpdateName = {
  encode(message: MsgUpdateName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateName_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateName } as MsgUpdateName;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          const entry3 = MsgUpdateName_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateName {
    const message = { ...baseMsgUpdateName } as MsgUpdateName;
    message.metadata = {};
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: MsgUpdateName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateName>): MsgUpdateName {
    const message = { ...baseMsgUpdateName } as MsgUpdateName;
    message.metadata = {};
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseMsgUpdateName_MetadataEntry: object = { key: "", value: "" };

export const MsgUpdateName_MetadataEntry = {
  encode(
    message: MsgUpdateName_MetadataEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateName_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateName_MetadataEntry,
    } as MsgUpdateName_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateName_MetadataEntry {
    const message = {
      ...baseMsgUpdateName_MetadataEntry,
    } as MsgUpdateName_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateName_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateName_MetadataEntry>
  ): MsgUpdateName_MetadataEntry {
    const message = {
      ...baseMsgUpdateName_MetadataEntry,
    } as MsgUpdateName_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateNameResponse: object = { didDocument: "" };

export const MsgUpdateNameResponse = {
  encode(
    message: MsgUpdateNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.didDocument !== "") {
      writer.uint32(10).string(message.didDocument);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateNameResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = reader.string();
          break;
        case 2:
          const entry2 = MsgUpdateNameResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.metadata[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNameResponse {
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse;
    message.metadata = {};
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = String(object.didDocument);
    } else {
      message.didDocument = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: MsgUpdateNameResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined &&
      (obj.didDocument = message.didDocument);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateNameResponse>
  ): MsgUpdateNameResponse {
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse;
    message.metadata = {};
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = object.didDocument;
    } else {
      message.didDocument = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseMsgUpdateNameResponse_MetadataEntry: object = { key: "", value: "" };

export const MsgUpdateNameResponse_MetadataEntry = {
  encode(
    message: MsgUpdateNameResponse_MetadataEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateNameResponse_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateNameResponse_MetadataEntry,
    } as MsgUpdateNameResponse_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNameResponse_MetadataEntry {
    const message = {
      ...baseMsgUpdateNameResponse_MetadataEntry,
    } as MsgUpdateNameResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNameResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateNameResponse_MetadataEntry>
  ): MsgUpdateNameResponse_MetadataEntry {
    const message = {
      ...baseMsgUpdateNameResponse_MetadataEntry,
    } as MsgUpdateNameResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgAccessService: object = { creator: "", did: "" };

export const MsgAccessService = {
  encode(message: MsgAccessService, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAccessService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAccessService } as MsgAccessService;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessService {
    const message = { ...baseMsgAccessService } as MsgAccessService;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgAccessService): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAccessService>): MsgAccessService {
    const message = { ...baseMsgAccessService } as MsgAccessService;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseMsgAccessServiceResponse: object = { code: 0, message: "" };

export const MsgAccessServiceResponse = {
  encode(
    message: MsgAccessServiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgAccessServiceResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAccessServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAccessServiceResponse,
    } as MsgAccessServiceResponse;
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          const entry3 = MsgAccessServiceResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessServiceResponse {
    const message = {
      ...baseMsgAccessServiceResponse,
    } as MsgAccessServiceResponse;
    message.metadata = {};
    if (object.code !== undefined && object.code !== null) {
      message.code = Number(object.code);
    } else {
      message.code = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: MsgAccessServiceResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAccessServiceResponse>
  ): MsgAccessServiceResponse {
    const message = {
      ...baseMsgAccessServiceResponse,
    } as MsgAccessServiceResponse;
    message.metadata = {};
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = 0;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseMsgAccessServiceResponse_MetadataEntry: object = {
  key: "",
  value: "",
};

export const MsgAccessServiceResponse_MetadataEntry = {
  encode(
    message: MsgAccessServiceResponse_MetadataEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAccessServiceResponse_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAccessServiceResponse_MetadataEntry,
    } as MsgAccessServiceResponse_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessServiceResponse_MetadataEntry {
    const message = {
      ...baseMsgAccessServiceResponse_MetadataEntry,
    } as MsgAccessServiceResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgAccessServiceResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAccessServiceResponse_MetadataEntry>
  ): MsgAccessServiceResponse_MetadataEntry {
    const message = {
      ...baseMsgAccessServiceResponse_MetadataEntry,
    } as MsgAccessServiceResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateService: object = { creator: "", did: "" };

export const MsgUpdateService = {
  encode(message: MsgUpdateService, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    Object.entries(message.configuration).forEach(([key, value]) => {
      MsgUpdateService_ConfigurationEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateService_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateService } as MsgUpdateService;
    message.configuration = {};
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          const entry3 = MsgUpdateService_ConfigurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.configuration[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = MsgUpdateService_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.metadata[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateService {
    const message = { ...baseMsgUpdateService } as MsgUpdateService;
    message.configuration = {};
    message.metadata = {};
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      Object.entries(object.configuration).forEach(([key, value]) => {
        message.configuration[key] = String(value);
      });
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: MsgUpdateService): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    obj.configuration = {};
    if (message.configuration) {
      Object.entries(message.configuration).forEach(([k, v]) => {
        obj.configuration[k] = v;
      });
    }
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateService>): MsgUpdateService {
    const message = { ...baseMsgUpdateService } as MsgUpdateService;
    message.configuration = {};
    message.metadata = {};
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      Object.entries(object.configuration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.configuration[key] = String(value);
        }
      });
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseMsgUpdateService_ConfigurationEntry: object = { key: "", value: "" };

export const MsgUpdateService_ConfigurationEntry = {
  encode(
    message: MsgUpdateService_ConfigurationEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateService_ConfigurationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateService_ConfigurationEntry,
    } as MsgUpdateService_ConfigurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateService_ConfigurationEntry {
    const message = {
      ...baseMsgUpdateService_ConfigurationEntry,
    } as MsgUpdateService_ConfigurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateService_ConfigurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateService_ConfigurationEntry>
  ): MsgUpdateService_ConfigurationEntry {
    const message = {
      ...baseMsgUpdateService_ConfigurationEntry,
    } as MsgUpdateService_ConfigurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateService_MetadataEntry: object = { key: "", value: "" };

export const MsgUpdateService_MetadataEntry = {
  encode(
    message: MsgUpdateService_MetadataEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateService_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateService_MetadataEntry,
    } as MsgUpdateService_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateService_MetadataEntry {
    const message = {
      ...baseMsgUpdateService_MetadataEntry,
    } as MsgUpdateService_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateService_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateService_MetadataEntry>
  ): MsgUpdateService_MetadataEntry {
    const message = {
      ...baseMsgUpdateService_MetadataEntry,
    } as MsgUpdateService_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateServiceResponse: object = { didDocument: "" };

export const MsgUpdateServiceResponse = {
  encode(
    message: MsgUpdateServiceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.didDocument !== "") {
      writer.uint32(10).string(message.didDocument);
    }
    Object.entries(message.configuration).forEach(([key, value]) => {
      MsgUpdateServiceResponse_ConfigurationEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateServiceResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateServiceResponse,
    } as MsgUpdateServiceResponse;
    message.configuration = {};
    message.metadata = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.didDocument = reader.string();
          break;
        case 2:
          const entry2 = MsgUpdateServiceResponse_ConfigurationEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.configuration[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = MsgUpdateServiceResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateServiceResponse {
    const message = {
      ...baseMsgUpdateServiceResponse,
    } as MsgUpdateServiceResponse;
    message.configuration = {};
    message.metadata = {};
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = String(object.didDocument);
    } else {
      message.didDocument = "";
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      Object.entries(object.configuration).forEach(([key, value]) => {
        message.configuration[key] = String(value);
      });
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        message.metadata[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: MsgUpdateServiceResponse): unknown {
    const obj: any = {};
    message.didDocument !== undefined &&
      (obj.didDocument = message.didDocument);
    obj.configuration = {};
    if (message.configuration) {
      Object.entries(message.configuration).forEach(([k, v]) => {
        obj.configuration[k] = v;
      });
    }
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateServiceResponse>
  ): MsgUpdateServiceResponse {
    const message = {
      ...baseMsgUpdateServiceResponse,
    } as MsgUpdateServiceResponse;
    message.configuration = {};
    message.metadata = {};
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = object.didDocument;
    } else {
      message.didDocument = "";
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      Object.entries(object.configuration).forEach(([key, value]) => {
        if (value !== undefined) {
          message.configuration[key] = String(value);
        }
      });
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      Object.entries(object.metadata).forEach(([key, value]) => {
        if (value !== undefined) {
          message.metadata[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseMsgUpdateServiceResponse_ConfigurationEntry: object = {
  key: "",
  value: "",
};

export const MsgUpdateServiceResponse_ConfigurationEntry = {
  encode(
    message: MsgUpdateServiceResponse_ConfigurationEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateServiceResponse_ConfigurationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateServiceResponse_ConfigurationEntry,
    } as MsgUpdateServiceResponse_ConfigurationEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateServiceResponse_ConfigurationEntry {
    const message = {
      ...baseMsgUpdateServiceResponse_ConfigurationEntry,
    } as MsgUpdateServiceResponse_ConfigurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateServiceResponse_ConfigurationEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateServiceResponse_ConfigurationEntry>
  ): MsgUpdateServiceResponse_ConfigurationEntry {
    const message = {
      ...baseMsgUpdateServiceResponse_ConfigurationEntry,
    } as MsgUpdateServiceResponse_ConfigurationEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateServiceResponse_MetadataEntry: object = {
  key: "",
  value: "",
};

export const MsgUpdateServiceResponse_MetadataEntry = {
  encode(
    message: MsgUpdateServiceResponse_MetadataEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateServiceResponse_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateServiceResponse_MetadataEntry,
    } as MsgUpdateServiceResponse_MetadataEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateServiceResponse_MetadataEntry {
    const message = {
      ...baseMsgUpdateServiceResponse_MetadataEntry,
    } as MsgUpdateServiceResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateServiceResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateServiceResponse_MetadataEntry>
  ): MsgUpdateServiceResponse_MetadataEntry {
    const message = {
      ...baseMsgUpdateServiceResponse_MetadataEntry,
    } as MsgUpdateServiceResponse_MetadataEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgCreateWhoIs: object = {
  creator: "",
  index: "",
  did: "",
  value: "",
};

export const MsgCreateWhoIs = {
  encode(message: MsgCreateWhoIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWhoIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWhoIs } as MsgCreateWhoIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWhoIs {
    const message = { ...baseMsgCreateWhoIs } as MsgCreateWhoIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWhoIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWhoIs>): MsgCreateWhoIs {
    const message = { ...baseMsgCreateWhoIs } as MsgCreateWhoIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgCreateWhoIsResponse: object = {};

export const MsgCreateWhoIsResponse = {
  encode(_: MsgCreateWhoIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWhoIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWhoIsResponse } as MsgCreateWhoIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateWhoIsResponse {
    const message = { ...baseMsgCreateWhoIsResponse } as MsgCreateWhoIsResponse;
    return message;
  },

  toJSON(_: MsgCreateWhoIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateWhoIsResponse>): MsgCreateWhoIsResponse {
    const message = { ...baseMsgCreateWhoIsResponse } as MsgCreateWhoIsResponse;
    return message;
  },
};

const baseMsgUpdateWhoIs: object = {
  creator: "",
  index: "",
  did: "",
  value: "",
};

export const MsgUpdateWhoIs = {
  encode(message: MsgUpdateWhoIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWhoIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateWhoIs } as MsgUpdateWhoIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWhoIs {
    const message = { ...baseMsgUpdateWhoIs } as MsgUpdateWhoIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateWhoIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateWhoIs>): MsgUpdateWhoIs {
    const message = { ...baseMsgUpdateWhoIs } as MsgUpdateWhoIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseMsgUpdateWhoIsResponse: object = {};

export const MsgUpdateWhoIsResponse = {
  encode(_: MsgUpdateWhoIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWhoIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateWhoIsResponse } as MsgUpdateWhoIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateWhoIsResponse {
    const message = { ...baseMsgUpdateWhoIsResponse } as MsgUpdateWhoIsResponse;
    return message;
  },

  toJSON(_: MsgUpdateWhoIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateWhoIsResponse>): MsgUpdateWhoIsResponse {
    const message = { ...baseMsgUpdateWhoIsResponse } as MsgUpdateWhoIsResponse;
    return message;
  },
};

const baseMsgDeleteWhoIs: object = { creator: "", index: "" };

export const MsgDeleteWhoIs = {
  encode(message: MsgDeleteWhoIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWhoIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteWhoIs } as MsgDeleteWhoIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteWhoIs {
    const message = { ...baseMsgDeleteWhoIs } as MsgDeleteWhoIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteWhoIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteWhoIs>): MsgDeleteWhoIs {
    const message = { ...baseMsgDeleteWhoIs } as MsgDeleteWhoIs;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteWhoIsResponse: object = {};

export const MsgDeleteWhoIsResponse = {
  encode(_: MsgDeleteWhoIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWhoIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteWhoIsResponse } as MsgDeleteWhoIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteWhoIsResponse {
    const message = { ...baseMsgDeleteWhoIsResponse } as MsgDeleteWhoIsResponse;
    return message;
  },

  toJSON(_: MsgDeleteWhoIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteWhoIsResponse>): MsgDeleteWhoIsResponse {
    const message = { ...baseMsgDeleteWhoIsResponse } as MsgDeleteWhoIsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterService(
    request: MsgRegisterService
  ): Promise<MsgRegisterServiceResponse>;
  RegisterName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
  AccessName(request: MsgAccessName): Promise<MsgAccessNameResponse>;
  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>;
  AccessService(request: MsgAccessService): Promise<MsgAccessServiceResponse>;
  UpdateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse>;
  CreateWhoIs(request: MsgCreateWhoIs): Promise<MsgCreateWhoIsResponse>;
  UpdateWhoIs(request: MsgUpdateWhoIs): Promise<MsgUpdateWhoIsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteWhoIs(request: MsgDeleteWhoIs): Promise<MsgDeleteWhoIsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RegisterService(
    request: MsgRegisterService
  ): Promise<MsgRegisterServiceResponse> {
    const data = MsgRegisterService.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "RegisterService",
      data
    );
    return promise.then((data) =>
      MsgRegisterServiceResponse.decode(new Reader(data))
    );
  }

  RegisterName(request: MsgRegisterName): Promise<MsgRegisterNameResponse> {
    const data = MsgRegisterName.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "RegisterName",
      data
    );
    return promise.then((data) =>
      MsgRegisterNameResponse.decode(new Reader(data))
    );
  }

  AccessName(request: MsgAccessName): Promise<MsgAccessNameResponse> {
    const data = MsgAccessName.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "AccessName",
      data
    );
    return promise.then((data) =>
      MsgAccessNameResponse.decode(new Reader(data))
    );
  }

  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse> {
    const data = MsgUpdateName.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "UpdateName",
      data
    );
    return promise.then((data) =>
      MsgUpdateNameResponse.decode(new Reader(data))
    );
  }

  AccessService(request: MsgAccessService): Promise<MsgAccessServiceResponse> {
    const data = MsgAccessService.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "AccessService",
      data
    );
    return promise.then((data) =>
      MsgAccessServiceResponse.decode(new Reader(data))
    );
  }

  UpdateService(request: MsgUpdateService): Promise<MsgUpdateServiceResponse> {
    const data = MsgUpdateService.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "UpdateService",
      data
    );
    return promise.then((data) =>
      MsgUpdateServiceResponse.decode(new Reader(data))
    );
  }

  CreateWhoIs(request: MsgCreateWhoIs): Promise<MsgCreateWhoIsResponse> {
    const data = MsgCreateWhoIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "CreateWhoIs",
      data
    );
    return promise.then((data) =>
      MsgCreateWhoIsResponse.decode(new Reader(data))
    );
  }

  UpdateWhoIs(request: MsgUpdateWhoIs): Promise<MsgUpdateWhoIsResponse> {
    const data = MsgUpdateWhoIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "UpdateWhoIs",
      data
    );
    return promise.then((data) =>
      MsgUpdateWhoIsResponse.decode(new Reader(data))
    );
  }

  DeleteWhoIs(request: MsgDeleteWhoIs): Promise<MsgDeleteWhoIsResponse> {
    const data = MsgDeleteWhoIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "DeleteWhoIs",
      data
    );
    return promise.then((data) =>
      MsgDeleteWhoIsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
