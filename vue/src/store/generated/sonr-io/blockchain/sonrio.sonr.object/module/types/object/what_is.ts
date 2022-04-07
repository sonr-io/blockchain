/* eslint-disable */
import { ObjectDoc } from "../object/object";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.object";

export interface WhatIs {
  /** DID is the DID of the object */
  did: string;
  object_doc: ObjectDoc | undefined;
  creator: string;
}

const baseWhatIs: object = { did: "", creator: "" };

export const WhatIs = {
  encode(message: WhatIs, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    if (message.object_doc !== undefined) {
      ObjectDoc.encode(message.object_doc, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WhatIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhatIs } as WhatIs;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        case 2:
          message.object_doc = ObjectDoc.decode(reader, reader.uint32());
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhatIs {
    const message = { ...baseWhatIs } as WhatIs;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.object_doc !== undefined && object.object_doc !== null) {
      message.object_doc = ObjectDoc.fromJSON(object.object_doc);
    } else {
      message.object_doc = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: WhatIs): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.object_doc !== undefined &&
      (obj.object_doc = message.object_doc
        ? ObjectDoc.toJSON(message.object_doc)
        : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<WhatIs>): WhatIs {
    const message = { ...baseWhatIs } as WhatIs;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.object_doc !== undefined && object.object_doc !== null) {
      message.object_doc = ObjectDoc.fromPartial(object.object_doc);
    } else {
      message.object_doc = undefined;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
