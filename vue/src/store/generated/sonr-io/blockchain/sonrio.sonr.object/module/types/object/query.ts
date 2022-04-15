/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../object/params";
import { Session } from "../registry/who_is";
import { WhatIs } from "../object/what_is";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "sonrio.sonr.object";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWhatIsRequest {
  index: string;
  session: Session | undefined;
}

export interface QueryGetWhatIsResponse {
  whatIs: WhatIs | undefined;
}

export interface QueryAllWhatIsRequest {
  pagination: PageRequest | undefined;
  session: Session | undefined;
}

export interface QueryAllWhatIsResponse {
  whatIs: WhatIs[];
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

const baseQueryGetWhatIsRequest: object = { index: "" };

export const QueryGetWhatIsRequest = {
  encode(
    message: QueryGetWhatIsRequest,
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

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhatIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhatIsRequest } as QueryGetWhatIsRequest;
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

  fromJSON(object: any): QueryGetWhatIsRequest {
    const message = { ...baseQueryGetWhatIsRequest } as QueryGetWhatIsRequest;
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

  toJSON(message: QueryGetWhatIsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.session !== undefined &&
      (obj.session = message.session
        ? Session.toJSON(message.session)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhatIsRequest>
  ): QueryGetWhatIsRequest {
    const message = { ...baseQueryGetWhatIsRequest } as QueryGetWhatIsRequest;
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

const baseQueryGetWhatIsResponse: object = {};

export const QueryGetWhatIsResponse = {
  encode(
    message: QueryGetWhatIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whatIs !== undefined) {
      WhatIs.encode(message.whatIs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhatIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhatIsResponse } as QueryGetWhatIsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whatIs = WhatIs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhatIsResponse {
    const message = { ...baseQueryGetWhatIsResponse } as QueryGetWhatIsResponse;
    if (object.whatIs !== undefined && object.whatIs !== null) {
      message.whatIs = WhatIs.fromJSON(object.whatIs);
    } else {
      message.whatIs = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhatIsResponse): unknown {
    const obj: any = {};
    message.whatIs !== undefined &&
      (obj.whatIs = message.whatIs ? WhatIs.toJSON(message.whatIs) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhatIsResponse>
  ): QueryGetWhatIsResponse {
    const message = { ...baseQueryGetWhatIsResponse } as QueryGetWhatIsResponse;
    if (object.whatIs !== undefined && object.whatIs !== null) {
      message.whatIs = WhatIs.fromPartial(object.whatIs);
    } else {
      message.whatIs = undefined;
    }
    return message;
  },
};

const baseQueryAllWhatIsRequest: object = {};

export const QueryAllWhatIsRequest = {
  encode(
    message: QueryAllWhatIsRequest,
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

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhatIsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhatIsRequest } as QueryAllWhatIsRequest;
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

  fromJSON(object: any): QueryAllWhatIsRequest {
    const message = { ...baseQueryAllWhatIsRequest } as QueryAllWhatIsRequest;
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

  toJSON(message: QueryAllWhatIsRequest): unknown {
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
    object: DeepPartial<QueryAllWhatIsRequest>
  ): QueryAllWhatIsRequest {
    const message = { ...baseQueryAllWhatIsRequest } as QueryAllWhatIsRequest;
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

const baseQueryAllWhatIsResponse: object = {};

export const QueryAllWhatIsResponse = {
  encode(
    message: QueryAllWhatIsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whatIs) {
      WhatIs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhatIsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhatIsResponse } as QueryAllWhatIsResponse;
    message.whatIs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whatIs.push(WhatIs.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWhatIsResponse {
    const message = { ...baseQueryAllWhatIsResponse } as QueryAllWhatIsResponse;
    message.whatIs = [];
    if (object.whatIs !== undefined && object.whatIs !== null) {
      for (const e of object.whatIs) {
        message.whatIs.push(WhatIs.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhatIsResponse): unknown {
    const obj: any = {};
    if (message.whatIs) {
      obj.whatIs = message.whatIs.map((e) =>
        e ? WhatIs.toJSON(e) : undefined
      );
    } else {
      obj.whatIs = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhatIsResponse>
  ): QueryAllWhatIsResponse {
    const message = { ...baseQueryAllWhatIsResponse } as QueryAllWhatIsResponse;
    message.whatIs = [];
    if (object.whatIs !== undefined && object.whatIs !== null) {
      for (const e of object.whatIs) {
        message.whatIs.push(WhatIs.fromPartial(e));
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
   * WhatIs
   *
   * Queries a WhatIs by index.
   */
  WhatIs(request: QueryGetWhatIsRequest): Promise<QueryGetWhatIsResponse>;
  /**
   * WhatIsAll
   *
   * Queries a list of WhatIs items.
   */
  WhatIsAll(request: QueryAllWhatIsRequest): Promise<QueryAllWhatIsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  WhatIs(request: QueryGetWhatIsRequest): Promise<QueryGetWhatIsResponse> {
    const data = QueryGetWhatIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Query",
      "WhatIs",
      data
    );
    return promise.then((data) =>
      QueryGetWhatIsResponse.decode(new Reader(data))
    );
  }

  WhatIsAll(request: QueryAllWhatIsRequest): Promise<QueryAllWhatIsResponse> {
    const data = QueryAllWhatIsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sonrio.sonr.object.Query",
      "WhatIsAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhatIsResponse.decode(new Reader(data))
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
