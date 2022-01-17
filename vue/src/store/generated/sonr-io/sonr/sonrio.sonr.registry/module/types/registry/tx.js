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
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RegisterName(request) {
        const data = MsgRegisterName.encode(request).finish();
        const promise = this.rpc.request("sonrio.sonr.registry.Msg", "RegisterName", data);
        return promise.then((data) => MsgRegisterNameResponse.decode(new Reader(data)));
    }
}
