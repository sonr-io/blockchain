/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../bucket/params";
import { Session } from "../registry/who_is";
import { WhichIs } from "../bucket/which_is";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "sonrio.sonr.bucket";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhichIsRequest {
  index: string;
  session: Session | undefined;
}

export interface QueryGetWhichIsResponse {
  whichIs: WhichIs | undefined;
}

export interface QueryAllWhichIsRequest {
  pagination: PageRequest | undefined;
  session: Session | undefined;
}

export interface QueryAllWhichIsResponse {
  whichIs: WhichIs[];
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

const baseQueryGetWhichIsRequest: object = { index: "" };

export const QueryGetWhichIsRequest = {
  encode(
    message: QueryGetWhichIsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhichIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhichIsRequest } as QueryGetWhichIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.session = Session.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhichIsRequest {
    const message = { ...baseQueryGetWhichIsRequest } as QueryGetWhichIsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhichIsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhichIsRequest>
  ): QueryGetWhichIsRequest {
    const message = { ...baseQueryGetWhichIsRequest } as QueryGetWhichIsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },
};

const baseQueryGetWhichIsResponse: object = {};

export const QueryGetWhichIsResponse = {
  encode(
    message: QueryGetWhichIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whichIs !== undefined) {
      WhichIs.encode(message.whichIs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhichIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWhichIsResponse,
    } as QueryGetWhichIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whichIs = WhichIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhichIsResponse {
    const message = {
      ...baseQueryGetWhichIsResponse,
    } as QueryGetWhichIsResponse;
    if (object.whichIs !== undefined && object.whichIs !== null) {
      message.whichIs = WhichIs.fromJSON(object.whichIs);
    } else {
      message.whichIs = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhichIsResponse): unknown {
    const obj: any = {};
    message.whichIs !== undefined &&
      (obj.whichIs = message.whichIs
        ? WhichIs.toJSON(message.whichIs)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhichIsResponse>
  ): QueryGetWhichIsResponse {
    const message = {
      ...baseQueryGetWhichIsResponse,
    } as QueryGetWhichIsResponse;
    if (object.whichIs !== undefined && object.whichIs !== null) {
      message.whichIs = WhichIs.fromPartial(object.whichIs);
    } else {
      message.whichIs = undefined;
    }
    return message;
  },
};

const baseQueryAllWhichIsRequest: object = {};

export const QueryAllWhichIsRequest = {
  encode(
    message: QueryAllWhichIsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.session !== undefined) {
      Session.encode(message.session, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhichIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhichIsRequest } as QueryAllWhichIsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.session = Session.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWhichIsRequest {
    const message = { ...baseQueryAllWhichIsRequest } as QueryAllWhichIsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromJSON(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhichIsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhichIsRequest>
  ): QueryAllWhichIsRequest {
    const message = { ...baseQueryAllWhichIsRequest } as QueryAllWhichIsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.session !== undefined && object.session !== null) {
      message.session = Session.fromPartial(object.session);
    } else {
      message.session = undefined;
    }
    return message;
  },
};

const baseQueryAllWhichIsResponse: object = {};

export const QueryAllWhichIsResponse = {
  encode(
    message: QueryAllWhichIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whichIs) {
      WhichIs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhichIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWhichIsResponse,
    } as QueryAllWhichIsResponse;
    message.whichIs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whichIs.push(WhichIs.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWhichIsResponse {
    const message = {
      ...baseQueryAllWhichIsResponse,
    } as QueryAllWhichIsResponse;
    message.whichIs = [];
    if (object.whichIs !== undefined && object.whichIs !== null) {
      for (const e of object.whichIs) {
        message.whichIs.push(WhichIs.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhichIsResponse): unknown {
    const obj: any = {};
    if (message.whichIs) {
      obj.whichIs = message.whichIs.map((e) =>
        e ? WhichIs.toJSON(e) : undefined
      );
    } else {
      obj.whichIs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhichIsResponse>
  ): QueryAllWhichIsResponse {
    const message = {
      ...baseQueryAllWhichIsResponse,
    } as QueryAllWhichIsResponse;
    message.whichIs = [];
    if (object.whichIs !== undefined && object.whichIs !== null) {
      for (const e of object.whichIs) {
        message.whichIs.push(WhichIs.fromPartial(e));
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
  /**
   * Params
   *
   * Parameters queries the parameters of the module.
   */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * WhichIs
   *
   * Queries a WhichIs by index.
   */
  WhichIs(request: QueryGetWhichIsRequest): Promise<QueryGetWhichIsResponse>;
  /**
   * WhichIsAll
   *
   * Queries a list of WhichIs items.
   */
  WhichIsAll(request: QueryAllWhichIsRequest): Promise<QueryAllWhichIsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  WhichIs(request: QueryGetWhichIsRequest): Promise<QueryGetWhichIsResponse> {
    const data = QueryGetWhichIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Query",
      "WhichIs",
      data
    );
    return promise.then((data) =>
      QueryGetWhichIsResponse.decode(new Reader(data))
    );
  }

  WhichIsAll(
    request: QueryAllWhichIsRequest
  ): Promise<QueryAllWhichIsResponse> {
    const data = QueryAllWhichIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.bucket.Query",
      "WhichIsAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhichIsResponse.decode(new Reader(data))
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
