/* eslint-disable */
import { ChannelDoc } from "../channel/channel";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.channel";

export interface HowIs {
  did: string;
  /** Document is the DID Document of the registered name and account encoded as JSON */
  creator: string;
  channel: ChannelDoc | undefined;
}

const baseHowIs: object = { did: "", creator: "" };

export const HowIs = {
  encode(message: HowIs, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.channel !== undefined) {
      ChannelDoc.encode(message.channel, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): HowIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHowIs } as HowIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.creator = reader.string();
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

  fromJSON(object: any): HowIs {
    const message = { ...baseHowIs } as HowIs;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelDoc.fromJSON(object.channel);
    } else {
      message.channel = undefined;
    }
    return message;
  },

  toJSON(message: HowIs): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.creator !== undefined && (obj.creator = message.creator);
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? ChannelDoc.toJSON(message.channel)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<HowIs>): HowIs {
    const message = { ...baseHowIs } as HowIs;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = ChannelDoc.fromPartial(object.channel);
    } else {
      message.channel = undefined;
    }
    return message;
  },
};

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
