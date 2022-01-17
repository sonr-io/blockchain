/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "sonrio.sonr.registry";
const baseMsgRegisterName = { creator: "", name: "", fingerprint: "" };
export const MsgRegisterName = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterName };
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
    fromJSON(object) {
        const message = { ...baseMsgRegisterName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        }
        else {
            message.fingerprint = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegisterName };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        }
        else {
            message.fingerprint = "";
        }
        return message;
    },
};
const baseMsgRegisterNameResponse = {};
export const MsgRegisterNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRegisterNameResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgRegisterNameResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRegisterNameResponse,
        };
        return message;
    },
};
const baseMsgRegisterService = {
    creator: "",
    serviceName: "",
    publicKey: "",
};
export const MsgRegisterService = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.serviceName !== "") {
            writer.uint32(18).string(message.serviceName);
        }
        if (message.publicKey !== "") {
            writer.uint32(26).string(message.publicKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.serviceName = reader.string();
                    break;
                case 3:
                    message.publicKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRegisterService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.serviceName !== undefined && object.serviceName !== null) {
            message.serviceName = String(object.serviceName);
        }
        else {
            message.serviceName = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        }
        else {
            message.publicKey = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.serviceName !== undefined &&
            (obj.serviceName = message.serviceName);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegisterService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.serviceName !== undefined && object.serviceName !== null) {
            message.serviceName = object.serviceName;
        }
        else {
            message.serviceName = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        }
        else {
            message.publicKey = "";
        }
        return message;
    },
};
const baseMsgRegisterServiceResponse = {};
export const MsgRegisterServiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRegisterServiceResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgRegisterServiceResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRegisterServiceResponse,
        };
        return message;
    },
};
const baseMsgCreateAccount = {
    creator: "",
    home: "",
    deviceId: "",
    fingerprint: "",
    os: "",
    model: "",
    arch: "",
    publicKey: "",
    metadata: "",
};
export const MsgCreateAccount = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.home !== "") {
            writer.uint32(18).string(message.home);
        }
        if (message.deviceId !== "") {
            writer.uint32(26).string(message.deviceId);
        }
        if (message.fingerprint !== "") {
            writer.uint32(34).string(message.fingerprint);
        }
        if (message.os !== "") {
            writer.uint32(42).string(message.os);
        }
        if (message.model !== "") {
            writer.uint32(50).string(message.model);
        }
        if (message.arch !== "") {
            writer.uint32(58).string(message.arch);
        }
        if (message.publicKey !== "") {
            writer.uint32(66).string(message.publicKey);
        }
        if (message.metadata !== "") {
            writer.uint32(74).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAccount };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.home = reader.string();
                    break;
                case 3:
                    message.deviceId = reader.string();
                    break;
                case 4:
                    message.fingerprint = reader.string();
                    break;
                case 5:
                    message.os = reader.string();
                    break;
                case 6:
                    message.model = reader.string();
                    break;
                case 7:
                    message.arch = reader.string();
                    break;
                case 8:
                    message.publicKey = reader.string();
                    break;
                case 9:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateAccount };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.home !== undefined && object.home !== null) {
            message.home = String(object.home);
        }
        else {
            message.home = "";
        }
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = String(object.deviceId);
        }
        else {
            message.deviceId = "";
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = String(object.fingerprint);
        }
        else {
            message.fingerprint = "";
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = String(object.os);
        }
        else {
            message.os = "";
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = String(object.model);
        }
        else {
            message.model = "";
        }
        if (object.arch !== undefined && object.arch !== null) {
            message.arch = String(object.arch);
        }
        else {
            message.arch = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = String(object.publicKey);
        }
        else {
            message.publicKey = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = String(object.metadata);
        }
        else {
            message.metadata = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.home !== undefined && (obj.home = message.home);
        message.deviceId !== undefined && (obj.deviceId = message.deviceId);
        message.fingerprint !== undefined &&
            (obj.fingerprint = message.fingerprint);
        message.os !== undefined && (obj.os = message.os);
        message.model !== undefined && (obj.model = message.model);
        message.arch !== undefined && (obj.arch = message.arch);
        message.publicKey !== undefined && (obj.publicKey = message.publicKey);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAccount };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.home !== undefined && object.home !== null) {
            message.home = object.home;
        }
        else {
            message.home = "";
        }
        if (object.deviceId !== undefined && object.deviceId !== null) {
            message.deviceId = object.deviceId;
        }
        else {
            message.deviceId = "";
        }
        if (object.fingerprint !== undefined && object.fingerprint !== null) {
            message.fingerprint = object.fingerprint;
        }
        else {
            message.fingerprint = "";
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = object.os;
        }
        else {
            message.os = "";
        }
        if (object.model !== undefined && object.model !== null) {
            message.model = object.model;
        }
        else {
            message.model = "";
        }
        if (object.arch !== undefined && object.arch !== null) {
            message.arch = object.arch;
        }
        else {
            message.arch = "";
        }
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = object.publicKey;
        }
        else {
            message.publicKey = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        else {
            message.metadata = "";
        }
        return message;
    },
};
const baseMsgCreateAccountResponse = {};
export const MsgCreateAccountResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateAccountResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgCreateAccountResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateAccountResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RegisterName(request) {
        const data = MsgRegisterName.encode(request).finish();
        const promise = this.rpc.request("sonrio.sonr.registry.Msg", "RegisterName", data);
        return promise.then((data) => MsgRegisterNameResponse.decode(new Reader(data)));
    }
    RegisterService(request) {
        const data = MsgRegisterService.encode(request).finish();
        const promise = this.rpc.request("sonrio.sonr.registry.Msg", "RegisterService", data);
        return promise.then((data) => MsgRegisterServiceResponse.decode(new Reader(data)));
    }
    CreateAccount(request) {
        const data = MsgCreateAccount.encode(request).finish();
        const promise = this.rpc.request("sonrio.sonr.registry.Msg", "CreateAccount", data);
        return promise.then((data) => MsgCreateAccountResponse.decode(new Reader(data)));
    }
}
