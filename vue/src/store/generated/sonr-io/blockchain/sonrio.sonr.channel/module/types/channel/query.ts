/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../channel/params";
import { HowIs } from "../channel/how_is";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "sonrio.sonr.channel";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetHowIsRequest {
  index: string;
}

export interface QueryGetHowIsResponse {
  howIs: HowIs | undefined;
}

export interface QueryAllHowIsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHowIsResponse {
  howIs: HowIs[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetHowIsRequest: object = { index: "" };

export const QueryGetHowIsRequest = {
  encode(
    message: QueryGetHowIsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHowIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetHowIsRequest } as QueryGetHowIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHowIsRequest {
    const message = { ...baseQueryGetHowIsRequest } as QueryGetHowIsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetHowIsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHowIsRequest>): QueryGetHowIsRequest {
    const message = { ...baseQueryGetHowIsRequest } as QueryGetHowIsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetHowIsResponse: object = {};

export const QueryGetHowIsResponse = {
  encode(
    message: QueryGetHowIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.howIs !== undefined) {
      HowIs.encode(message.howIs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHowIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetHowIsResponse } as QueryGetHowIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.howIs = HowIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHowIsResponse {
    const message = { ...baseQueryGetHowIsResponse } as QueryGetHowIsResponse;
    if (object.howIs !== undefined && object.howIs !== null) {
      message.howIs = HowIs.fromJSON(object.howIs);
    } else {
      message.howIs = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHowIsResponse): unknown {
    const obj: any = {};
    message.howIs !== undefined &&
      (obj.howIs = message.howIs ? HowIs.toJSON(message.howIs) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHowIsResponse>
  ): QueryGetHowIsResponse {
    const message = { ...baseQueryGetHowIsResponse } as QueryGetHowIsResponse;
    if (object.howIs !== undefined && object.howIs !== null) {
      message.howIs = HowIs.fromPartial(object.howIs);
    } else {
      message.howIs = undefined;
    }
    return message;
  },
};

const baseQueryAllHowIsRequest: object = {};

export const QueryAllHowIsRequest = {
  encode(
    message: QueryAllHowIsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHowIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllHowIsRequest } as QueryAllHowIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHowIsRequest {
    const message = { ...baseQueryAllHowIsRequest } as QueryAllHowIsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHowIsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHowIsRequest>): QueryAllHowIsRequest {
    const message = { ...baseQueryAllHowIsRequest } as QueryAllHowIsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHowIsResponse: object = {};

export const QueryAllHowIsResponse = {
  encode(
    message: QueryAllHowIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.howIs) {
      HowIs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHowIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllHowIsResponse } as QueryAllHowIsResponse;
    message.howIs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.howIs.push(HowIs.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHowIsResponse {
    const message = { ...baseQueryAllHowIsResponse } as QueryAllHowIsResponse;
    message.howIs = [];
    if (object.howIs !== undefined && object.howIs !== null) {
      for (const e of object.howIs) {
        message.howIs.push(HowIs.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHowIsResponse): unknown {
    const obj: any = {};
    if (message.howIs) {
      obj.howIs = message.howIs.map((e) => (e ? HowIs.toJSON(e) : undefined));
    } else {
      obj.howIs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHowIsResponse>
  ): QueryAllHowIsResponse {
    const message = { ...baseQueryAllHowIsResponse } as QueryAllHowIsResponse;
    message.howIs = [];
    if (object.howIs !== undefined && object.howIs !== null) {
      for (const e of object.howIs) {
        message.howIs.push(HowIs.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a HowIs by index. */
  HowIs(request: QueryGetHowIsRequest): Promise<QueryGetHowIsResponse>;
  /** Queries a list of HowIs items. */
  HowIsAll(request: QueryAllHowIsRequest): Promise<QueryAllHowIsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  HowIs(request: QueryGetHowIsRequest): Promise<QueryGetHowIsResponse> {
    const data = QueryGetHowIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Query",
      "HowIs",
      data
    );
    return promise.then((data) =>
      QueryGetHowIsResponse.decode(new Reader(data))
    );
  }

  HowIsAll(request: QueryAllHowIsRequest): Promise<QueryAllHowIsResponse> {
    const data = QueryAllHowIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.channel.Query",
      "HowIsAll",
      data
    );
    return promise.then((data) =>
      QueryAllHowIsResponse.decode(new Reader(data))
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
