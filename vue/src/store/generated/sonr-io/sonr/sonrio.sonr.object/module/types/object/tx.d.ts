import { Reader, Writer } from "protobufjs/minimal";
import { ObjectField } from "../object/object";
export declare const protobufPackage = "sonrio.sonr.object";
export interface MsgCreateObject {
    creator: string;
    label: string;
    description: string;
    fields: ObjectField[];
}
export interface MsgCreateObjectResponse {
}
export interface MsgReadObject {
    creator: string;
    did: string;
}
export interface MsgReadObjectResponse {
}
export interface MsgUpdateObject {
    creator: string;
    did: string;
}
export interface MsgUpdateObjectResponse {
}
export interface MsgDeleteObject {
    creator: string;
    did: string;
    publicKey: string;
}
export interface MsgDeleteObjectResponse {
}
export declare const MsgCreateObject: {
    encode(message: MsgCreateObject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateObject;
    fromJSON(object: any): MsgCreateObject;
    toJSON(message: MsgCreateObject): unknown;
    fromPartial(object: DeepPartial<MsgCreateObject>): MsgCreateObject;
};
export declare const MsgCreateObjectResponse: {
    encode(_: MsgCreateObjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateObjectResponse;
    fromJSON(_: any): MsgCreateObjectResponse;
    toJSON(_: MsgCreateObjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateObjectResponse>): MsgCreateObjectResponse;
};
export declare const MsgReadObject: {
    encode(message: MsgReadObject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgReadObject;
    fromJSON(object: any): MsgReadObject;
    toJSON(message: MsgReadObject): unknown;
    fromPartial(object: DeepPartial<MsgReadObject>): MsgReadObject;
};
export declare const MsgReadObjectResponse: {
    encode(_: MsgReadObjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgReadObjectResponse;
    fromJSON(_: any): MsgReadObjectResponse;
    toJSON(_: MsgReadObjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgReadObjectResponse>): MsgReadObjectResponse;
};
export declare const MsgUpdateObject: {
    encode(message: MsgUpdateObject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateObject;
    fromJSON(object: any): MsgUpdateObject;
    toJSON(message: MsgUpdateObject): unknown;
    fromPartial(object: DeepPartial<MsgUpdateObject>): MsgUpdateObject;
};
export declare const MsgUpdateObjectResponse: {
    encode(_: MsgUpdateObjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateObjectResponse;
    fromJSON(_: any): MsgUpdateObjectResponse;
    toJSON(_: MsgUpdateObjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateObjectResponse>): MsgUpdateObjectResponse;
};
export declare const MsgDeleteObject: {
    encode(message: MsgDeleteObject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteObject;
    fromJSON(object: any): MsgDeleteObject;
    toJSON(message: MsgDeleteObject): unknown;
    fromPartial(object: DeepPartial<MsgDeleteObject>): MsgDeleteObject;
};
export declare const MsgDeleteObjectResponse: {
    encode(_: MsgDeleteObjectResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteObjectResponse;
    fromJSON(_: any): MsgDeleteObjectResponse;
    toJSON(_: MsgDeleteObjectResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteObjectResponse>): MsgDeleteObjectResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
    ReadObject(request: MsgReadObject): Promise<MsgReadObjectResponse>;
    UpdateObject(request: MsgUpdateObject): Promise<MsgUpdateObjectResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateObject(request: MsgCreateObject): Promise<MsgCreateObjectResponse>;
    ReadObject(request: MsgReadObject): Promise<MsgReadObjectResponse>;
    UpdateObject(request: MsgUpdateObject): Promise<MsgUpdateObjectResponse>;
    DeleteObject(request: MsgDeleteObject): Promise<MsgDeleteObjectResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
