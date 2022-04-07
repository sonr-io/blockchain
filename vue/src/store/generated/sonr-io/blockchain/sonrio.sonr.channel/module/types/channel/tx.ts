/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ObjectDoc } from "../object/object";
import { Session } from "../registry/who_is";
import { HowIs } from "../channel/how_is";
import { ChannelDoc } from "../channel/channel";

export const protobufPackage = "sonrio.sonr.channel";

export interface MsgCreateChannel {
  creator: string;
  label: string;
  description: string;
  object_to_register: ObjectDoc | undefined;
  session: Session | undefined;
}

export interface MsgCreateChannelResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** HowIs of the Channel */
  how_is: HowIs | undefined;
}

export interface MsgReadChannel {
  creator: string;
  did: string;
  session: Session | undefined;
}

export interface MsgReadChannelResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** HowIs of the Channel */
  how_is: HowIs | undefined;
}

export interface MsgDeleteChannel {
  creator: string;
  did: string;
  session: Session | undefined;
}

export interface MsgDeleteChannelResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
}

export interface MsgUpdateChannel {
  creator: string;
  did: string;
}

export interface MsgUpdateChannelResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
}

export interface MsgCreateHowIs {
  creator: string;
  did: string;
  channel: ChannelDoc | undefined;
}

export interface MsgCreateHowIsResponse {}

export interface MsgUpdateHowIs {
  creator: string;
  did: string;
  channel: ChannelDoc | undefined;
}

export interface MsgUpdateHowIsResponse {}

export interface MsgDeleteHowIs {
  creator: string;
  did: string;
}

export interface MsgDeleteHowIsResponse {}

const baseMsgCreateChannel: object = {
  creator: "",
  label: "",
  description: "",
};

export const MsgCreateChannel = {
  encode(message: MsgCreateChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.object_to_register !== undefined) {
      ObjectDoc.encode(
        message.object_to_register,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(42).fork()).ldelim();
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
          message.label = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.object_to_register = ObjectDoc.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.session = Session.decode(reader, reader.uint32());
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
    if (
      object.object_to_register !== undefined &&
      object.object_to_register !== null
    ) {
      message.object_to_register = ObjectDoc.fromJSON(
        object.object_to_register
      );
    } else {
      message.object_to_register = undefined;
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.description !== undefined &&
      (obj.description = message.description);
    message.object_to_register !== undefined &&
      (obj.object_to_register = message.object_to_register
        ? ObjectDoc.toJSON(message.object_to_register)
        : undefined);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateChannel>): MsgCreateChannel {
    const message = { ...baseMsgCreateChannel } as MsgCreateChannel;
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
    if (
      object.object_to_register !== undefined &&
      object.object_to_register !== null
    ) {
      message.object_to_register = ObjectDoc.fromPartial(
        object.object_to_register
      );
    } else {
      message.object_to_register = undefined;
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },
};

const baseMsgCreateChannelResponse: object = { code: 0, message: "" };

export const MsgCreateChannelResponse = {
  encode(
    message: MsgCreateChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.how_is !== undefined) {
      HowIs.encode(message.how_is, writer.uint32(26).fork()).ldelim();
    }
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
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.how_is = HowIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChannelResponse {
    const message = {
      ...baseMsgCreateChannelResponse,
    } as MsgCreateChannelResponse;
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
    if (object.how_is !== undefined && object.how_is !== null) {
      message.how_is = HowIs.fromJSON(object.how_is);
    } else {
      message.how_is = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateChannelResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.how_is !== undefined &&
      (obj.how_is = message.how_is ? HowIs.toJSON(message.how_is) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateChannelResponse>
  ): MsgCreateChannelResponse {
    const message = {
      ...baseMsgCreateChannelResponse,
    } as MsgCreateChannelResponse;
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
    if (object.how_is !== undefined && object.how_is !== null) {
      message.how_is = HowIs.fromPartial(object.how_is);
    } else {
      message.how_is = undefined;
    }
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
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.session = Session.decode(reader, reader.uint32());
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
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },

  toJSON(message: MsgReadChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
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
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },
};

const baseMsgReadChannelResponse: object = { code: 0, message: "" };

export const MsgReadChannelResponse = {
  encode(
    message: MsgReadChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.how_is !== undefined) {
      HowIs.encode(message.how_is, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReadChannelResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReadChannelResponse } as MsgReadChannelResponse;
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
          message.how_is = HowIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReadChannelResponse {
    const message = { ...baseMsgReadChannelResponse } as MsgReadChannelResponse;
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
    if (object.how_is !== undefined && object.how_is !== null) {
      message.how_is = HowIs.fromJSON(object.how_is);
    } else {
      message.how_is = undefined;
    }
    return message;
  },

  toJSON(message: MsgReadChannelResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.how_is !== undefined &&
      (obj.how_is = message.how_is ? HowIs.toJSON(message.how_is) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReadChannelResponse>
  ): MsgReadChannelResponse {
    const message = { ...baseMsgReadChannelResponse } as MsgReadChannelResponse;
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
    if (object.how_is !== undefined && object.how_is !== null) {
      message.how_is = HowIs.fromPartial(object.how_is);
    } else {
      message.how_is = undefined;
    }
    return message;
  },
};

const baseMsgDeleteChannel: object = { creator: "", did: "" };

export const MsgDeleteChannel = {
  encode(message: MsgDeleteChannel, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(26).fork()).ldelim();
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
          message.session = Session.decode(reader, reader.uint32());
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
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },

  toJSON(message: MsgDeleteChannel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
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
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },
};

const baseMsgDeleteChannelResponse: object = { code: 0, message: "" };

export const MsgDeleteChannelResponse = {
  encode(
    message: MsgDeleteChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
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
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteChannelResponse {
    const message = {
      ...baseMsgDeleteChannelResponse,
    } as MsgDeleteChannelResponse;
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
    return message;
  },

  toJSON(message: MsgDeleteChannelResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteChannelResponse>
  ): MsgDeleteChannelResponse {
    const message = {
      ...baseMsgDeleteChannelResponse,
    } as MsgDeleteChannelResponse;
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

const baseMsgUpdateChannelResponse: object = { code: 0, message: "" };

export const MsgUpdateChannelResponse = {
  encode(
    message: MsgUpdateChannelResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
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
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateChannelResponse {
    const message = {
      ...baseMsgUpdateChannelResponse,
    } as MsgUpdateChannelResponse;
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
    return message;
  },

  toJSON(message: MsgUpdateChannelResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateChannelResponse>
  ): MsgUpdateChannelResponse {
    const message = {
      ...baseMsgUpdateChannelResponse,
    } as MsgUpdateChannelResponse;
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
    return message;
  },
};

const baseMsgCreateHowIs: object = { creator: "", did: "" };

export const MsgCreateHowIs = {
  encode(message: MsgCreateHowIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.channel !== undefined) {
      ChannelDoc.encode(message.channel, writer.uint32(34).fork()).ldelim();
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
          message.did = reader.string();
          break;
        case 4:
          message.channel = ChannelDoc.decode(reader, reader.uint32());
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
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelDoc.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateHowIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelDoc.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateHowIs>): MsgCreateHowIs {
    const message = { ...baseMsgCreateHowIs } as MsgCreateHowIs;
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelDoc.fromPartial(object.channel);
    } else {
      message.channel = undefined;
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

const baseMsgUpdateHowIs: object = { creator: "", did: "" };

export const MsgUpdateHowIs = {
  encode(message: MsgUpdateHowIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.channel !== undefined) {
      ChannelDoc.encode(message.channel, writer.uint32(34).fork()).ldelim();
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
          message.did = reader.string();
          break;
        case 4:
          message.channel = ChannelDoc.decode(reader, reader.uint32());
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
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelDoc.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateHowIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelDoc.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateHowIs>): MsgUpdateHowIs {
    const message = { ...baseMsgUpdateHowIs } as MsgUpdateHowIs;
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
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelDoc.fromPartial(object.channel);
    } else {
      message.channel = undefined;
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

const baseMsgDeleteHowIs: object = { creator: "", did: "" };

export const MsgDeleteHowIs = {
  encode(message: MsgDeleteHowIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
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
          message.did = reader.string();
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
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteHowIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteHowIs>): MsgDeleteHowIs {
    const message = { ...baseMsgDeleteHowIs } as MsgDeleteHowIs;
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
