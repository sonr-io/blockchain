/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.object";

export enum TypeKind {
  TypeKind_Invalid = 0,
  TypeKind_Map = 1,
  TypeKind_List = 2,
  TypeKind_Unit = 3,
  TypeKind_Bool = 4,
  TypeKind_Int = 5,
  TypeKind_Float = 6,
  TypeKind_String = 7,
  TypeKind_Bytes = 8,
  TypeKind_Link = 9,
  TypeKind_Struct = 10,
  TypeKind_Union = 11,
  TypeKind_Enum = 12,
  TypeKind_Any = 13,
  UNRECOGNIZED = -1,
}

export function typeKindFromJSON(object: any): TypeKind {
  switch (object) {
    case 0:
    case "TypeKind_Invalid":
      return TypeKind.TypeKind_Invalid;
    case 1:
    case "TypeKind_Map":
      return TypeKind.TypeKind_Map;
    case 2:
    case "TypeKind_List":
      return TypeKind.TypeKind_List;
    case 3:
    case "TypeKind_Unit":
      return TypeKind.TypeKind_Unit;
    case 4:
    case "TypeKind_Bool":
      return TypeKind.TypeKind_Bool;
    case 5:
    case "TypeKind_Int":
      return TypeKind.TypeKind_Int;
    case 6:
    case "TypeKind_Float":
      return TypeKind.TypeKind_Float;
    case 7:
    case "TypeKind_String":
      return TypeKind.TypeKind_String;
    case 8:
    case "TypeKind_Bytes":
      return TypeKind.TypeKind_Bytes;
    case 9:
    case "TypeKind_Link":
      return TypeKind.TypeKind_Link;
    case 10:
    case "TypeKind_Struct":
      return TypeKind.TypeKind_Struct;
    case 11:
    case "TypeKind_Union":
      return TypeKind.TypeKind_Union;
    case 12:
    case "TypeKind_Enum":
      return TypeKind.TypeKind_Enum;
    case 13:
    case "TypeKind_Any":
      return TypeKind.TypeKind_Any;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TypeKind.UNRECOGNIZED;
  }
}

export function typeKindToJSON(object: TypeKind): string {
  switch (object) {
    case TypeKind.TypeKind_Invalid:
      return "TypeKind_Invalid";
    case TypeKind.TypeKind_Map:
      return "TypeKind_Map";
    case TypeKind.TypeKind_List:
      return "TypeKind_List";
    case TypeKind.TypeKind_Unit:
      return "TypeKind_Unit";
    case TypeKind.TypeKind_Bool:
      return "TypeKind_Bool";
    case TypeKind.TypeKind_Int:
      return "TypeKind_Int";
    case TypeKind.TypeKind_Float:
      return "TypeKind_Float";
    case TypeKind.TypeKind_String:
      return "TypeKind_String";
    case TypeKind.TypeKind_Bytes:
      return "TypeKind_Bytes";
    case TypeKind.TypeKind_Link:
      return "TypeKind_Link";
    case TypeKind.TypeKind_Struct:
      return "TypeKind_Struct";
    case TypeKind.TypeKind_Union:
      return "TypeKind_Union";
    case TypeKind.TypeKind_Enum:
      return "TypeKind_Enum";
    case TypeKind.TypeKind_Any:
      return "TypeKind_Any";
    default:
      return "UNKNOWN";
  }
}

/** ObjectDoc is a document for an Object stored in the graph. */
export interface ObjectDoc {
  /** Label is human-readable name of the bucket. */
  label: string;
  /** Description is a human-readable description of the bucket. */
  description: string;
  /** Did is the identifier of the object. */
  did: string;
  /** Bucket is the did of the bucket that contains this object. */
  bucket_did: string;
  /** Fields are the fields associated with the object. */
  fields: { [key: string]: ObjectValue };
}

export interface ObjectDoc_FieldsEntry {
  key: string;
  value: ObjectValue | undefined;
}

export interface TypeField {
  /** Name is the name of the field. */
  name: string;
  /** Type is the type of the field. */
  kind: TypeKind;
}

export interface ObjectValue {
  /** maps and list cannot be stored in oneof */
  map_value: { [key: string]: ObjectValue };
  list_value: ObjectValue[];
  bool_value: boolean | undefined;
  int_value: number | undefined;
  float_value: number | undefined;
  string_value: string | undefined;
  bytes_value: Uint8Array | undefined;
  /** TODO: implement more */
  link_value: string | undefined;
}

export interface ObjectValue_MapValueEntry {
  key: string;
  value: ObjectValue | undefined;
}

const baseObjectDoc: object = {
  label: "",
  description: "",
  did: "",
  bucket_did: "",
};

export const ObjectDoc = {
  encode(message: ObjectDoc, writer: Writer = Writer.create()): Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.did !== "") {
      writer.uint32(26).string(message.did);
    }
    if (message.bucket_did !== "") {
      writer.uint32(34).string(message.bucket_did);
    }
    Object.entries(message.fields).forEach(([key, value]) => {
      ObjectDoc_FieldsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectDoc {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectDoc } as ObjectDoc;
    message.fields = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.label = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.did = reader.string();
          break;
        case 4:
          message.bucket_did = reader.string();
          break;
        case 5:
          const entry5 = ObjectDoc_FieldsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.fields[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectDoc {
    const message = { ...baseObjectDoc } as ObjectDoc;
    message.fields = {};
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
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    if (object.bucket_did !== undefined && object.bucket_did !== null) {
      message.bucket_did = String(object.bucket_did);
    } else {
      message.bucket_did = "";
    }
    if (object.fields !== undefined && object.fields !== null) {
      Object.entries(object.fields).forEach(([key, value]) => {
        message.fields[key] = ObjectValue.fromJSON(value);
      });
    }
    return message;
  },

  toJSON(message: ObjectDoc): unknown {
    const obj: any = {};
    message.label !== undefined && (obj.label = message.label);
    message.description !== undefined &&
      (obj.description = message.description);
    message.did !== undefined && (obj.did = message.did);
    message.bucket_did !== undefined && (obj.bucket_did = message.bucket_did);
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = ObjectValue.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ObjectDoc>): ObjectDoc {
    const message = { ...baseObjectDoc } as ObjectDoc;
    message.fields = {};
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
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    if (object.bucket_did !== undefined && object.bucket_did !== null) {
      message.bucket_did = object.bucket_did;
    } else {
      message.bucket_did = "";
    }
    if (object.fields !== undefined && object.fields !== null) {
      Object.entries(object.fields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.fields[key] = ObjectValue.fromPartial(value);
        }
      });
    }
    return message;
  },
};

const baseObjectDoc_FieldsEntry: object = { key: "" };

export const ObjectDoc_FieldsEntry = {
  encode(
    message: ObjectDoc_FieldsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ObjectValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectDoc_FieldsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectDoc_FieldsEntry } as ObjectDoc_FieldsEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ObjectValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectDoc_FieldsEntry {
    const message = { ...baseObjectDoc_FieldsEntry } as ObjectDoc_FieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ObjectValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: ObjectDoc_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ObjectValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ObjectDoc_FieldsEntry>
  ): ObjectDoc_FieldsEntry {
    const message = { ...baseObjectDoc_FieldsEntry } as ObjectDoc_FieldsEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ObjectValue.fromPartial(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },
};

const baseTypeField: object = { name: "", kind: 0 };

export const TypeField = {
  encode(message: TypeField, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TypeField {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTypeField } as TypeField;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.kind = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TypeField {
    const message = { ...baseTypeField } as TypeField;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = typeKindFromJSON(object.kind);
    } else {
      message.kind = 0;
    }
    return message;
  },

  toJSON(message: TypeField): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.kind !== undefined && (obj.kind = typeKindToJSON(message.kind));
    return obj;
  },

  fromPartial(object: DeepPartial<TypeField>): TypeField {
    const message = { ...baseTypeField } as TypeField;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    } else {
      message.kind = 0;
    }
    return message;
  },
};

const baseObjectValue: object = {};

export const ObjectValue = {
  encode(message: ObjectValue, writer: Writer = Writer.create()): Writer {
    Object.entries(message.map_value).forEach(([key, value]) => {
      ObjectValue_MapValueEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    for (const v of message.list_value) {
      ObjectValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.bool_value !== undefined) {
      writer.uint32(24).bool(message.bool_value);
    }
    if (message.int_value !== undefined) {
      writer.uint32(32).int64(message.int_value);
    }
    if (message.float_value !== undefined) {
      writer.uint32(45).float(message.float_value);
    }
    if (message.string_value !== undefined) {
      writer.uint32(50).string(message.string_value);
    }
    if (message.bytes_value !== undefined) {
      writer.uint32(58).bytes(message.bytes_value);
    }
    if (message.link_value !== undefined) {
      writer.uint32(66).string(message.link_value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ObjectValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseObjectValue } as ObjectValue;
    message.map_value = {};
    message.list_value = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ObjectValue_MapValueEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.map_value[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.list_value.push(ObjectValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bool_value = reader.bool();
          break;
        case 4:
          message.int_value = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.float_value = reader.float();
          break;
        case 6:
          message.string_value = reader.string();
          break;
        case 7:
          message.bytes_value = reader.bytes();
          break;
        case 8:
          message.link_value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectValue {
    const message = { ...baseObjectValue } as ObjectValue;
    message.map_value = {};
    message.list_value = [];
    if (object.map_value !== undefined && object.map_value !== null) {
      Object.entries(object.map_value).forEach(([key, value]) => {
        message.map_value[key] = ObjectValue.fromJSON(value);
      });
    }
    if (object.list_value !== undefined && object.list_value !== null) {
      for (const e of object.list_value) {
        message.list_value.push(ObjectValue.fromJSON(e));
      }
    }
    if (object.bool_value !== undefined && object.bool_value !== null) {
      message.bool_value = Boolean(object.bool_value);
    } else {
      message.bool_value = undefined;
    }
    if (object.int_value !== undefined && object.int_value !== null) {
      message.int_value = Number(object.int_value);
    } else {
      message.int_value = undefined;
    }
    if (object.float_value !== undefined && object.float_value !== null) {
      message.float_value = Number(object.float_value);
    } else {
      message.float_value = undefined;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.string_value = String(object.string_value);
    } else {
      message.string_value = undefined;
    }
    if (object.bytes_value !== undefined && object.bytes_value !== null) {
      message.bytes_value = bytesFromBase64(object.bytes_value);
    }
    if (object.link_value !== undefined && object.link_value !== null) {
      message.link_value = String(object.link_value);
    } else {
      message.link_value = undefined;
    }
    return message;
  },

  toJSON(message: ObjectValue): unknown {
    const obj: any = {};
    obj.map_value = {};
    if (message.map_value) {
      Object.entries(message.map_value).forEach(([k, v]) => {
        obj.map_value[k] = ObjectValue.toJSON(v);
      });
    }
    if (message.list_value) {
      obj.list_value = message.list_value.map((e) =>
        e ? ObjectValue.toJSON(e) : undefined
      );
    } else {
      obj.list_value = [];
    }
    message.bool_value !== undefined && (obj.bool_value = message.bool_value);
    message.int_value !== undefined && (obj.int_value = message.int_value);
    message.float_value !== undefined &&
      (obj.float_value = message.float_value);
    message.string_value !== undefined &&
      (obj.string_value = message.string_value);
    message.bytes_value !== undefined &&
      (obj.bytes_value =
        message.bytes_value !== undefined
          ? base64FromBytes(message.bytes_value)
          : undefined);
    message.link_value !== undefined && (obj.link_value = message.link_value);
    return obj;
  },

  fromPartial(object: DeepPartial<ObjectValue>): ObjectValue {
    const message = { ...baseObjectValue } as ObjectValue;
    message.map_value = {};
    message.list_value = [];
    if (object.map_value !== undefined && object.map_value !== null) {
      Object.entries(object.map_value).forEach(([key, value]) => {
        if (value !== undefined) {
          message.map_value[key] = ObjectValue.fromPartial(value);
        }
      });
    }
    if (object.list_value !== undefined && object.list_value !== null) {
      for (const e of object.list_value) {
        message.list_value.push(ObjectValue.fromPartial(e));
      }
    }
    if (object.bool_value !== undefined && object.bool_value !== null) {
      message.bool_value = object.bool_value;
    } else {
      message.bool_value = undefined;
    }
    if (object.int_value !== undefined && object.int_value !== null) {
      message.int_value = object.int_value;
    } else {
      message.int_value = undefined;
    }
    if (object.float_value !== undefined && object.float_value !== null) {
      message.float_value = object.float_value;
    } else {
      message.float_value = undefined;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.string_value = object.string_value;
    } else {
      message.string_value = undefined;
    }
    if (object.bytes_value !== undefined && object.bytes_value !== null) {
      message.bytes_value = object.bytes_value;
    } else {
      message.bytes_value = undefined;
    }
    if (object.link_value !== undefined && object.link_value !== null) {
      message.link_value = object.link_value;
    } else {
      message.link_value = undefined;
    }
    return message;
  },
};

const baseObjectValue_MapValueEntry: object = { key: "" };

export const ObjectValue_MapValueEntry = {
  encode(
    message: ObjectValue_MapValueEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ObjectValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ObjectValue_MapValueEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseObjectValue_MapValueEntry,
    } as ObjectValue_MapValueEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ObjectValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObjectValue_MapValueEntry {
    const message = {
      ...baseObjectValue_MapValueEntry,
    } as ObjectValue_MapValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ObjectValue.fromJSON(object.value);
    } else {
      message.value = undefined;
    }
    return message;
  },

  toJSON(message: ObjectValue_MapValueEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ObjectValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ObjectValue_MapValueEntry>
  ): ObjectValue_MapValueEntry {
    const message = {
      ...baseObjectValue_MapValueEntry,
    } as ObjectValue_MapValueEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ObjectValue.fromPartial(object.value);
    } else {
      message.value = undefined;
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
