/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'clockworkgr.pactolus.pactolus';
const baseToken = { denom: '', description: '', maxsupply: 0, supply: 0, precision: 0, ticker: '', url: '', canChangeSupply: false, owner: '' };
export const Token = {
    encode(message, writer = Writer.create()) {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        if (message.maxsupply !== 0) {
            writer.uint32(24).uint64(message.maxsupply);
        }
        if (message.supply !== 0) {
            writer.uint32(32).uint64(message.supply);
        }
        if (message.precision !== 0) {
            writer.uint32(40).uint32(message.precision);
        }
        if (message.ticker !== '') {
            writer.uint32(50).string(message.ticker);
        }
        if (message.url !== '') {
            writer.uint32(58).string(message.url);
        }
        if (message.canChangeSupply === true) {
            writer.uint32(64).bool(message.canChangeSupply);
        }
        if (message.owner !== '') {
            writer.uint32(74).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.maxsupply = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.supply = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.precision = reader.uint32();
                    break;
                case 6:
                    message.ticker = reader.string();
                    break;
                case 7:
                    message.url = reader.string();
                    break;
                case 8:
                    message.canChangeSupply = reader.bool();
                    break;
                case 9:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseToken };
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
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.description !== undefined && (obj.description = message.description);
        message.maxsupply !== undefined && (obj.maxsupply = message.maxsupply);
        message.supply !== undefined && (obj.supply = message.supply);
        message.precision !== undefined && (obj.precision = message.precision);
        message.ticker !== undefined && (obj.ticker = message.ticker);
        message.url !== undefined && (obj.url = message.url);
        message.canChangeSupply !== undefined && (obj.canChangeSupply = message.canChangeSupply);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseToken };
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
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        return message;
    }
};
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
