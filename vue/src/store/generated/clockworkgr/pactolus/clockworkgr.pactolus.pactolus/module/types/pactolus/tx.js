/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'clockworkgr.pactolus.pactolus';
const baseMsgMintAndSendTokens = { owner: '', denom: '', amount: 0, recipient: '' };
export const MsgMintAndSendTokens = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.amount !== 0) {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.recipient !== '') {
            writer.uint32(34).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintAndSendTokens };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.amount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMintAndSendTokens };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMintAndSendTokens };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = '';
        }
        return message;
    }
};
const baseMsgMintAndSendTokensResponse = {};
export const MsgMintAndSendTokensResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintAndSendTokensResponse };
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
        const message = { ...baseMsgMintAndSendTokensResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMintAndSendTokensResponse };
        return message;
    }
};
const baseMsgCreateToken = { owner: '', denom: '', description: '', maxsupply: 0, supply: 0, precision: 0, ticker: '', url: '', canChangeSupply: false };
export const MsgCreateToken = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.maxsupply !== 0) {
            writer.uint32(32).uint64(message.maxsupply);
        }
        if (message.supply !== 0) {
            writer.uint32(40).uint64(message.supply);
        }
        if (message.precision !== 0) {
            writer.uint32(48).uint32(message.precision);
        }
        if (message.ticker !== '') {
            writer.uint32(58).string(message.ticker);
        }
        if (message.url !== '') {
            writer.uint32(66).string(message.url);
        }
        if (message.canChangeSupply === true) {
            writer.uint32(72).bool(message.canChangeSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.maxsupply = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.supply = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.precision = reader.uint32();
                    break;
                case 7:
                    message.ticker = reader.string();
                    break;
                case 8:
                    message.url = reader.string();
                    break;
                case 9:
                    message.canChangeSupply = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateToken };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.maxsupply !== undefined && object.maxsupply !== null) {
            message.maxsupply = Number(object.maxsupply);
        }
        else {
            message.maxsupply = 0;
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = Number(object.supply);
        }
        else {
            message.supply = 0;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = Number(object.precision);
        }
        else {
            message.precision = 0;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = String(object.ticker);
        }
        else {
            message.ticker = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        if (object.canChangeSupply !== undefined && object.canChangeSupply !== null) {
            message.canChangeSupply = Boolean(object.canChangeSupply);
        }
        else {
            message.canChangeSupply = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined && (obj.description = message.description);
        message.maxsupply !== undefined && (obj.maxsupply = message.maxsupply);
        message.supply !== undefined && (obj.supply = message.supply);
        message.precision !== undefined && (obj.precision = message.precision);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.url !== undefined && (obj.url = message.url);
        message.canChangeSupply !== undefined && (obj.canChangeSupply = message.canChangeSupply);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateToken };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.maxsupply !== undefined && object.maxsupply !== null) {
            message.maxsupply = object.maxsupply;
        }
        else {
            message.maxsupply = 0;
        }
        if (object.supply !== undefined && object.supply !== null) {
            message.supply = object.supply;
        }
        else {
            message.supply = 0;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        }
        else {
            message.precision = 0;
        }
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = object.ticker;
        }
        else {
            message.ticker = '';
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        if (object.canChangeSupply !== undefined && object.canChangeSupply !== null) {
            message.canChangeSupply = object.canChangeSupply;
        }
        else {
            message.canChangeSupply = false;
        }
        return message;
    }
};
const baseMsgCreateTokenResponse = {};
export const MsgCreateTokenResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTokenResponse };
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
        const message = { ...baseMsgCreateTokenResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateTokenResponse };
        return message;
    }
};
const baseMsgUpdateToken = { owner: '', denom: '', description: '', maxsupply: 0, url: '' };
export const MsgUpdateToken = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.description !== '') {
            writer.uint32(26).string(message.description);
        }
        if (message.maxsupply !== 0) {
            writer.uint32(32).uint64(message.maxsupply);
        }
        if (message.url !== '') {
            writer.uint32(42).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.maxsupply = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateToken };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.maxsupply !== undefined && object.maxsupply !== null) {
            message.maxsupply = Number(object.maxsupply);
        }
        else {
            message.maxsupply = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined && (obj.description = message.description);
        message.maxsupply !== undefined && (obj.maxsupply = message.maxsupply);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateToken };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.maxsupply !== undefined && object.maxsupply !== null) {
            message.maxsupply = object.maxsupply;
        }
        else {
            message.maxsupply = 0;
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = '';
        }
        return message;
    }
};
const baseMsgUpdateTokenResponse = {};
export const MsgUpdateTokenResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTokenResponse };
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
        const message = { ...baseMsgUpdateTokenResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateTokenResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    MintAndSendTokens(request) {
        const data = MsgMintAndSendTokens.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'MintAndSendTokens', data);
        return promise.then((data) => MsgMintAndSendTokensResponse.decode(new Reader(data)));
    }
    CreateToken(request) {
        const data = MsgCreateToken.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'CreateToken', data);
        return promise.then((data) => MsgCreateTokenResponse.decode(new Reader(data)));
    }
    UpdateToken(request) {
        const data = MsgUpdateToken.encode(request).finish();
        const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'UpdateToken', data);
        return promise.then((data) => MsgUpdateTokenResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
