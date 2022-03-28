/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ObjectField } from "../object/object";

export const protobufPackage = "sonrio.sonr.object";

export interface MsgCreateObject {
  creator: string;
  label: string;
  description: string;
  fields: ObjectField[];
}

export interface MsgCreateObjectResponse {}

export interface MsgReadObject {
  creator: string;
  did: string;
}

export interface MsgReadObjectResponse {}

export interface MsgUpdateObject {
  creator: string;
  did: string;
}

export interface MsgUpdateObjectResponse {}

export interface MsgDeleteObject {
  creator: string;
  did: string;
  publicKey: string;
}

export interface MsgDeleteObjectResponse {}

export interface MsgCreateWhatIs {
  creator: string;
  index: string;
  did: string;
  document: Uint8Array;
}

export interface MsgCreateWhatIsResponse {}

export interface MsgUpdateWhatIs {
  creator: string;
  index: string;
  did: string;
  document: Uint8Array;
}

export interface MsgUpdateWhatIsResponse {}

export interface MsgDeleteWhatIs {
  creator: string;
  index: string;
}

export interface MsgDeleteWhatIsResponse {}

const baseMsgCreateObject: object = { creator: "", label: "", description: "" };

export const MsgCreateObject = {
  encode(message: MsgCreateObject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    for (const v of message.fields) {
      ObjectField.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateObject } as MsgCreateObject;
    message.fields = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.label = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.fields.push(ObjectField.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateObject {
    const message = { ...baseMsgCreateObject } as MsgCreateObject;
    message.fields = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = String(object.label);
    } else {
      message.label = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(ObjectField.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.fields) {
      obj.fields = message.fields.map((e) =>
        e ? ObjectField.toJSON(e) : undefined
      );
    } else {
      obj.fields = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateObject>): MsgCreateObject {
    const message = { ...baseMsgCreateObject } as MsgCreateObject;
    message.fields = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.label !== undefined && object.label !== null) {
      message.label = object.label;
    } else {
      message.label = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.fields !== undefined && object.fields !== null) {
      for (const e of object.fields) {
        message.fields.push(ObjectField.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreateObjectResponse: object = {};

export const MsgCreateObjectResponse = {
  encode(_: MsgCreateObjectResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateObjectResponse,
    } as MsgCreateObjectResponse;
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

  fromJSON(_: any): MsgCreateObjectResponse {
    const message = {
      ...baseMsgCreateObjectResponse,
    } as MsgCreateObjectResponse;
    return message;
  },

  toJSON(_: MsgCreateObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateObjectResponse>
  ): MsgCreateObjectResponse {
    const message = {
      ...baseMsgCreateObjectResponse,
    } as MsgCreateObjectResponse;
    return message;
  },
};

const baseMsgReadObject: object = { creator: "", did: "" };

export const MsgReadObject = {
  encode(message: MsgReadObject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadObject } as MsgReadObject;
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

  fromJSON(object: any): MsgReadObject {
    const message = { ...baseMsgReadObject } as MsgReadObject;
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

  toJSON(message: MsgReadObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReadObject>): MsgReadObject {
    const message = { ...baseMsgReadObject } as MsgReadObject;
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

const baseMsgReadObjectResponse: object = {};

export const MsgReadObjectResponse = {
  encode(_: MsgReadObjectResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadObjectResponse } as MsgReadObjectResponse;
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

  fromJSON(_: any): MsgReadObjectResponse {
    const message = { ...baseMsgReadObjectResponse } as MsgReadObjectResponse;
    return message;
  },

  toJSON(_: MsgReadObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgReadObjectResponse>): MsgReadObjectResponse {
    const message = { ...baseMsgReadObjectResponse } as MsgReadObjectResponse;
    return message;
  },
};

const baseMsgUpdateObject: object = { creator: "", did: "" };

export const MsgUpdateObject = {
  encode(message: MsgUpdateObject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateObject } as MsgUpdateObject;
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

  fromJSON(object: any): MsgUpdateObject {
    const message = { ...baseMsgUpdateObject } as MsgUpdateObject;
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

  toJSON(message: MsgUpdateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateObject>): MsgUpdateObject {
    const message = { ...baseMsgUpdateObject } as MsgUpdateObject;
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

const baseMsgUpdateObjectResponse: object = {};

export const MsgUpdateObjectResponse = {
  encode(_: MsgUpdateObjectResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateObjectResponse,
    } as MsgUpdateObjectResponse;
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

  fromJSON(_: any): MsgUpdateObjectResponse {
    const message = {
      ...baseMsgUpdateObjectResponse,
    } as MsgUpdateObjectResponse;
    return message;
  },

  toJSON(_: MsgUpdateObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateObjectResponse>
  ): MsgUpdateObjectResponse {
    const message = {
      ...baseMsgUpdateObjectResponse,
    } as MsgUpdateObjectResponse;
    return message;
  },
};

const baseMsgDeleteObject: object = { creator: "", did: "", publicKey: "" };

export const MsgDeleteObject = {
  encode(message: MsgDeleteObject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.publicKey !== "") {
      writer.uint32(26).string(message.publicKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteObject } as MsgDeleteObject;
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
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteObject {
    const message = { ...baseMsgDeleteObject } as MsgDeleteObject;
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteObject>): MsgDeleteObject {
    const message = { ...baseMsgDeleteObject } as MsgDeleteObject;
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    return message;
  },
};

const baseMsgDeleteObjectResponse: object = {};

export const MsgDeleteObjectResponse = {
  encode(_: MsgDeleteObjectResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteObjectResponse,
    } as MsgDeleteObjectResponse;
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

  fromJSON(_: any): MsgDeleteObjectResponse {
    const message = {
      ...baseMsgDeleteObjectResponse,
    } as MsgDeleteObjectResponse;
    return message;
  },

  toJSON(_: MsgDeleteObjectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteObjectResponse>
  ): MsgDeleteObjectResponse {
    const message = {
      ...baseMsgDeleteObjectResponse,
    } as MsgDeleteObjectResponse;
    return message;
  },
};

const baseMsgCreateWhatIs: object = { creator: "", index: "", did: "" };

export const MsgCreateWhatIs = {
  encode(message: MsgCreateWhatIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.document.length !== 0) {
      writer.uint32(34).bytes(message.document);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWhatIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWhatIs } as MsgCreateWhatIs;
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
          message.document = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWhatIs {
    const message = { ...baseMsgCreateWhatIs } as MsgCreateWhatIs;
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
    if (object.document !== undefined && object.document !== null) {
      message.document = bytesFromBase64(object.document);
    }
    return message;
  },

  toJSON(message: MsgCreateWhatIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.document !== undefined &&
      (obj.document = base64FromBytes(
        message.document !== undefined ? message.document : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWhatIs>): MsgCreateWhatIs {
    const message = { ...baseMsgCreateWhatIs } as MsgCreateWhatIs;
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
    if (object.document !== undefined && object.document !== null) {
      message.document = object.document;
    } else {
      message.document = new Uint8Array();
    }
    return message;
  },
};

const baseMsgCreateWhatIsResponse: object = {};

export const MsgCreateWhatIsResponse = {
  encode(_: MsgCreateWhatIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWhatIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateWhatIsResponse,
    } as MsgCreateWhatIsResponse;
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

  fromJSON(_: any): MsgCreateWhatIsResponse {
    const message = {
      ...baseMsgCreateWhatIsResponse,
    } as MsgCreateWhatIsResponse;
    return message;
  },

  toJSON(_: MsgCreateWhatIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateWhatIsResponse>
  ): MsgCreateWhatIsResponse {
    const message = {
      ...baseMsgCreateWhatIsResponse,
    } as MsgCreateWhatIsResponse;
    return message;
  },
};

const baseMsgUpdateWhatIs: object = { creator: "", index: "", did: "" };

export const MsgUpdateWhatIs = {
  encode(message: MsgUpdateWhatIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.document.length !== 0) {
      writer.uint32(34).bytes(message.document);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWhatIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateWhatIs } as MsgUpdateWhatIs;
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
          message.document = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWhatIs {
    const message = { ...baseMsgUpdateWhatIs } as MsgUpdateWhatIs;
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
    if (object.document !== undefined && object.document !== null) {
      message.document = bytesFromBase64(object.document);
    }
    return message;
  },

  toJSON(message: MsgUpdateWhatIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.document !== undefined &&
      (obj.document = base64FromBytes(
        message.document !== undefined ? message.document : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateWhatIs>): MsgUpdateWhatIs {
    const message = { ...baseMsgUpdateWhatIs } as MsgUpdateWhatIs;
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
    if (object.document !== undefined && object.document !== null) {
      message.document = object.document;
    } else {
      message.document = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpdateWhatIsResponse: object = {};

export const MsgUpdateWhatIsResponse = {
  encode(_: MsgUpdateWhatIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWhatIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateWhatIsResponse,
    } as MsgUpdateWhatIsResponse;
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

  fromJSON(_: any): MsgUpdateWhatIsResponse {
    const message = {
      ...baseMsgUpdateWhatIsResponse,
    } as MsgUpdateWhatIsResponse;
    return message;
  },

  toJSON(_: MsgUpdateWhatIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateWhatIsResponse>
  ): MsgUpdateWhatIsResponse {
    const message = {
      ...baseMsgUpdateWhatIsResponse,
    } as MsgUpdateWhatIsResponse;
    return message;
  },
};

const baseMsgDeleteWhatIs: object = { creator: "", index: "" };

export const MsgDeleteWhatIs = {
  encode(message: MsgDeleteWhatIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWhatIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteWhatIs } as MsgDeleteWhatIs;
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

  fromJSON(object: any): MsgDeleteWhatIs {
    const message = { ...baseMsgDeleteWhatIs } as MsgDeleteWhatIs;
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

  toJSON(message: MsgDeleteWhatIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteWhatIs>): MsgDeleteWhatIs {
    const message = { ...baseMsgDeleteWhatIs } as MsgDeleteWhatIs;
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

const baseMsgDeleteWhatIsResponse: object = {};

export const MsgDeleteWhatIsResponse = {
  encode(_: MsgDeleteWhatIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWhatIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteWhatIsResponse,
    } as MsgDeleteWhatIsResponse;
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

  fromJSON(_: any): MsgDeleteWhatIsResponse {
    const message = {
      ...baseMsgDeleteWhatIsResponse,
    } as MsgDeleteWhatIsResponse;
    return message;
  },

  toJSON(_: MsgDeleteWhatIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteWhatIsResponse>
  ): MsgDeleteWhatIsResponse {
    const message = {
      ...baseMsgDeleteWhatIsResponse,
    } as MsgDeleteWhatIsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
  ReadObject(request: MsgReadObject): Promise<MsgReadObjectResponse>;
  UpdateObject(request: MsgUpdateObject): Promise<MsgUpdateObjectResponse>;
  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse>;
  CreateWhatIs(request: MsgCreateWhatIs): Promise<MsgCreateWhatIsResponse>;
  UpdateWhatIs(request: MsgUpdateWhatIs): Promise<MsgUpdateWhatIsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteWhatIs(request: MsgDeleteWhatIs): Promise<MsgDeleteWhatIsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse> {
    const data = MsgCreateObject.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "CreateObject",
      data
    );
    return promise.then((data) =>
      MsgCreateObjectResponse.decode(new Reader(data))
    );
  }

  ReadObject(request: MsgReadObject): Promise<MsgReadObjectResponse> {
    const data = MsgReadObject.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "ReadObject",
      data
    );
    return promise.then((data) =>
      MsgReadObjectResponse.decode(new Reader(data))
    );
  }

  UpdateObject(request: MsgUpdateObject): Promise<MsgUpdateObjectResponse> {
    const data = MsgUpdateObject.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "UpdateObject",
      data
    );
    return promise.then((data) =>
      MsgUpdateObjectResponse.decode(new Reader(data))
    );
  }

  DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse> {
    const data = MsgDeleteObject.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "DeleteObject",
      data
    );
    return promise.then((data) =>
      MsgDeleteObjectResponse.decode(new Reader(data))
    );
  }

  CreateWhatIs(request: MsgCreateWhatIs): Promise<MsgCreateWhatIsResponse> {
    const data = MsgCreateWhatIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "CreateWhatIs",
      data
    );
    return promise.then((data) =>
      MsgCreateWhatIsResponse.decode(new Reader(data))
    );
  }

  UpdateWhatIs(request: MsgUpdateWhatIs): Promise<MsgUpdateWhatIsResponse> {
    const data = MsgUpdateWhatIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "UpdateWhatIs",
      data
    );
    return promise.then((data) =>
      MsgUpdateWhatIsResponse.decode(new Reader(data))
    );
  }

  DeleteWhatIs(request: MsgDeleteWhatIs): Promise<MsgDeleteWhatIsResponse> {
    const data = MsgDeleteWhatIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "DeleteWhatIs",
      data
    );
    return promise.then((data) =>
      MsgDeleteWhatIsResponse.decode(new Reader(data))
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
