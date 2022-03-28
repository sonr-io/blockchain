/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "sonrio.sonr.channel";

export interface MsgCreateChannel {
  creator: string;
  name: string;
  description: string;
  object_did: string;
  ttl: number;
  max_size: number;
}

export interface MsgCreateChannelResponse {}

export interface MsgReadChannel {
  creator: string;
  did: string;
}

export interface MsgReadChannelResponse {}

export interface MsgDeleteChannel {
  creator: string;
  did: string;
  publicKey: string;
}

export interface MsgDeleteChannelResponse {}

export interface MsgUpdateChannel {
  creator: string;
  did: string;
}

export interface MsgUpdateChannelResponse {}

export interface MsgCreateHowIs {
  creator: string;
  index: string;
  did: string;
  documentJson: string;
}

export interface MsgCreateHowIsResponse {}

export interface MsgUpdateHowIs {
  creator: string;
  index: string;
  did: string;
  documentJson: string;
}

export interface MsgUpdateHowIsResponse {}

export interface MsgDeleteHowIs {
  creator: string;
  index: string;
}

export interface MsgDeleteHowIsResponse {}

const baseMsgCreateChannel: object = {
  creator: "",
  name: "",
  description: "",
  object_did: "",
  ttl: 0,
  max_size: 0,
};

export const MsgCreateChannel = {
  encode(message: MsgCreateChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.object_did !== "") {
      writer.uint32(34).string(message.object_did);
    }
    if (message.ttl !== 0) {
      writer.uint32(40).int64(message.ttl);
    }
    if (message.max_size !== 0) {
      writer.uint32(48).int64(message.max_size);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateChannel } as MsgCreateChannel;
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
          message.description = reader.string();
          break;
        case 4:
          message.object_did = reader.string();
          break;
        case 5:
          message.ttl = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.max_size = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChannel {
    const message = { ...baseMsgCreateChannel } as MsgCreateChannel;
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
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.object_did !== undefined && object.object_did !== null) {
      message.object_did = String(object.object_did);
    } else {
      message.object_did = "";
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = Number(object.ttl);
    } else {
      message.ttl = 0;
    }
    if (object.max_size !== undefined && object.max_size !== null) {
      message.max_size = Number(object.max_size);
    } else {
      message.max_size = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.object_did !== undefined && (obj.object_did = message.object_did);
    message.ttl !== undefined && (obj.ttl = message.ttl);
    message.max_size !== undefined && (obj.max_size = message.max_size);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateChannel>): MsgCreateChannel {
    const message = { ...baseMsgCreateChannel } as MsgCreateChannel;
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
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.object_did !== undefined && object.object_did !== null) {
      message.object_did = object.object_did;
    } else {
      message.object_did = "";
    }
    if (object.ttl !== undefined && object.ttl !== null) {
      message.ttl = object.ttl;
    } else {
      message.ttl = 0;
    }
    if (object.max_size !== undefined && object.max_size !== null) {
      message.max_size = object.max_size;
    } else {
      message.max_size = 0;
    }
    return message;
  },
};

const baseMsgCreateChannelResponse: object = {};

export const MsgCreateChannelResponse = {
  encode(
    _: MsgCreateChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateChannelResponse,
    } as MsgCreateChannelResponse;
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

  fromJSON(_: any): MsgCreateChannelResponse {
    const message = {
      ...baseMsgCreateChannelResponse,
    } as MsgCreateChannelResponse;
    return message;
  },

  toJSON(_: MsgCreateChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateChannelResponse>
  ): MsgCreateChannelResponse {
    const message = {
      ...baseMsgCreateChannelResponse,
    } as MsgCreateChannelResponse;
    return message;
  },
};

const baseMsgReadChannel: object = { creator: "", did: "" };

export const MsgReadChannel = {
  encode(message: MsgReadChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadChannel } as MsgReadChannel;
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

  fromJSON(object: any): MsgReadChannel {
    const message = { ...baseMsgReadChannel } as MsgReadChannel;
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

  toJSON(message: MsgReadChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReadChannel>): MsgReadChannel {
    const message = { ...baseMsgReadChannel } as MsgReadChannel;
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

const baseMsgReadChannelResponse: object = {};

export const MsgReadChannelResponse = {
  encode(_: MsgReadChannelResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadChannelResponse } as MsgReadChannelResponse;
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

  fromJSON(_: any): MsgReadChannelResponse {
    const message = { ...baseMsgReadChannelResponse } as MsgReadChannelResponse;
    return message;
  },

  toJSON(_: MsgReadChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgReadChannelResponse>): MsgReadChannelResponse {
    const message = { ...baseMsgReadChannelResponse } as MsgReadChannelResponse;
    return message;
  },
};

const baseMsgDeleteChannel: object = { creator: "", did: "", publicKey: "" };

export const MsgDeleteChannel = {
  encode(message: MsgDeleteChannel, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteChannel } as MsgDeleteChannel;
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

  fromJSON(object: any): MsgDeleteChannel {
    const message = { ...baseMsgDeleteChannel } as MsgDeleteChannel;
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

  toJSON(message: MsgDeleteChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteChannel>): MsgDeleteChannel {
    const message = { ...baseMsgDeleteChannel } as MsgDeleteChannel;
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

const baseMsgDeleteChannelResponse: object = {};

export const MsgDeleteChannelResponse = {
  encode(
    _: MsgDeleteChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteChannelResponse,
    } as MsgDeleteChannelResponse;
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

  fromJSON(_: any): MsgDeleteChannelResponse {
    const message = {
      ...baseMsgDeleteChannelResponse,
    } as MsgDeleteChannelResponse;
    return message;
  },

  toJSON(_: MsgDeleteChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteChannelResponse>
  ): MsgDeleteChannelResponse {
    const message = {
      ...baseMsgDeleteChannelResponse,
    } as MsgDeleteChannelResponse;
    return message;
  },
};

const baseMsgUpdateChannel: object = { creator: "", did: "" };

export const MsgUpdateChannel = {
  encode(message: MsgUpdateChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateChannel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateChannel } as MsgUpdateChannel;
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

  fromJSON(object: any): MsgUpdateChannel {
    const message = { ...baseMsgUpdateChannel } as MsgUpdateChannel;
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

  toJSON(message: MsgUpdateChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateChannel>): MsgUpdateChannel {
    const message = { ...baseMsgUpdateChannel } as MsgUpdateChannel;
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

const baseMsgUpdateChannelResponse: object = {};

export const MsgUpdateChannelResponse = {
  encode(
    _: MsgUpdateChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateChannelResponse,
    } as MsgUpdateChannelResponse;
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

  fromJSON(_: any): MsgUpdateChannelResponse {
    const message = {
      ...baseMsgUpdateChannelResponse,
    } as MsgUpdateChannelResponse;
    return message;
  },

  toJSON(_: MsgUpdateChannelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateChannelResponse>
  ): MsgUpdateChannelResponse {
    const message = {
      ...baseMsgUpdateChannelResponse,
    } as MsgUpdateChannelResponse;
    return message;
  },
};

const baseMsgCreateHowIs: object = {
  creator: "",
  index: "",
  did: "",
  documentJson: "",
};

export const MsgCreateHowIs = {
  encode(message: MsgCreateHowIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.documentJson !== "") {
      writer.uint32(34).string(message.documentJson);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateHowIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateHowIs } as MsgCreateHowIs;
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
          message.documentJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHowIs {
    const message = { ...baseMsgCreateHowIs } as MsgCreateHowIs;
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
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = String(object.documentJson);
    } else {
      message.documentJson = "";
    }
    return message;
  },

  toJSON(message: MsgCreateHowIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.documentJson !== undefined &&
      (obj.documentJson = message.documentJson);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateHowIs>): MsgCreateHowIs {
    const message = { ...baseMsgCreateHowIs } as MsgCreateHowIs;
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
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = object.documentJson;
    } else {
      message.documentJson = "";
    }
    return message;
  },
};

const baseMsgCreateHowIsResponse: object = {};

export const MsgCreateHowIsResponse = {
  encode(_: MsgCreateHowIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateHowIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateHowIsResponse } as MsgCreateHowIsResponse;
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

  fromJSON(_: any): MsgCreateHowIsResponse {
    const message = { ...baseMsgCreateHowIsResponse } as MsgCreateHowIsResponse;
    return message;
  },

  toJSON(_: MsgCreateHowIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateHowIsResponse>): MsgCreateHowIsResponse {
    const message = { ...baseMsgCreateHowIsResponse } as MsgCreateHowIsResponse;
    return message;
  },
};

const baseMsgUpdateHowIs: object = {
  creator: "",
  index: "",
  did: "",
  documentJson: "",
};

export const MsgUpdateHowIs = {
  encode(message: MsgUpdateHowIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.documentJson !== "") {
      writer.uint32(34).string(message.documentJson);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateHowIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateHowIs } as MsgUpdateHowIs;
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
          message.documentJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateHowIs {
    const message = { ...baseMsgUpdateHowIs } as MsgUpdateHowIs;
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
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = String(object.documentJson);
    } else {
      message.documentJson = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateHowIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.did !== undefined && (obj.did = message.did);
    message.documentJson !== undefined &&
      (obj.documentJson = message.documentJson);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateHowIs>): MsgUpdateHowIs {
    const message = { ...baseMsgUpdateHowIs } as MsgUpdateHowIs;
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
    if (object.documentJson !== undefined && object.documentJson !== null) {
      message.documentJson = object.documentJson;
    } else {
      message.documentJson = "";
    }
    return message;
  },
};

const baseMsgUpdateHowIsResponse: object = {};

export const MsgUpdateHowIsResponse = {
  encode(_: MsgUpdateHowIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateHowIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateHowIsResponse } as MsgUpdateHowIsResponse;
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

  fromJSON(_: any): MsgUpdateHowIsResponse {
    const message = { ...baseMsgUpdateHowIsResponse } as MsgUpdateHowIsResponse;
    return message;
  },

  toJSON(_: MsgUpdateHowIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateHowIsResponse>): MsgUpdateHowIsResponse {
    const message = { ...baseMsgUpdateHowIsResponse } as MsgUpdateHowIsResponse;
    return message;
  },
};

const baseMsgDeleteHowIs: object = { creator: "", index: "" };

export const MsgDeleteHowIs = {
  encode(message: MsgDeleteHowIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteHowIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteHowIs } as MsgDeleteHowIs;
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

  fromJSON(object: any): MsgDeleteHowIs {
    const message = { ...baseMsgDeleteHowIs } as MsgDeleteHowIs;
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

  toJSON(message: MsgDeleteHowIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteHowIs>): MsgDeleteHowIs {
    const message = { ...baseMsgDeleteHowIs } as MsgDeleteHowIs;
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

const baseMsgDeleteHowIsResponse: object = {};

export const MsgDeleteHowIsResponse = {
  encode(_: MsgDeleteHowIsResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteHowIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteHowIsResponse } as MsgDeleteHowIsResponse;
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

  fromJSON(_: any): MsgDeleteHowIsResponse {
    const message = { ...baseMsgDeleteHowIsResponse } as MsgDeleteHowIsResponse;
    return message;
  },

  toJSON(_: MsgDeleteHowIsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteHowIsResponse>): MsgDeleteHowIsResponse {
    const message = { ...baseMsgDeleteHowIsResponse } as MsgDeleteHowIsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateChannel(request: MsgCreateChannel): Promise<MsgCreateChannelResponse>;
  ReadChannel(request: MsgReadChannel): Promise<MsgReadChannelResponse>;
  DeleteChannel(request: MsgDeleteChannel): Promise<MsgDeleteChannelResponse>;
  UpdateChannel(request: MsgUpdateChannel): Promise<MsgUpdateChannelResponse>;
  CreateHowIs(request: MsgCreateHowIs): Promise<MsgCreateHowIsResponse>;
  UpdateHowIs(request: MsgUpdateHowIs): Promise<MsgUpdateHowIsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteHowIs(request: MsgDeleteHowIs): Promise<MsgDeleteHowIsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateChannel(request: MsgCreateChannel): Promise<MsgCreateChannelResponse> {
    const data = MsgCreateChannel.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "CreateChannel",
      data
    );
    return promise.then((data) =>
      MsgCreateChannelResponse.decode(new Reader(data))
    );
  }

  ReadChannel(request: MsgReadChannel): Promise<MsgReadChannelResponse> {
    const data = MsgReadChannel.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "ReadChannel",
      data
    );
    return promise.then((data) =>
      MsgReadChannelResponse.decode(new Reader(data))
    );
  }

  DeleteChannel(request: MsgDeleteChannel): Promise<MsgDeleteChannelResponse> {
    const data = MsgDeleteChannel.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "DeleteChannel",
      data
    );
    return promise.then((data) =>
      MsgDeleteChannelResponse.decode(new Reader(data))
    );
  }

  UpdateChannel(request: MsgUpdateChannel): Promise<MsgUpdateChannelResponse> {
    const data = MsgUpdateChannel.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "UpdateChannel",
      data
    );
    return promise.then((data) =>
      MsgUpdateChannelResponse.decode(new Reader(data))
    );
  }

  CreateHowIs(request: MsgCreateHowIs): Promise<MsgCreateHowIsResponse> {
    const data = MsgCreateHowIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "CreateHowIs",
      data
    );
    return promise.then((data) =>
      MsgCreateHowIsResponse.decode(new Reader(data))
    );
  }

  UpdateHowIs(request: MsgUpdateHowIs): Promise<MsgUpdateHowIsResponse> {
    const data = MsgUpdateHowIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "UpdateHowIs",
      data
    );
    return promise.then((data) =>
      MsgUpdateHowIsResponse.decode(new Reader(data))
    );
  }

  DeleteHowIs(request: MsgDeleteHowIs): Promise<MsgDeleteHowIsResponse> {
    const data = MsgDeleteHowIs.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Msg",
      "DeleteHowIs",
      data
    );
    return promise.then((data) =>
      MsgDeleteHowIsResponse.decode(new Reader(data))
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
