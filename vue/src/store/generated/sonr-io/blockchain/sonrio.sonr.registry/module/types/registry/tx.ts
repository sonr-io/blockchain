/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Credential } from "../registry/credential";
import { WhoIs } from "../registry/who_is";

export const protobufPackage = "sonrio.sonr.registry";

export interface MsgRegisterApplication {
  /** Creator is the account address of the creator of the Application. */
  creator: string;
  /** Application Name is the endpoint of the Application. */
  ApplicationName: string;
  /** Client side JSON Web Token for AssertionMethod */
  credential: Credential | undefined;
}

export interface MsgRegisterApplicationResponse {
  /** The name that was registered */
  isSuccess: boolean;
  /** The Did string in url format i.e. did:sonr:<did> */
  didUrl: string;
  /** The Document for the registered DID in Json format */
  didDocumentJson: Uint8Array;
  /** WhoIs for the registered name */
  whoIs: WhoIs | undefined;
}

/** MsgRegisterName is a request to register a name with the ".snr" name of a peer */
export interface MsgRegisterName {
  /** Account address of the name owner */
  creator: string;
  /** Selected Name to register */
  nameToRegister: string;
  /** Client side JSON Web Token for AssertionMethod */
  credential: Credential | undefined;
}

export interface MsgRegisterNameResponse {
  /** The name that was registered */
  isSuccess: boolean;
  /** The Did string in url format i.e. did:sonr:<did> */
  didUrl: string;
  /** The Document for the registered DID in Json format */
  didDocumentJson: Uint8Array;
  /** WhoIs for the registered name */
  whoIs: WhoIs | undefined;
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
  /** The DID Url of the name */
  did: string;
  /** The Document for the registered DID in Json format */
  didDocumentJson: Uint8Array;
  /** WhoIs for the name */
  whoIs: WhoIs | undefined;
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
  /** The account that owns the name. */
  creator: string;
  /** The did of the peer to update the name of */
  did: string;
  /** The Updated Metadata */
  metadata: { [key: string]: string };
}

export interface MsgUpdateNameResponse_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgAccessApplication {
  /** The account that is accessing the Application */
  creator: string;
  /** The name of the Application to access */
  appName: string;
}

export interface MsgAccessApplicationResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** Data of the response */
  metadata: { [key: string]: string };
  /** WhoIs for the registered name */
  whoIs: WhoIs | undefined;
}

export interface MsgAccessApplicationResponse_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgUpdateApplication {
  /** The account that owns the name. */
  creator: string;
  /** The name of the peer to update the Application details of */
  did: string;
  /** The updated configuration for the Application */
  metadata: { [key: string]: string };
}

export interface MsgUpdateApplication_MetadataEntry {
  key: string;
  value: string;
}

export interface MsgUpdateApplicationResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** Data of the response */
  metadata: { [key: string]: string };
  /** WhoIs for the registered name */
  whoIs: WhoIs | undefined;
}

export interface MsgUpdateApplicationResponse_MetadataEntry {
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

const baseMsgRegisterApplication: object = { creator: "", ApplicationName: "" };

export const MsgRegisterApplication = {
  encode(
    message: MsgRegisterApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.ApplicationName !== "") {
      writer.uint32(18).string(message.ApplicationName);
    }
    if (message.credential !== undefined) {
      Credential.encode(message.credential, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterApplication } as MsgRegisterApplication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.ApplicationName = reader.string();
          break;
        case 3:
          message.credential = Credential.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterApplication {
    const message = { ...baseMsgRegisterApplication } as MsgRegisterApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (
      object.ApplicationName !== undefined &&
      object.ApplicationName !== null
    ) {
      message.ApplicationName = String(object.ApplicationName);
    } else {
      message.ApplicationName = "";
    }
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = Credential.fromJSON(object.credential);
    } else {
      message.credential = undefined;
    }
    return message;
  },

  toJSON(message: MsgRegisterApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.ApplicationName !== undefined &&
      (obj.ApplicationName = message.ApplicationName);
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? Credential.toJSON(message.credential)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterApplication>
  ): MsgRegisterApplication {
    const message = { ...baseMsgRegisterApplication } as MsgRegisterApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (
      object.ApplicationName !== undefined &&
      object.ApplicationName !== null
    ) {
      message.ApplicationName = object.ApplicationName;
    } else {
      message.ApplicationName = "";
    }
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = Credential.fromPartial(object.credential);
    } else {
      message.credential = undefined;
    }
    return message;
  },
};

const baseMsgRegisterApplicationResponse: object = {
  isSuccess: false,
  didUrl: "",
};

export const MsgRegisterApplicationResponse = {
  encode(
    message: MsgRegisterApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.isSuccess === true) {
      writer.uint32(8).bool(message.isSuccess);
    }
    if (message.didUrl !== "") {
      writer.uint32(18).string(message.didUrl);
    }
    if (message.didDocumentJson.length !== 0) {
      writer.uint32(26).bytes(message.didDocumentJson);
    }
    if (message.whoIs !== undefined) {
      WhoIs.encode(message.whoIs, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterApplicationResponse,
    } as MsgRegisterApplicationResponse;
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
          message.didDocumentJson = reader.bytes();
          break;
        case 4:
          message.whoIs = WhoIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterApplicationResponse {
    const message = {
      ...baseMsgRegisterApplicationResponse,
    } as MsgRegisterApplicationResponse;
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
      message.didDocumentJson = bytesFromBase64(object.didDocumentJson);
    }
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromJSON(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },

  toJSON(message: MsgRegisterApplicationResponse): unknown {
    const obj: any = {};
    message.isSuccess !== undefined && (obj.isSuccess = message.isSuccess);
    message.didUrl !== undefined && (obj.didUrl = message.didUrl);
    message.didDocumentJson !== undefined &&
      (obj.didDocumentJson = base64FromBytes(
        message.didDocumentJson !== undefined
          ? message.didDocumentJson
          : new Uint8Array()
      ));
    message.whoIs !== undefined &&
      (obj.whoIs = message.whoIs ? WhoIs.toJSON(message.whoIs) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterApplicationResponse>
  ): MsgRegisterApplicationResponse {
    const message = {
      ...baseMsgRegisterApplicationResponse,
    } as MsgRegisterApplicationResponse;
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
      message.didDocumentJson = new Uint8Array();
    }
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromPartial(object.whoIs);
    } else {
      message.whoIs = undefined;
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
    if (message.credential !== undefined) {
      Credential.encode(message.credential, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterName } as MsgRegisterName;
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
          message.credential = Credential.decode(reader, reader.uint32());
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
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = Credential.fromJSON(object.credential);
    } else {
      message.credential = undefined;
    }
    return message;
  },

  toJSON(message: MsgRegisterName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nameToRegister !== undefined &&
      (obj.nameToRegister = message.nameToRegister);
    message.credential !== undefined &&
      (obj.credential = message.credential
        ? Credential.toJSON(message.credential)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterName>): MsgRegisterName {
    const message = { ...baseMsgRegisterName } as MsgRegisterName;
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
    if (object.credential !== undefined && object.credential !== null) {
      message.credential = Credential.fromPartial(object.credential);
    } else {
      message.credential = undefined;
    }
    return message;
  },
};

const baseMsgRegisterNameResponse: object = { isSuccess: false, didUrl: "" };

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
    if (message.didDocumentJson.length !== 0) {
      writer.uint32(26).bytes(message.didDocumentJson);
    }
    if (message.whoIs !== undefined) {
      WhoIs.encode(message.whoIs, writer.uint32(34).fork()).ldelim();
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
          message.didDocumentJson = reader.bytes();
          break;
        case 4:
          message.whoIs = WhoIs.decode(reader, reader.uint32());
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
      message.didDocumentJson = bytesFromBase64(object.didDocumentJson);
    }
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromJSON(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },

  toJSON(message: MsgRegisterNameResponse): unknown {
    const obj: any = {};
    message.isSuccess !== undefined && (obj.isSuccess = message.isSuccess);
    message.didUrl !== undefined && (obj.didUrl = message.didUrl);
    message.didDocumentJson !== undefined &&
      (obj.didDocumentJson = base64FromBytes(
        message.didDocumentJson !== undefined
          ? message.didDocumentJson
          : new Uint8Array()
      ));
    message.whoIs !== undefined &&
      (obj.whoIs = message.whoIs ? WhoIs.toJSON(message.whoIs) : undefined);
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
      message.didDocumentJson = new Uint8Array();
    }
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromPartial(object.whoIs);
    } else {
      message.whoIs = undefined;
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

const baseMsgAccessNameResponse: object = { did: "" };

export const MsgAccessNameResponse = {
  encode(
    message: MsgAccessNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.didDocumentJson.length !== 0) {
      writer.uint32(18).bytes(message.didDocumentJson);
    }
    if (message.whoIs !== undefined) {
      WhoIs.encode(message.whoIs, writer.uint32(26).fork()).ldelim();
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
          message.didDocumentJson = reader.bytes();
          break;
        case 3:
          message.whoIs = WhoIs.decode(reader, reader.uint32());
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
    if (
      object.didDocumentJson !== undefined &&
      object.didDocumentJson !== null
    ) {
      message.didDocumentJson = bytesFromBase64(object.didDocumentJson);
    }
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromJSON(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },

  toJSON(message: MsgAccessNameResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.didDocumentJson !== undefined &&
      (obj.didDocumentJson = base64FromBytes(
        message.didDocumentJson !== undefined
          ? message.didDocumentJson
          : new Uint8Array()
      ));
    message.whoIs !== undefined &&
      (obj.whoIs = message.whoIs ? WhoIs.toJSON(message.whoIs) : undefined);
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
    if (
      object.didDocumentJson !== undefined &&
      object.didDocumentJson !== null
    ) {
      message.didDocumentJson = object.didDocumentJson;
    } else {
      message.didDocumentJson = new Uint8Array();
    }
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromPartial(object.whoIs);
    } else {
      message.whoIs = undefined;
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

const baseMsgUpdateNameResponse: object = { creator: "", did: "" };

export const MsgUpdateNameResponse = {
  encode(
    message: MsgUpdateNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateNameResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
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
          message.creator = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          const entry3 = MsgUpdateNameResponse_MetadataEntry.decode(
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

  fromJSON(object: any): MsgUpdateNameResponse {
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse;
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

  toJSON(message: MsgUpdateNameResponse): unknown {
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

  fromPartial(
    object: DeepPartial<MsgUpdateNameResponse>
  ): MsgUpdateNameResponse {
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse;
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

const baseMsgAccessApplication: object = { creator: "", appName: "" };

export const MsgAccessApplication = {
  encode(
    message: MsgAccessApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAccessApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAccessApplication } as MsgAccessApplication;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessApplication {
    const message = { ...baseMsgAccessApplication } as MsgAccessApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.appName !== undefined && object.appName !== null) {
      message.appName = String(object.appName);
    } else {
      message.appName = "";
    }
    return message;
  },

  toJSON(message: MsgAccessApplication): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.appName !== undefined && (obj.appName = message.appName);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAccessApplication>): MsgAccessApplication {
    const message = { ...baseMsgAccessApplication } as MsgAccessApplication;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.appName !== undefined && object.appName !== null) {
      message.appName = object.appName;
    } else {
      message.appName = "";
    }
    return message;
  },
};

const baseMsgAccessApplicationResponse: object = { code: 0, message: "" };

export const MsgAccessApplicationResponse = {
  encode(
    message: MsgAccessApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgAccessApplicationResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.whoIs !== undefined) {
      WhoIs.encode(message.whoIs, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAccessApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAccessApplicationResponse,
    } as MsgAccessApplicationResponse;
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
          const entry3 = MsgAccessApplicationResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.whoIs = WhoIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAccessApplicationResponse {
    const message = {
      ...baseMsgAccessApplicationResponse,
    } as MsgAccessApplicationResponse;
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
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromJSON(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },

  toJSON(message: MsgAccessApplicationResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.whoIs !== undefined &&
      (obj.whoIs = message.whoIs ? WhoIs.toJSON(message.whoIs) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAccessApplicationResponse>
  ): MsgAccessApplicationResponse {
    const message = {
      ...baseMsgAccessApplicationResponse,
    } as MsgAccessApplicationResponse;
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
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromPartial(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },
};

const baseMsgAccessApplicationResponse_MetadataEntry: object = {
  key: "",
  value: "",
};

export const MsgAccessApplicationResponse_MetadataEntry = {
  encode(
    message: MsgAccessApplicationResponse_MetadataEntry,
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
  ): MsgAccessApplicationResponse_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAccessApplicationResponse_MetadataEntry,
    } as MsgAccessApplicationResponse_MetadataEntry;
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

  fromJSON(object: any): MsgAccessApplicationResponse_MetadataEntry {
    const message = {
      ...baseMsgAccessApplicationResponse_MetadataEntry,
    } as MsgAccessApplicationResponse_MetadataEntry;
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

  toJSON(message: MsgAccessApplicationResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAccessApplicationResponse_MetadataEntry>
  ): MsgAccessApplicationResponse_MetadataEntry {
    const message = {
      ...baseMsgAccessApplicationResponse_MetadataEntry,
    } as MsgAccessApplicationResponse_MetadataEntry;
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

const baseMsgUpdateApplication: object = { creator: "", did: "" };

export const MsgUpdateApplication = {
  encode(
    message: MsgUpdateApplication,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateApplication_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateApplication {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateApplication } as MsgUpdateApplication;
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
          const entry3 = MsgUpdateApplication_MetadataEntry.decode(
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

  fromJSON(object: any): MsgUpdateApplication {
    const message = { ...baseMsgUpdateApplication } as MsgUpdateApplication;
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

  toJSON(message: MsgUpdateApplication): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateApplication>): MsgUpdateApplication {
    const message = { ...baseMsgUpdateApplication } as MsgUpdateApplication;
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

const baseMsgUpdateApplication_MetadataEntry: object = { key: "", value: "" };

export const MsgUpdateApplication_MetadataEntry = {
  encode(
    message: MsgUpdateApplication_MetadataEntry,
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
  ): MsgUpdateApplication_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateApplication_MetadataEntry,
    } as MsgUpdateApplication_MetadataEntry;
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

  fromJSON(object: any): MsgUpdateApplication_MetadataEntry {
    const message = {
      ...baseMsgUpdateApplication_MetadataEntry,
    } as MsgUpdateApplication_MetadataEntry;
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

  toJSON(message: MsgUpdateApplication_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateApplication_MetadataEntry>
  ): MsgUpdateApplication_MetadataEntry {
    const message = {
      ...baseMsgUpdateApplication_MetadataEntry,
    } as MsgUpdateApplication_MetadataEntry;
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

const baseMsgUpdateApplicationResponse: object = { code: 0, message: "" };

export const MsgUpdateApplicationResponse = {
  encode(
    message: MsgUpdateApplicationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      MsgUpdateApplicationResponse_MetadataEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    if (message.whoIs !== undefined) {
      WhoIs.encode(message.whoIs, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateApplicationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateApplicationResponse,
    } as MsgUpdateApplicationResponse;
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
          const entry3 = MsgUpdateApplicationResponse_MetadataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.whoIs = WhoIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateApplicationResponse {
    const message = {
      ...baseMsgUpdateApplicationResponse,
    } as MsgUpdateApplicationResponse;
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
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromJSON(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateApplicationResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    message.whoIs !== undefined &&
      (obj.whoIs = message.whoIs ? WhoIs.toJSON(message.whoIs) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateApplicationResponse>
  ): MsgUpdateApplicationResponse {
    const message = {
      ...baseMsgUpdateApplicationResponse,
    } as MsgUpdateApplicationResponse;
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
    if (object.whoIs !== undefined && object.whoIs !== null) {
      message.whoIs = WhoIs.fromPartial(object.whoIs);
    } else {
      message.whoIs = undefined;
    }
    return message;
  },
};

const baseMsgUpdateApplicationResponse_MetadataEntry: object = {
  key: "",
  value: "",
};

export const MsgUpdateApplicationResponse_MetadataEntry = {
  encode(
    message: MsgUpdateApplicationResponse_MetadataEntry,
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
  ): MsgUpdateApplicationResponse_MetadataEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateApplicationResponse_MetadataEntry,
    } as MsgUpdateApplicationResponse_MetadataEntry;
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

  fromJSON(object: any): MsgUpdateApplicationResponse_MetadataEntry {
    const message = {
      ...baseMsgUpdateApplicationResponse_MetadataEntry,
    } as MsgUpdateApplicationResponse_MetadataEntry;
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

  toJSON(message: MsgUpdateApplicationResponse_MetadataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateApplicationResponse_MetadataEntry>
  ): MsgUpdateApplicationResponse_MetadataEntry {
    const message = {
      ...baseMsgUpdateApplicationResponse_MetadataEntry,
    } as MsgUpdateApplicationResponse_MetadataEntry;
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

/** Msg defines the Msg Application. */
export interface Msg {
  RegisterApplication(
    request: MsgRegisterApplication
  ): Promise<MsgRegisterApplicationResponse>;
  RegisterName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
  AccessName(request: MsgAccessName): Promise<MsgAccessNameResponse>;
  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>;
  AccessApplication(
    request: MsgAccessApplication
  ): Promise<MsgAccessApplicationResponse>;
  UpdateApplication(
    request: MsgUpdateApplication
  ): Promise<MsgUpdateApplicationResponse>;
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
  RegisterApplication(
    request: MsgRegisterApplication
  ): Promise<MsgRegisterApplicationResponse> {
    const data = MsgRegisterApplication.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "RegisterApplication",
      data
    );
    return promise.then((data) =>
      MsgRegisterApplicationResponse.decode(new Reader(data))
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

  AccessApplication(
    request: MsgAccessApplication
  ): Promise<MsgAccessApplicationResponse> {
    const data = MsgAccessApplication.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "AccessApplication",
      data
    );
    return promise.then((data) =>
      MsgAccessApplicationResponse.decode(new Reader(data))
    );
  }

  UpdateApplication(
    request: MsgUpdateApplication
  ): Promise<MsgUpdateApplicationResponse> {
    const data = MsgUpdateApplication.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.registry.Msg",
      "UpdateApplication",
      data
    );
    return promise.then((data) =>
      MsgUpdateApplicationResponse.decode(new Reader(data))
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
