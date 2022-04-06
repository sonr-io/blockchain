/* eslint-disable */
import { Credential } from "../registry/credential";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.registry";

/** WhoIs is the entry pointing a registered name to a user account address, Did Url string, and a DIDDocument. */
export interface WhoIs {
  /** Name is the registered name of the User or Application */
  name: string;
  /** DID is the DID of the account */
  did: string;
  /** Document is the DID Document of the registered name and account encoded as JSON */
  document: Uint8Array;
  /** Creator is the DID of the creator of the DID Document */
  creator: string;
  /** Credentials are the biometric info of the registered name and account encoded with public key */
  credentials: Credential[];
  /** Type is the type of the registered name */
  type: WhoIs_Type;
}

/** Type is the type of the registered name */
export enum WhoIs_Type {
  /** User - User is the type of the registered name */
  User = 0,
  /** Application - Application is the type of the registered name */
  Application = 1,
  UNRECOGNIZED = -1,
}

export function whoIs_TypeFromJSON(object: any): WhoIs_Type {
  switch (object) {
    case 0:
    case "User":
      return WhoIs_Type.User;
    case 1:
    case "Application":
      return WhoIs_Type.Application;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WhoIs_Type.UNRECOGNIZED;
  }
}

export function whoIs_TypeToJSON(object: WhoIs_Type): string {
  switch (object) {
    case WhoIs_Type.User:
      return "User";
    case WhoIs_Type.Application:
      return "Application";
    default:
      return "UNKNOWN";
  }
}

const baseWhoIs: object = { name: "", did: "", creator: "", type: 0 };

export const WhoIs = {
  encode(message: WhoIs, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.document.length !== 0) {
      writer.uint32(26).bytes(message.document);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    for (const v of message.credentials) {
      Credential.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(48).int32(message.type);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WhoIs {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWhoIs } as WhoIs;
    message.credentials = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.did = reader.string();
          break;
        case 3:
          message.document = reader.bytes();
          break;
        case 4:
          message.creator = reader.string();
          break;
        case 5:
          message.credentials.push(Credential.decode(reader, reader.uint32()));
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WhoIs {
    const message = { ...baseWhoIs } as WhoIs;
    message.credentials = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.document !== undefined && object.document !== null) {
      message.document = bytesFromBase64(object.document);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(Credential.fromJSON(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = whoIs_TypeFromJSON(object.type);
    } else {
      message.type = 0;
    }
    return message;
  },

  toJSON(message: WhoIs): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.did !== undefined && (obj.did = message.did);
    message.document !== undefined &&
      (obj.document = base64FromBytes(
        message.document !== undefined ? message.document : new Uint8Array()
      ));
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.credentials) {
      obj.credentials = message.credentials.map((e) =>
        e ? Credential.toJSON(e) : undefined
      );
    } else {
      obj.credentials = [];
    }
    message.type !== undefined && (obj.type = whoIs_TypeToJSON(message.type));
    return obj;
  },

  fromPartial(object: DeepPartial<WhoIs>): WhoIs {
    const message = { ...baseWhoIs } as WhoIs;
    message.credentials = [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      for (const e of object.credentials) {
        message.credentials.push(Credential.fromPartial(e));
      }
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    } else {
      message.type = 0;
    }
    return message;
  },
};

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
