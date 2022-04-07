/* eslint-disable */
import { BucketDoc } from "../bucket/bucket";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.bucket";

export interface WhichIs {
  did: string;
  /** Document is the DID Document of the registered name and account encoded as JSON */
  creator: string;
  bucket: BucketDoc | undefined;
}

const baseWhichIs: object = { did: "", creator: "" };

export const WhichIs = {
  encode(message: WhichIs, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.bucket !== undefined) {
      BucketDoc.encode(message.bucket, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WhichIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhichIs } as WhichIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.bucket = BucketDoc.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhichIs {
    const message = { ...baseWhichIs } as WhichIs;
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
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = BucketDoc.fromJSON(object.bucket);
    } else {
      message.bucket = undefined;
    }
    return message;
  },

  toJSON(message: WhichIs): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.creator !== undefined && (obj.creator = message.creator);
    message.bucket !== undefined &&
      (obj.bucket = message.bucket
        ? BucketDoc.toJSON(message.bucket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WhichIs>): WhichIs {
    const message = { ...baseWhichIs } as WhichIs;
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
    if (object.bucket !== undefined && object.bucket !== null) {
      message.bucket = BucketDoc.fromPartial(object.bucket);
    } else {
      message.bucket = undefined;
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
