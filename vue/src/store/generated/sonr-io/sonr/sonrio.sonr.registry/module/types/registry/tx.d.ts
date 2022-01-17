import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sonrio.sonr.registry";
export interface MsgRegisterName {
    creator: string;
    name: string;
    fingerprint: string;
}
export interface MsgRegisterNameResponse {
}
export interface MsgRegisterService {
    creator: string;
    serviceName: string;
    publicKey: string;
}
export interface MsgRegisterServiceResponse {
}
export interface MsgCreateAccount {
    creator: string;
    home: string;
    deviceId: string;
    fingerprint: string;
    os: string;
    model: string;
    arch: string;
    publicKey: string;
    metadata: string;
}
export interface MsgCreateAccountResponse {
}
export declare const MsgRegisterName: {
    encode(message: MsgRegisterName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterName;
    fromJSON(object: any): MsgRegisterName;
    toJSON(message: MsgRegisterName): unknown;
    fromPartial(object: DeepPartial<MsgRegisterName>): MsgRegisterName;
};
export declare const MsgRegisterNameResponse: {
    encode(_: MsgRegisterNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterNameResponse;
    fromJSON(_: any): MsgRegisterNameResponse;
    toJSON(_: MsgRegisterNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterNameResponse>): MsgRegisterNameResponse;
};
export declare const MsgRegisterService: {
    encode(message: MsgRegisterService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterService;
    fromJSON(object: any): MsgRegisterService;
    toJSON(message: MsgRegisterService): unknown;
    fromPartial(object: DeepPartial<MsgRegisterService>): MsgRegisterService;
};
export declare const MsgRegisterServiceResponse: {
    encode(_: MsgRegisterServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterServiceResponse;
    fromJSON(_: any): MsgRegisterServiceResponse;
    toJSON(_: MsgRegisterServiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterServiceResponse>): MsgRegisterServiceResponse;
};
export declare const MsgCreateAccount: {
    encode(message: MsgCreateAccount, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAccount;
    fromJSON(object: any): MsgCreateAccount;
    toJSON(message: MsgCreateAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateAccount>): MsgCreateAccount;
};
export declare const MsgCreateAccountResponse: {
    encode(_: MsgCreateAccountResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAccountResponse;
    fromJSON(_: any): MsgCreateAccountResponse;
    toJSON(_: MsgCreateAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateAccountResponse>): MsgCreateAccountResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RegisterName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
    RegisterService(request: MsgRegisterService): Promise<MsgRegisterServiceResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
    RegisterService(request: MsgRegisterService): Promise<MsgRegisterServiceResponse>;
    CreateAccount(request: MsgCreateAccount): Promise<MsgCreateAccountResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
