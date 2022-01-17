/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "sonrio.sonr.registry";

export interface MsgRegisterName {
  creator: string;
  name: string;
  fingerprint: string;
}

export interface MsgRegisterNameResponse {}

const baseMsgRegisterName: object = { creator: "", name: "", fingerprint: "" };

export const MsgRegisterName = {
  encode(message: MsgRegisterName, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.fingerprint !== "") {
      writer.uint32(26).string(message.fingerprint);
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
          message.name = reader.string();
          break;
        case 3:
          message.fingerprint = reader.string();
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = String(object.fingerprint);
    } else {
      message.fingerprint = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterName): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.fingerprint !== undefined &&
      (obj.fingerprint = message.fingerprint);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterName>): MsgRegisterName {
    const message = { ...baseMsgRegisterName } as MsgRegisterName;
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
    if (object.fingerprint !== undefined && object.fingerprint !== null) {
      message.fingerprint = object.fingerprint;
    } else {
      message.fingerprint = "";
    }
    return message;
  },
};

const baseMsgRegisterNameResponse: object = {};

export const MsgRegisterNameResponse = {
  encode(_: MsgRegisterNameResponse, writer: Writer = Writer.create()): Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRegisterNameResponse {
    const message = {
      ...baseMsgRegisterNameResponse,
    } as MsgRegisterNameResponse;
    return message;
  },

  toJSON(_: MsgRegisterNameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterNameResponse>
  ): MsgRegisterNameResponse {
    const message = {
      ...baseMsgRegisterNameResponse,
    } as MsgRegisterNameResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
