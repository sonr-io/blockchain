import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sonrio.sonr.channel";
export interface MsgCreateChannel {
    creator: string;
    name: string;
    description: string;
    objectDid: string;
    ttl: number;
    maxSize: number;
}
export interface MsgCreateChannelResponse {
}
export interface MsgReadChannel {
    creator: string;
    did: string;
}
export interface MsgReadChannelResponse {
}
export interface MsgDeleteChannel {
    creator: string;
    did: string;
    publicKey: string;
}
export interface MsgDeleteChannelResponse {
}
export interface MsgUpdateChannel {
    creator: string;
    did: string;
}
export interface MsgUpdateChannelResponse {
}
export declare const MsgCreateChannel: {
    encode(message: MsgCreateChannel, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateChannel;
    fromJSON(object: any): MsgCreateChannel;
    toJSON(message: MsgCreateChannel): unknown;
    fromPartial(object: DeepPartial<MsgCreateChannel>): MsgCreateChannel;
};
export declare const MsgCreateChannelResponse: {
    encode(_: MsgCreateChannelResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateChannelResponse;
    fromJSON(_: any): MsgCreateChannelResponse;
    toJSON(_: MsgCreateChannelResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateChannelResponse>): MsgCreateChannelResponse;
};
export declare const MsgReadChannel: {
    encode(message: MsgReadChannel, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgReadChannel;
    fromJSON(object: any): MsgReadChannel;
    toJSON(message: MsgReadChannel): unknown;
    fromPartial(object: DeepPartial<MsgReadChannel>): MsgReadChannel;
};
export declare const MsgReadChannelResponse: {
    encode(_: MsgReadChannelResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgReadChannelResponse;
    fromJSON(_: any): MsgReadChannelResponse;
    toJSON(_: MsgReadChannelResponse): unknown;
    fromPartial(_: DeepPartial<MsgReadChannelResponse>): MsgReadChannelResponse;
};
export declare const MsgDeleteChannel: {
    encode(message: MsgDeleteChannel, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteChannel;
    fromJSON(object: any): MsgDeleteChannel;
    toJSON(message: MsgDeleteChannel): unknown;
    fromPartial(object: DeepPartial<MsgDeleteChannel>): MsgDeleteChannel;
};
export declare const MsgDeleteChannelResponse: {
    encode(_: MsgDeleteChannelResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteChannelResponse;
    fromJSON(_: any): MsgDeleteChannelResponse;
    toJSON(_: MsgDeleteChannelResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteChannelResponse>): MsgDeleteChannelResponse;
};
export declare const MsgUpdateChannel: {
    encode(message: MsgUpdateChannel, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateChannel;
    fromJSON(object: any): MsgUpdateChannel;
    toJSON(message: MsgUpdateChannel): unknown;
    fromPartial(object: DeepPartial<MsgUpdateChannel>): MsgUpdateChannel;
};
export declare const MsgUpdateChannelResponse: {
    encode(_: MsgUpdateChannelResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateChannelResponse;
    fromJSON(_: any): MsgUpdateChannelResponse;
    toJSON(_: MsgUpdateChannelResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateChannelResponse>): MsgUpdateChannelResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateChannel(request: MsgCreateChannel): Promise<MsgCreateChannelResponse>;
    ReadChannel(request: MsgReadChannel): Promise<MsgReadChannelResponse>;
    DeleteChannel(request: MsgDeleteChannel): Promise<MsgDeleteChannelResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UpdateChannel(request: MsgUpdateChannel): Promise<MsgUpdateChannelResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateChannel(request: MsgCreateChannel): Promise<MsgCreateChannelResponse>;
    ReadChannel(request: MsgReadChannel): Promise<MsgReadChannelResponse>;
    DeleteChannel(request: MsgDeleteChannel): Promise<MsgDeleteChannelResponse>;
    UpdateChannel(request: MsgUpdateChannel): Promise<MsgUpdateChannelResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
