/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { ObjectValue, ObjectDoc } from "../object/object";
import { Session } from "../registry/who_is";
import { WhatIs } from "../object/what_is";

export const protobufPackage = "sonrio.sonr.object";

export interface MsgCreateObject {
  creator: string;
  label: string;
  description: string;
  /** initial object value, where keys are the TypeField names */
  initial_fields: { [key: string]: ObjectValue };
  session: Session | undefined;
}

export interface MsgCreateObject_InitialFieldsEntry {
  key: string;
  value: ObjectValue | undefined;
}

export interface MsgCreateObjectResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** WhatIs of the Channel */
  what_is: WhatIs | undefined;
}

export interface MsgQueryObject {
  did: string;
}

export interface MsgQueryObjectResponse {
  code: number;
  message: string;
  what_is: WhatIs | undefined;
}

export interface MsgUpdateObject {
  creator: string;
  /** Label of the Object */
  label: string;
  /** Authenticated session data */
  session: Session | undefined;
  /** Added fields to the object, where keys are the TypeField names */
  added_fields: { [key: string]: ObjectValue };
  /** Removed fields from the object, where keys are the TypeField names */
  removed_fields: { [key: string]: ObjectValue };
  /** Contend Identifier of the object */
  cid: string;
}

export interface MsgUpdateObject_AddedFieldsEntry {
  key: string;
  value: ObjectValue | undefined;
}

export interface MsgUpdateObject_RemovedFieldsEntry {
  key: string;
  value: ObjectValue | undefined;
}

export interface MsgUpdateObjectResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
  /** WhatIs of the Channel */
  what_is: WhatIs | undefined;
}

export interface MsgDeactivateObject {
  creator: string;
  did: string;
  session: Session | undefined;
}

export interface MsgDeactivateObjectResponse {
  /** Code of the response */
  code: number;
  /** Message of the response */
  message: string;
}

export interface MsgCreateWhatIs {
  creator: string;
  did: string;
  object_doc: ObjectDoc | undefined;
}

export interface MsgCreateWhatIsResponse {
  did: string;
}

export interface MsgUpdateWhatIs {
  creator: string;
  did: string;
  object_doc: ObjectDoc | undefined;
}

export interface MsgUpdateWhatIsResponse {
  did: string;
}

export interface MsgDeleteWhatIs {
  creator: string;
  did: string;
}

export interface MsgDeleteWhatIsResponse {
  did: string;
}

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
    Object.entries(message.initial_fields).forEach(([key, value]) => {
      MsgCreateObject_InitialFieldsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateObject } as MsgCreateObject;
    message.initial_fields = {};
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
          const entry4 = MsgCreateObject_InitialFieldsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.initial_fields[entry4.key] = entry4.value;
          }
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

  fromJSON(object: any): MsgCreateObject {
    const message = { ...baseMsgCreateObject } as MsgCreateObject;
    message.initial_fields = {};
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
    if (object.initial_fields !== undefined && object.initial_fields !== null) {
      Object.entries(object.initial_fields).forEach(([key, value]) => {
        message.initial_fields[key] = ObjectValue.fromJSON(value);
      });
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.description !== undefined &&
      (obj.description = message.description);
    obj.initial_fields = {};
    if (message.initial_fields) {
      Object.entries(message.initial_fields).forEach(([k, v]) => {
        obj.initial_fields[k] = ObjectValue.toJSON(v);
      });
    }
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateObject>): MsgCreateObject {
    const message = { ...baseMsgCreateObject } as MsgCreateObject;
    message.initial_fields = {};
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
    if (object.initial_fields !== undefined && object.initial_fields !== null) {
      Object.entries(object.initial_fields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.initial_fields[key] = ObjectValue.fromPartial(value);
        }
      });
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },
};

const baseMsgCreateObject_InitialFieldsEntry: object = { key: "" };

export const MsgCreateObject_InitialFieldsEntry = {
  encode(
    message: MsgCreateObject_InitialFieldsEntry,
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
  ): MsgCreateObject_InitialFieldsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateObject_InitialFieldsEntry,
    } as MsgCreateObject_InitialFieldsEntry;
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

  fromJSON(object: any): MsgCreateObject_InitialFieldsEntry {
    const message = {
      ...baseMsgCreateObject_InitialFieldsEntry,
    } as MsgCreateObject_InitialFieldsEntry;
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

  toJSON(message: MsgCreateObject_InitialFieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ObjectValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateObject_InitialFieldsEntry>
  ): MsgCreateObject_InitialFieldsEntry {
    const message = {
      ...baseMsgCreateObject_InitialFieldsEntry,
    } as MsgCreateObject_InitialFieldsEntry;
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

const baseMsgCreateObjectResponse: object = { code: 0, message: "" };

export const MsgCreateObjectResponse = {
  encode(
    message: MsgCreateObjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.what_is !== undefined) {
      WhatIs.encode(message.what_is, writer.uint32(26).fork()).ldelim();
    }
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
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.what_is = WhatIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateObjectResponse {
    const message = {
      ...baseMsgCreateObjectResponse,
    } as MsgCreateObjectResponse;
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
    if (object.what_is !== undefined && object.what_is !== null) {
      message.what_is = WhatIs.fromJSON(object.what_is);
    } else {
      message.what_is = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateObjectResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.what_is !== undefined &&
      (obj.what_is = message.what_is
        ? WhatIs.toJSON(message.what_is)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateObjectResponse>
  ): MsgCreateObjectResponse {
    const message = {
      ...baseMsgCreateObjectResponse,
    } as MsgCreateObjectResponse;
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
    if (object.what_is !== undefined && object.what_is !== null) {
      message.what_is = WhatIs.fromPartial(object.what_is);
    } else {
      message.what_is = undefined;
    }
    return message;
  },
};

const baseMsgQueryObject: object = { did: "" };

export const MsgQueryObject = {
  encode(message: MsgQueryObject, writer: Writer = Writer.create()): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgQueryObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgQueryObject } as MsgQueryObject;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgQueryObject {
    const message = { ...baseMsgQueryObject } as MsgQueryObject;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgQueryObject): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgQueryObject>): MsgQueryObject {
    const message = { ...baseMsgQueryObject } as MsgQueryObject;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseMsgQueryObjectResponse: object = { code: 0, message: "" };

export const MsgQueryObjectResponse = {
  encode(
    message: MsgQueryObjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.what_is !== undefined) {
      WhatIs.encode(message.what_is, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgQueryObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgQueryObjectResponse } as MsgQueryObjectResponse;
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
          message.what_is = WhatIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgQueryObjectResponse {
    const message = { ...baseMsgQueryObjectResponse } as MsgQueryObjectResponse;
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
    if (object.what_is !== undefined && object.what_is !== null) {
      message.what_is = WhatIs.fromJSON(object.what_is);
    } else {
      message.what_is = undefined;
    }
    return message;
  },

  toJSON(message: MsgQueryObjectResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.what_is !== undefined &&
      (obj.what_is = message.what_is
        ? WhatIs.toJSON(message.what_is)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgQueryObjectResponse>
  ): MsgQueryObjectResponse {
    const message = { ...baseMsgQueryObjectResponse } as MsgQueryObjectResponse;
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
    if (object.what_is !== undefined && object.what_is !== null) {
      message.what_is = WhatIs.fromPartial(object.what_is);
    } else {
      message.what_is = undefined;
    }
    return message;
  },
};

const baseMsgUpdateObject: object = { creator: "", label: "", cid: "" };

export const MsgUpdateObject = {
  encode(message: MsgUpdateObject, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.label !== "") {
      writer.uint32(18).string(message.label);
    }
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.added_fields).forEach(([key, value]) => {
      MsgUpdateObject_AddedFieldsEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.removed_fields).forEach(([key, value]) => {
      MsgUpdateObject_RemovedFieldsEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    if (message.cid !== "") {
      writer.uint32(50).string(message.cid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateObject } as MsgUpdateObject;
    message.added_fields = {};
    message.removed_fields = {};
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
          message.session = Session.decode(reader, reader.uint32());
          break;
        case 4:
          const entry4 = MsgUpdateObject_AddedFieldsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.added_fields[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = MsgUpdateObject_RemovedFieldsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.removed_fields[entry5.key] = entry5.value;
          }
          break;
        case 6:
          message.cid = reader.string();
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
    message.added_fields = {};
    message.removed_fields = {};
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
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    if (object.added_fields !== undefined && object.added_fields !== null) {
      Object.entries(object.added_fields).forEach(([key, value]) => {
        message.added_fields[key] = ObjectValue.fromJSON(value);
      });
    }
    if (object.removed_fields !== undefined && object.removed_fields !== null) {
      Object.entries(object.removed_fields).forEach(([key, value]) => {
        message.removed_fields[key] = ObjectValue.fromJSON(value);
      });
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = String(object.cid);
    } else {
      message.cid = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.label !== undefined && (obj.label = message.label);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    obj.added_fields = {};
    if (message.added_fields) {
      Object.entries(message.added_fields).forEach(([k, v]) => {
        obj.added_fields[k] = ObjectValue.toJSON(v);
      });
    }
    obj.removed_fields = {};
    if (message.removed_fields) {
      Object.entries(message.removed_fields).forEach(([k, v]) => {
        obj.removed_fields[k] = ObjectValue.toJSON(v);
      });
    }
    message.cid !== undefined && (obj.cid = message.cid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateObject>): MsgUpdateObject {
    const message = { ...baseMsgUpdateObject } as MsgUpdateObject;
    message.added_fields = {};
    message.removed_fields = {};
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
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    if (object.added_fields !== undefined && object.added_fields !== null) {
      Object.entries(object.added_fields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.added_fields[key] = ObjectValue.fromPartial(value);
        }
      });
    }
    if (object.removed_fields !== undefined && object.removed_fields !== null) {
      Object.entries(object.removed_fields).forEach(([key, value]) => {
        if (value !== undefined) {
          message.removed_fields[key] = ObjectValue.fromPartial(value);
        }
      });
    }
    if (object.cid !== undefined && object.cid !== null) {
      message.cid = object.cid;
    } else {
      message.cid = "";
    }
    return message;
  },
};

const baseMsgUpdateObject_AddedFieldsEntry: object = { key: "" };

export const MsgUpdateObject_AddedFieldsEntry = {
  encode(
    message: MsgUpdateObject_AddedFieldsEntry,
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
  ): MsgUpdateObject_AddedFieldsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateObject_AddedFieldsEntry,
    } as MsgUpdateObject_AddedFieldsEntry;
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

  fromJSON(object: any): MsgUpdateObject_AddedFieldsEntry {
    const message = {
      ...baseMsgUpdateObject_AddedFieldsEntry,
    } as MsgUpdateObject_AddedFieldsEntry;
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

  toJSON(message: MsgUpdateObject_AddedFieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ObjectValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateObject_AddedFieldsEntry>
  ): MsgUpdateObject_AddedFieldsEntry {
    const message = {
      ...baseMsgUpdateObject_AddedFieldsEntry,
    } as MsgUpdateObject_AddedFieldsEntry;
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

const baseMsgUpdateObject_RemovedFieldsEntry: object = { key: "" };

export const MsgUpdateObject_RemovedFieldsEntry = {
  encode(
    message: MsgUpdateObject_RemovedFieldsEntry,
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
  ): MsgUpdateObject_RemovedFieldsEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateObject_RemovedFieldsEntry,
    } as MsgUpdateObject_RemovedFieldsEntry;
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

  fromJSON(object: any): MsgUpdateObject_RemovedFieldsEntry {
    const message = {
      ...baseMsgUpdateObject_RemovedFieldsEntry,
    } as MsgUpdateObject_RemovedFieldsEntry;
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

  toJSON(message: MsgUpdateObject_RemovedFieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ObjectValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateObject_RemovedFieldsEntry>
  ): MsgUpdateObject_RemovedFieldsEntry {
    const message = {
      ...baseMsgUpdateObject_RemovedFieldsEntry,
    } as MsgUpdateObject_RemovedFieldsEntry;
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

const baseMsgUpdateObjectResponse: object = { code: 0, message: "" };

export const MsgUpdateObjectResponse = {
  encode(
    message: MsgUpdateObjectResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.what_is !== undefined) {
      WhatIs.encode(message.what_is, writer.uint32(26).fork()).ldelim();
    }
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
        case 1:
          message.code = reader.int32();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.what_is = WhatIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateObjectResponse {
    const message = {
      ...baseMsgUpdateObjectResponse,
    } as MsgUpdateObjectResponse;
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
    if (object.what_is !== undefined && object.what_is !== null) {
      message.what_is = WhatIs.fromJSON(object.what_is);
    } else {
      message.what_is = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateObjectResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    message.what_is !== undefined &&
      (obj.what_is = message.what_is
        ? WhatIs.toJSON(message.what_is)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateObjectResponse>
  ): MsgUpdateObjectResponse {
    const message = {
      ...baseMsgUpdateObjectResponse,
    } as MsgUpdateObjectResponse;
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
    if (object.what_is !== undefined && object.what_is !== null) {
      message.what_is = WhatIs.fromPartial(object.what_is);
    } else {
      message.what_is = undefined;
    }
    return message;
  },
};

const baseMsgDeactivateObject: object = { creator: "", did: "" };

export const MsgDeactivateObject = {
  encode(
    message: MsgDeactivateObject,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeactivateObject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeactivateObject } as MsgDeactivateObject;
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

  fromJSON(object: any): MsgDeactivateObject {
    const message = { ...baseMsgDeactivateObject } as MsgDeactivateObject;
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

  toJSON(message: MsgDeactivateObject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeactivateObject>): MsgDeactivateObject {
    const message = { ...baseMsgDeactivateObject } as MsgDeactivateObject;
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

const baseMsgDeactivateObjectResponse: object = { code: 0, message: "" };

export const MsgDeactivateObjectResponse = {
  encode(
    message: MsgDeactivateObjectResponse,
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
  ): MsgDeactivateObjectResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeactivateObjectResponse,
    } as MsgDeactivateObjectResponse;
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

  fromJSON(object: any): MsgDeactivateObjectResponse {
    const message = {
      ...baseMsgDeactivateObjectResponse,
    } as MsgDeactivateObjectResponse;
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

  toJSON(message: MsgDeactivateObjectResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeactivateObjectResponse>
  ): MsgDeactivateObjectResponse {
    const message = {
      ...baseMsgDeactivateObjectResponse,
    } as MsgDeactivateObjectResponse;
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

const baseMsgCreateWhatIs: object = { creator: "", did: "" };

export const MsgCreateWhatIs = {
  encode(message: MsgCreateWhatIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.object_doc !== undefined) {
      ObjectDoc.encode(message.object_doc, writer.uint32(26).fork()).ldelim();
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
          message.did = reader.string();
          break;
        case 3:
          message.object_doc = ObjectDoc.decode(reader, reader.uint32());
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
    return message;
  },

  toJSON(message: MsgCreateWhatIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.object_doc !== undefined &&
      (obj.object_doc = message.object_doc
        ? ObjectDoc.toJSON(message.object_doc)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWhatIs>): MsgCreateWhatIs {
    const message = { ...baseMsgCreateWhatIs } as MsgCreateWhatIs;
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
    if (object.object_doc !== undefined && object.object_doc !== null) {
      message.object_doc = ObjectDoc.fromPartial(object.object_doc);
    } else {
      message.object_doc = undefined;
    }
    return message;
  },
};

const baseMsgCreateWhatIsResponse: object = { did: "" };

export const MsgCreateWhatIsResponse = {
  encode(
    message: MsgCreateWhatIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
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
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWhatIsResponse {
    const message = {
      ...baseMsgCreateWhatIsResponse,
    } as MsgCreateWhatIsResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWhatIsResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateWhatIsResponse>
  ): MsgCreateWhatIsResponse {
    const message = {
      ...baseMsgCreateWhatIsResponse,
    } as MsgCreateWhatIsResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseMsgUpdateWhatIs: object = { creator: "", did: "" };

export const MsgUpdateWhatIs = {
  encode(message: MsgUpdateWhatIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
    }
    if (message.object_doc !== undefined) {
      ObjectDoc.encode(message.object_doc, writer.uint32(26).fork()).ldelim();
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
          message.did = reader.string();
          break;
        case 3:
          message.object_doc = ObjectDoc.decode(reader, reader.uint32());
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
    return message;
  },

  toJSON(message: MsgUpdateWhatIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    message.object_doc !== undefined &&
      (obj.object_doc = message.object_doc
        ? ObjectDoc.toJSON(message.object_doc)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateWhatIs>): MsgUpdateWhatIs {
    const message = { ...baseMsgUpdateWhatIs } as MsgUpdateWhatIs;
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
    if (object.object_doc !== undefined && object.object_doc !== null) {
      message.object_doc = ObjectDoc.fromPartial(object.object_doc);
    } else {
      message.object_doc = undefined;
    }
    return message;
  },
};

const baseMsgUpdateWhatIsResponse: object = { did: "" };

export const MsgUpdateWhatIsResponse = {
  encode(
    message: MsgUpdateWhatIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
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
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateWhatIsResponse {
    const message = {
      ...baseMsgUpdateWhatIsResponse,
    } as MsgUpdateWhatIsResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateWhatIsResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateWhatIsResponse>
  ): MsgUpdateWhatIsResponse {
    const message = {
      ...baseMsgUpdateWhatIsResponse,
    } as MsgUpdateWhatIsResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

const baseMsgDeleteWhatIs: object = { creator: "", did: "" };

export const MsgDeleteWhatIs = {
  encode(message: MsgDeleteWhatIs, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.did !== "") {
      writer.uint32(18).string(message.did);
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
          message.did = reader.string();
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
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteWhatIs): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteWhatIs>): MsgDeleteWhatIs {
    const message = { ...baseMsgDeleteWhatIs } as MsgDeleteWhatIs;
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

const baseMsgDeleteWhatIsResponse: object = { did: "" };

export const MsgDeleteWhatIsResponse = {
  encode(
    message: MsgDeleteWhatIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }
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
        case 1:
          message.did = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteWhatIsResponse {
    const message = {
      ...baseMsgDeleteWhatIsResponse,
    } as MsgDeleteWhatIsResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = String(object.did);
    } else {
      message.did = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteWhatIsResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteWhatIsResponse>
  ): MsgDeleteWhatIsResponse {
    const message = {
      ...baseMsgDeleteWhatIsResponse,
    } as MsgDeleteWhatIsResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = object.did;
    } else {
      message.did = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * CreateObject
   *
   * CreateObject is the transaction that creates a new object.
   */
  CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
  /**
   * QueryObject
   *
   * QueryObject is the transaction that queries an object
   */
  QueryObject(request: MsgQueryObject): Promise<MsgQueryObjectResponse>;
  /**
   * UpdateObject
   *
   * UpdateObject is the transaction that updates an existing object.
   */
  UpdateObject(request: MsgUpdateObject): Promise<MsgUpdateObjectResponse>;
  /**
   * DeactivateObject
   *
   * DeactivateObject is the transaction that deactivates an existing object.
   */
  DeactivateObject(
    request: MsgDeactivateObject
  ): Promise<MsgDeactivateObjectResponse>;
  /**
   * CreateWhatIs
   *
   * CreateWhatIs is the method that creates a new what_is document in the Object module.
   */
  CreateWhatIs(request: MsgCreateWhatIs): Promise<MsgCreateWhatIsResponse>;
  /**
   * UpdateWhatIs
   *
   * UpdateWhatIs is the method that updates an existing what_is document in the Object module.
   */
  UpdateWhatIs(request: MsgUpdateWhatIs): Promise<MsgUpdateWhatIsResponse>;
  /**
   * DeleteWhatIs
   *
   * DeleteWhatIs is the method that deletes an existing what_is document in the Object module.
   */
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

  QueryObject(request: MsgQueryObject): Promise<MsgQueryObjectResponse> {
    const data = MsgQueryObject.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "QueryObject",
      data
    );
    return promise.then((data) =>
      MsgQueryObjectResponse.decode(new Reader(data))
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

  DeactivateObject(
    request: MsgDeactivateObject
  ): Promise<MsgDeactivateObjectResponse> {
    const data = MsgDeactivateObject.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Msg",
      "DeactivateObject",
      data
    );
    return promise.then((data) =>
      MsgDeactivateObjectResponse.decode(new Reader(data))
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
