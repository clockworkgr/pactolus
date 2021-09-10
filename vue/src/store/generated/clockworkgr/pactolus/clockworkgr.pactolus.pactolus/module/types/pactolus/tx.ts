/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'clockworkgr.pactolus.pactolus'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUpdateOwner {
  owner: string
  denom: string
  newOwner: string
}

export interface MsgUpdateOwnerResponse {}

export interface MsgMintAndSendTokens {
  owner: string
  denom: string
  amount: number
  recipient: string
}

export interface MsgMintAndSendTokensResponse {}

export interface MsgCreateDenom {
  owner: string
  denom: string
  description: string
  ticker: string
  precision: number
  url: string
  maxSupply: number
  canChangeMaxSupply: boolean
}

export interface MsgCreateDenomResponse {}

export interface MsgUpdateDenom {
  owner: string
  denom: string
  description: string
  url: string
  maxSupply: number
  canChangeMaxSupply: boolean
}

export interface MsgUpdateDenomResponse {}

const baseMsgUpdateOwner: object = { owner: '', denom: '', newOwner: '' }

export const MsgUpdateOwner = {
  encode(message: MsgUpdateOwner, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.newOwner !== '') {
      writer.uint32(26).string(message.newOwner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOwner {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateOwner } as MsgUpdateOwner
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.denom = reader.string()
          break
        case 3:
          message.newOwner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateOwner {
    const message = { ...baseMsgUpdateOwner } as MsgUpdateOwner
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner)
    } else {
      message.newOwner = ''
    }
    return message
  },

  toJSON(message: MsgUpdateOwner): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.newOwner !== undefined && (obj.newOwner = message.newOwner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateOwner>): MsgUpdateOwner {
    const message = { ...baseMsgUpdateOwner } as MsgUpdateOwner
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner
    } else {
      message.newOwner = ''
    }
    return message
  }
}

const baseMsgUpdateOwnerResponse: object = {}

export const MsgUpdateOwnerResponse = {
  encode(_: MsgUpdateOwnerResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOwnerResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateOwnerResponse } as MsgUpdateOwnerResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateOwnerResponse {
    const message = { ...baseMsgUpdateOwnerResponse } as MsgUpdateOwnerResponse
    return message
  },

  toJSON(_: MsgUpdateOwnerResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse {
    const message = { ...baseMsgUpdateOwnerResponse } as MsgUpdateOwnerResponse
    return message
  }
}

const baseMsgMintAndSendTokens: object = { owner: '', denom: '', amount: 0, recipient: '' }

export const MsgMintAndSendTokens = {
  encode(message: MsgMintAndSendTokens, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount)
    }
    if (message.recipient !== '') {
      writer.uint32(34).string(message.recipient)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintAndSendTokens {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintAndSendTokens } as MsgMintAndSendTokens
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.denom = reader.string()
          break
        case 3:
          message.amount = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.recipient = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgMintAndSendTokens {
    const message = { ...baseMsgMintAndSendTokens } as MsgMintAndSendTokens
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    return message
  },

  toJSON(message: MsgMintAndSendTokens): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.amount !== undefined && (obj.amount = message.amount)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    return obj
  },

  fromPartial(object: DeepPartial<MsgMintAndSendTokens>): MsgMintAndSendTokens {
    const message = { ...baseMsgMintAndSendTokens } as MsgMintAndSendTokens
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    return message
  }
}

const baseMsgMintAndSendTokensResponse: object = {}

export const MsgMintAndSendTokensResponse = {
  encode(_: MsgMintAndSendTokensResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintAndSendTokensResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintAndSendTokensResponse } as MsgMintAndSendTokensResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgMintAndSendTokensResponse {
    const message = { ...baseMsgMintAndSendTokensResponse } as MsgMintAndSendTokensResponse
    return message
  },

  toJSON(_: MsgMintAndSendTokensResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgMintAndSendTokensResponse>): MsgMintAndSendTokensResponse {
    const message = { ...baseMsgMintAndSendTokensResponse } as MsgMintAndSendTokensResponse
    return message
  }
}

const baseMsgCreateDenom: object = { owner: '', denom: '', description: '', ticker: '', precision: 0, url: '', maxSupply: 0, canChangeMaxSupply: false }

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description)
    }
    if (message.ticker !== '') {
      writer.uint32(34).string(message.ticker)
    }
    if (message.precision !== 0) {
      writer.uint32(40).uint32(message.precision)
    }
    if (message.url !== '') {
      writer.uint32(50).string(message.url)
    }
    if (message.maxSupply !== 0) {
      writer.uint32(56).uint64(message.maxSupply)
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(64).bool(message.canChangeMaxSupply)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.denom = reader.string()
          break
        case 3:
          message.description = reader.string()
          break
        case 4:
          message.ticker = reader.string()
          break
        case 5:
          message.precision = reader.uint32()
          break
        case 6:
          message.url = reader.string()
          break
        case 7:
          message.maxSupply = longToNumber(reader.uint64() as Long)
          break
        case 8:
          message.canChangeMaxSupply = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateDenom {
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = String(object.ticker)
    } else {
      message.ticker = ''
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = Number(object.precision)
    } else {
      message.precision = 0
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Number(object.maxSupply)
    } else {
      message.maxSupply = 0
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply)
    } else {
      message.canChangeMaxSupply = false
    }
    return message
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.description !== undefined && (obj.description = message.description)
    message.ticker !== undefined && (obj.ticker = message.ticker)
    message.precision !== undefined && (obj.precision = message.precision)
    message.url !== undefined && (obj.url = message.url)
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply)
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker
    } else {
      message.ticker = ''
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision
    } else {
      message.precision = 0
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply
    } else {
      message.maxSupply = 0
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply
    } else {
      message.canChangeMaxSupply = false
    }
    return message
  }
}

const baseMsgCreateDenomResponse: object = {}

export const MsgCreateDenomResponse = {
  encode(_: MsgCreateDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCreateDenomResponse {
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse
    return message
  },

  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse
    return message
  }
}

const baseMsgUpdateDenom: object = { owner: '', denom: '', description: '', url: '', maxSupply: 0, canChangeMaxSupply: false }

export const MsgUpdateDenom = {
  encode(message: MsgUpdateDenom, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description)
    }
    if (message.url !== '') {
      writer.uint32(34).string(message.url)
    }
    if (message.maxSupply !== 0) {
      writer.uint32(40).uint64(message.maxSupply)
    }
    if (message.canChangeMaxSupply === true) {
      writer.uint32(48).bool(message.canChangeMaxSupply)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDenom } as MsgUpdateDenom
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.denom = reader.string()
          break
        case 3:
          message.description = reader.string()
          break
        case 4:
          message.url = reader.string()
          break
        case 5:
          message.maxSupply = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.canChangeMaxSupply = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateDenom {
    const message = { ...baseMsgUpdateDenom } as MsgUpdateDenom
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = Number(object.maxSupply)
    } else {
      message.maxSupply = 0
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = Boolean(object.canChangeMaxSupply)
    } else {
      message.canChangeMaxSupply = false
    }
    return message
  },

  toJSON(message: MsgUpdateDenom): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.description !== undefined && (obj.description = message.description)
    message.url !== undefined && (obj.url = message.url)
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply)
    message.canChangeMaxSupply !== undefined && (obj.canChangeMaxSupply = message.canChangeMaxSupply)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateDenom>): MsgUpdateDenom {
    const message = { ...baseMsgUpdateDenom } as MsgUpdateDenom
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    if (object.maxSupply !== undefined && object.maxSupply !== null) {
      message.maxSupply = object.maxSupply
    } else {
      message.maxSupply = 0
    }
    if (object.canChangeMaxSupply !== undefined && object.canChangeMaxSupply !== null) {
      message.canChangeMaxSupply = object.canChangeMaxSupply
    } else {
      message.canChangeMaxSupply = false
    }
    return message
  }
}

const baseMsgUpdateDenomResponse: object = {}

export const MsgUpdateDenomResponse = {
  encode(_: MsgUpdateDenomResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDenomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDenomResponse } as MsgUpdateDenomResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateDenomResponse {
    const message = { ...baseMsgUpdateDenomResponse } as MsgUpdateDenomResponse
    return message
  },

  toJSON(_: MsgUpdateDenomResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateDenomResponse>): MsgUpdateDenomResponse {
    const message = { ...baseMsgUpdateDenomResponse } as MsgUpdateDenomResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>
  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>
  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse> {
    const data = MsgUpdateOwner.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'UpdateOwner', data)
    return promise.then((data) => MsgUpdateOwnerResponse.decode(new Reader(data)))
  }

  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse> {
    const data = MsgMintAndSendTokens.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'MintAndSendTokens', data)
    return promise.then((data) => MsgMintAndSendTokensResponse.decode(new Reader(data)))
  }

  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'CreateDenom', data)
    return promise.then((data) => MsgCreateDenomResponse.decode(new Reader(data)))
  }

  UpdateDenom(request: MsgUpdateDenom): Promise<MsgUpdateDenomResponse> {
    const data = MsgUpdateDenom.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'UpdateDenom', data)
    return promise.then((data) => MsgUpdateDenomResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
