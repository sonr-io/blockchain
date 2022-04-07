/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ChannelChannelDoc {
  /** Label is human-readable name of the channel. */
  label?: string;

  /** Description is a human-readable description of the channel. */
  description?: string;

  /** Did is the identifier of the channel. */
  did?: string;

  /** RegisterdObject is the object that is registered as the payload for the channel. */
  registered_object?: ObjectObjectDoc;
}

export interface ChannelHowIs {
  did?: string;
  creator?: string;
  channel?: ChannelChannelDoc;
}

export interface ChannelMsgCreateChannelResponse {
  /** @format int32 */
  code?: number;
  message?: string;
  how_is?: ChannelHowIs;
}

export type ChannelMsgCreateHowIsResponse = object;

export interface ChannelMsgDeleteChannelResponse {
  /** @format int32 */
  code?: number;
  message?: string;
}

export type ChannelMsgDeleteHowIsResponse = object;

export interface ChannelMsgReadChannelResponse {
  /** @format int32 */
  code?: number;
  message?: string;
  how_is?: ChannelHowIs;
}

export interface ChannelMsgUpdateChannelResponse {
  /** @format int32 */
  code?: number;
  message?: string;
}

export type ChannelMsgUpdateHowIsResponse = object;

/**
 * Params defines the parameters for the module.
 */
export type ChannelParams = object;

export interface ChannelQueryAllHowIsResponse {
  howIs?: ChannelHowIs[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface ChannelQueryGetHowIsResponse {
  howIs?: ChannelHowIs;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface ChannelQueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: ChannelParams;
}

/**
 * ObjectDoc is a document for an Object stored in the graph.
 */
export interface ObjectObjectDoc {
  /** Label is human-readable name of the bucket. */
  label?: string;

  /** Description is a human-readable description of the bucket. */
  description?: string;

  /** Did is the identifier of the object. */
  did?: string;

  /** Bucket is the did of the bucket that contains this object. */
  bucket_did?: string;

  /** Fields are the fields associated with the object. */
  fields?: Record<string, ObjectObjectField>;
}

/**
 * ObjectField is a field of an Object.
 */
export interface ObjectObjectField {
  label?: string;

  /**
   * - OBJECT_FIELD_TYPE_UNSPECIFIED: ObjectFieldTypeUnspecified is the default value
   *  - OBJECT_FIELD_TYPE_STRING: ObjectFieldTypeString is a string or text field
   *  - OBJECT_FIELD_TYPE_NUMBER: ObjectFieldTypeInt is an integer
   *  - OBJECT_FIELD_TYPE_BOOL: ObjectFieldTypeBool is a boolean
   *  - OBJECT_FIELD_TYPE_ARRAY: ObjectFieldTypeArray is a list of values
   *  - OBJECT_FIELD_TYPE_TIMESTAMP: ObjectFieldTypeDateTime is a datetime
   *  - OBJECT_FIELD_TYPE_GEOPOINT: ObjectFieldTypeGeopoint is a geopoint
   *  - OBJECT_FIELD_TYPE_BLOB: ObjectFieldTypeBlob is a blob of data
   *  - OBJECT_FIELD_TYPE_BLOCKCHAIN_ADDRESS: ObjectFieldTypeETU is a pointer to an Ethereum account address.
   */
  type?: ObjectObjectFieldType;

  /** Did is the identifier of the field. */
  did?: string;

  /** ObjectFieldText is a text field of an Object. */
  string_value?: ObjectObjectFieldText;

  /** ObjectFieldNumber is a number field of an Object. */
  number_value?: ObjectObjectFieldNumber;

  /** ObjectFieldBool is a boolean field of an Object. */
  bool_value?: ObjectObjectFieldBool;

  /** ObjectFieldArray is an array of ObjectFields to be stored in the graph object. */
  array_value?: ObjectObjectFieldArray;

  /** Time is defined by milliseconds since epoch. */
  time_stamp_value?: ObjectObjectFieldTime;

  /** ObjectFieldGeopoint is a field of an Object for geopoints. */
  geopoint_value?: ObjectObjectFieldGeopoint;

  /** ObjectFieldBlob is a field of an Object for blobs. */
  blob_value?: ObjectObjectFieldBlob;

  /** ObjectFieldBlockchainAddress is a field of an Object for blockchain addresses. */
  blockchain_addr_value?: ObjectObjectFieldBlockchainAddress;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldArray is an array of ObjectFields to be stored in the graph object.
 */
export interface ObjectObjectFieldArray {
  label?: string;

  /**
   * - OBJECT_FIELD_TYPE_UNSPECIFIED: ObjectFieldTypeUnspecified is the default value
   *  - OBJECT_FIELD_TYPE_STRING: ObjectFieldTypeString is a string or text field
   *  - OBJECT_FIELD_TYPE_NUMBER: ObjectFieldTypeInt is an integer
   *  - OBJECT_FIELD_TYPE_BOOL: ObjectFieldTypeBool is a boolean
   *  - OBJECT_FIELD_TYPE_ARRAY: ObjectFieldTypeArray is a list of values
   *  - OBJECT_FIELD_TYPE_TIMESTAMP: ObjectFieldTypeDateTime is a datetime
   *  - OBJECT_FIELD_TYPE_GEOPOINT: ObjectFieldTypeGeopoint is a geopoint
   *  - OBJECT_FIELD_TYPE_BLOB: ObjectFieldTypeBlob is a blob of data
   *  - OBJECT_FIELD_TYPE_BLOCKCHAIN_ADDRESS: ObjectFieldTypeETU is a pointer to an Ethereum account address.
   */
  type?: ObjectObjectFieldType;

  /** Did is the identifier of the field. */
  did?: string;
  items?: ObjectObjectField[];
}

/**
 * ObjectFieldBlob is a field of an Object for blobs.
 */
export interface ObjectObjectFieldBlob {
  label?: string;

  /** Did is the identifier of the field. */
  did?: string;

  /** @format byte */
  value?: string;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldBlockchainAddress is a field of an Object for blockchain addresses.
 */
export interface ObjectObjectFieldBlockchainAddress {
  label?: string;

  /** Did is the identifier of the field. */
  did?: string;
  value?: string;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldBool is a boolean field of an Object.
 */
export interface ObjectObjectFieldBool {
  label?: string;

  /** Did is the identifier of the field. */
  did?: string;
  value?: boolean;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldGeopoint is a field of an Object for geopoints.
 */
export interface ObjectObjectFieldGeopoint {
  label?: string;

  /**
   * - OBJECT_FIELD_TYPE_UNSPECIFIED: ObjectFieldTypeUnspecified is the default value
   *  - OBJECT_FIELD_TYPE_STRING: ObjectFieldTypeString is a string or text field
   *  - OBJECT_FIELD_TYPE_NUMBER: ObjectFieldTypeInt is an integer
   *  - OBJECT_FIELD_TYPE_BOOL: ObjectFieldTypeBool is a boolean
   *  - OBJECT_FIELD_TYPE_ARRAY: ObjectFieldTypeArray is a list of values
   *  - OBJECT_FIELD_TYPE_TIMESTAMP: ObjectFieldTypeDateTime is a datetime
   *  - OBJECT_FIELD_TYPE_GEOPOINT: ObjectFieldTypeGeopoint is a geopoint
   *  - OBJECT_FIELD_TYPE_BLOB: ObjectFieldTypeBlob is a blob of data
   *  - OBJECT_FIELD_TYPE_BLOCKCHAIN_ADDRESS: ObjectFieldTypeETU is a pointer to an Ethereum account address.
   */
  type?: ObjectObjectFieldType;

  /** Did is the identifier of the field. */
  did?: string;

  /**
   * Latitude is the geo-latitude of the point.
   * @format double
   */
  latitude?: number;

  /** @format double */
  longitude?: number;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldNumber is a number field of an Object.
 */
export interface ObjectObjectFieldNumber {
  label?: string;

  /** Did is the identifier of the field. */
  did?: string;

  /** @format double */
  value?: number;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldText is a text field of an Object.
 */
export interface ObjectObjectFieldText {
  label?: string;

  /** Did is the identifier of the field. */
  did?: string;
  value?: string;
  metadata?: Record<string, string>;
}

/**
 * ObjectFieldTime is a time field of an Object.
 */
export interface ObjectObjectFieldTime {
  label?: string;

  /** Did is the identifier of the field. */
  did?: string;

  /** @format int64 */
  value?: string;
  metadata?: Record<string, string>;
}

/**
* - OBJECT_FIELD_TYPE_UNSPECIFIED: ObjectFieldTypeUnspecified is the default value
 - OBJECT_FIELD_TYPE_STRING: ObjectFieldTypeString is a string or text field
 - OBJECT_FIELD_TYPE_NUMBER: ObjectFieldTypeInt is an integer
 - OBJECT_FIELD_TYPE_BOOL: ObjectFieldTypeBool is a boolean
 - OBJECT_FIELD_TYPE_ARRAY: ObjectFieldTypeArray is a list of values
 - OBJECT_FIELD_TYPE_TIMESTAMP: ObjectFieldTypeDateTime is a datetime
 - OBJECT_FIELD_TYPE_GEOPOINT: ObjectFieldTypeGeopoint is a geopoint
 - OBJECT_FIELD_TYPE_BLOB: ObjectFieldTypeBlob is a blob of data
 - OBJECT_FIELD_TYPE_BLOCKCHAIN_ADDRESS: ObjectFieldTypeETU is a pointer to an Ethereum account address.
*/
export enum ObjectObjectFieldType {
  OBJECT_FIELD_TYPE_UNSPECIFIED = "OBJECT_FIELD_TYPE_UNSPECIFIED",
  OBJECT_FIELD_TYPE_STRING = "OBJECT_FIELD_TYPE_STRING",
  OBJECT_FIELD_TYPE_NUMBER = "OBJECT_FIELD_TYPE_NUMBER",
  OBJECT_FIELD_TYPE_BOOL = "OBJECT_FIELD_TYPE_BOOL",
  OBJECT_FIELD_TYPE_ARRAY = "OBJECT_FIELD_TYPE_ARRAY",
  OBJECT_FIELD_TYPE_TIMESTAMP = "OBJECT_FIELD_TYPE_TIMESTAMP",
  OBJECT_FIELD_TYPE_GEOPOINT = "OBJECT_FIELD_TYPE_GEOPOINT",
  OBJECT_FIELD_TYPE_BLOB = "OBJECT_FIELD_TYPE_BLOB",
  OBJECT_FIELD_TYPE_BLOCKCHAIN_ADDRESS = "OBJECT_FIELD_TYPE_BLOCKCHAIN_ADDRESS",
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RegistryAuthenticator {
  /**
   * The AAGUID of the authenticator. An AAGUID is defined as an array containing the globally unique
   * identifier of the authenticator model being sought.
   * @format byte
   */
  aaguid?: string;

  /**
   * SignCount -Upon a new login operation, the Relying Party compares the stored signature counter value
   * with the new sign_count value returned in the assertion’s authenticator data. If this new
   * signCount value is less than or equal to the stored value, a cloned authenticator may
   * exist, or the authenticator may be malfunctioning.
   * @format int64
   */
  sign_count?: number;

  /**
   * CloneWarning - This is a signal that the authenticator may be cloned, i.e. at least two copies of the
   * credential private key may exist and are being used in parallel. Relying Parties should incorporate
   * this information into their risk scoring. Whether the Relying Party updates the stored signature
   * counter value in this case, or not, or fails the authentication ceremony or not, is Relying Party-specific.
   */
  clone_warning?: boolean;
}

export interface RegistryCredential {
  /**
   * A probabilistically-unique byte sequence identifying a public key credential source and its authentication assertions.
   * @format byte
   */
  i_d?: string;

  /**
   * The public key portion of a Relying Party-specific credential key pair, generated by an authenticator and returned to
   * a Relying Party at registration time (see also public key credential). The private key portion of the credential key
   * pair is known as the credential private key. Note that in the case of self attestation, the credential key pair is also
   * used as the attestation key pair, see self attestation for details.
   * @format byte
   */
  public_key?: string;

  /** The attestation format used (if any) by the authenticator when creating the credential. */
  attestation_type?: string;
  authenticator?: RegistryAuthenticator;
}

export interface RegistrySession {
  base_did?: string;

  /** WhoIs is the entry pointing a registered name to a user account address, Did Url string, and a DIDDocument. */
  whois?: RegistryWhoIs;
  credential?: RegistryCredential;
}

/**
 * WhoIs is the entry pointing a registered name to a user account address, Did Url string, and a DIDDocument.
 */
export interface RegistryWhoIs {
  name?: string;
  did?: string;

  /** @format byte */
  document?: string;
  creator?: string;
  credentials?: RegistryCredential[];

  /**
   * - User: User is the type of the registered name
   *  - Application: Application is the type of the registered name
   */
  type?: RegistryWhoIsType;
  metadata?: Record<string, string>;
}

/**
* - User: User is the type of the registered name
 - Application: Application is the type of the registered name
*/
export enum RegistryWhoIsType {
  User = "User",
  Application = "Application",
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /** @format byte */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title channel/channel.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryHowIsAll
   * @summary Queries a list of HowIs items.
   * @request GET:/sonr-io/sonr/channel/how_is
   */
  queryHowIsAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ChannelQueryAllHowIsResponse, RpcStatus>({
      path: `/sonr-io/sonr/channel/how_is`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryHowIs
   * @summary Queries a HowIs by index.
   * @request GET:/sonr-io/sonr/channel/how_is/{index}
   */
  queryHowIs = (index: string, params: RequestParams = {}) =>
    this.request<ChannelQueryGetHowIsResponse, RpcStatus>({
      path: `/sonr-io/sonr/channel/how_is/${index}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Parameters queries the parameters of the module.
   * @request GET:/sonrio/sonr/channel/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<ChannelQueryParamsResponse, RpcStatus>({
      path: `/sonrio/sonr/channel/params`,
      method: "GET",
      format: "json",
      ...params,
    });
}
