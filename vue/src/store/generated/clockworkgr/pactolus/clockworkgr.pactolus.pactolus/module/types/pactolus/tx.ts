/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'clockworkgr.pactolus.pactolus'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUpdateOwner {
  owner: string
  denom: string
  newowner: string
}

export interface MsgUpdateOwnerResponse {}

export interface MsgMintAndSendTokens {
  owner: string
  denom: string
  amount: number
  recipient: string
}

export interface MsgMintAndSendTokensResponse {}

export interface MsgCreateToken {
  owner: string
  denom: string
  description: string
  maxsupply: number
  supply: number
  precision: number
  ticker: string
  url: string
  canChangeSupply: boolean
}

export interface MsgCreateTokenResponse {}

export interface MsgUpdateToken {
  owner: string
  denom: string
  description: string
  maxsupply: number
  url: string
}

export interface MsgUpdateTokenResponse {}

const baseMsgUpdateOwner: object = { owner: '', denom: '', newowner: '' }

export const MsgUpdateOwner = {
  encode(message: MsgUpdateOwner, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.newowner !== '') {
      writer.uint32(26).string(message.newowner)
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
          message.newowner = reader.string()
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
    if (object.newowner !== undefined && object.newowner !== null) {
      message.newowner = String(object.newowner)
    } else {
      message.newowner = ''
    }
    return message
  },

  toJSON(message: MsgUpdateOwner): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.newowner !== undefined && (obj.newowner = message.newowner)
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
    if (object.newowner !== undefined && object.newowner !== null) {
      message.newowner = object.newowner
    } else {
      message.newowner = ''
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

const baseMsgCreateToken: object = { owner: '', denom: '', description: '', maxsupply: 0, supply: 0, precision: 0, ticker: '', url: '', canChangeSupply: false }

export const MsgCreateToken = {
  encode(message: MsgCreateToken, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description)
    }
    if (message.maxsupply !== 0) {
      writer.uint32(32).uint64(message.maxsupply)
    }
    if (message.supply !== 0) {
      writer.uint32(40).uint64(message.supply)
    }
    if (message.precision !== 0) {
      writer.uint32(48).uint32(message.precision)
    }
    if (message.ticker !== '') {
      writer.uint32(58).string(message.ticker)
    }
    if (message.url !== '') {
      writer.uint32(66).string(message.url)
    }
    if (message.canChangeSupply === true) {
      writer.uint32(72).bool(message.canChangeSupply)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateToken } as MsgCreateToken
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
          message.maxsupply = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.supply = longToNumber(reader.uint64() as Long)
          break
        case 6:
          message.precision = reader.uint32()
          break
        case 7:
          message.ticker = reader.string()
          break
        case 8:
          message.url = reader.string()
          break
        case 9:
          message.canChangeSupply = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken
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
    if (object.maxsupply !== undefined && object.maxsupply !== null) {
      message.maxsupply = Number(object.maxsupply)
    } else {
      message.maxsupply = 0
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = Number(object.supply)
    } else {
      message.supply = 0
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = Number(object.precision)
    } else {
      message.precision = 0
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = String(object.ticker)
    } else {
      message.ticker = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    if (object.canChangeSupply !== undefined && object.canChangeSupply !== null) {
      message.canChangeSupply = Boolean(object.canChangeSupply)
    } else {
      message.canChangeSupply = false
    }
    return message
  },

  toJSON(message: MsgCreateToken): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.description !== undefined && (obj.description = message.description)
    message.maxsupply !== undefined && (obj.maxsupply = message.maxsupply)
    message.supply !== undefined && (obj.supply = message.supply)
    message.precision !== undefined && (obj.precision = message.precision)
    message.ticker !== undefined && (obj.ticker = message.ticker)
    message.url !== undefined && (obj.url = message.url)
    message.canChangeSupply !== undefined && (obj.canChangeSupply = message.canChangeSupply)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken {
    const message = { ...baseMsgCreateToken } as MsgCreateToken
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
    if (object.maxsupply !== undefined && object.maxsupply !== null) {
      message.maxsupply = object.maxsupply
    } else {
      message.maxsupply = 0
    }
    if (object.supply !== undefined && object.supply !== null) {
      message.supply = object.supply
    } else {
      message.supply = 0
    }
    if (object.precision !== undefined && object.precision !== null) {
      message.precision = object.precision
    } else {
      message.precision = 0
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker
    } else {
      message.ticker = ''
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    if (object.canChangeSupply !== undefined && object.canChangeSupply !== null) {
      message.canChangeSupply = object.canChangeSupply
    } else {
      message.canChangeSupply = false
    }
    return message
  }
}

const baseMsgCreateTokenResponse: object = {}

export const MsgCreateTokenResponse = {
  encode(_: MsgCreateTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse
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

  fromJSON(_: any): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse
    return message
  },

  toJSON(_: MsgCreateTokenResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateTokenResponse>): MsgCreateTokenResponse {
    const message = { ...baseMsgCreateTokenResponse } as MsgCreateTokenResponse
    return message
  }
}

const baseMsgUpdateToken: object = { owner: '', denom: '', description: '', maxsupply: 0, url: '' }

export const MsgUpdateToken = {
  encode(message: MsgUpdateToken, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom)
    }
    if (message.description !== '') {
      writer.uint32(26).string(message.description)
    }
    if (message.maxsupply !== 0) {
      writer.uint32(32).uint64(message.maxsupply)
    }
    if (message.url !== '') {
      writer.uint32(42).string(message.url)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken
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
          message.maxsupply = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.url = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateToken {
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken
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
    if (object.maxsupply !== undefined && object.maxsupply !== null) {
      message.maxsupply = Number(object.maxsupply)
    } else {
      message.maxsupply = 0
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url)
    } else {
      message.url = ''
    }
    return message
  },

  toJSON(message: MsgUpdateToken): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.denom !== undefined && (obj.denom = message.denom)
    message.description !== undefined && (obj.description = message.description)
    message.maxsupply !== undefined && (obj.maxsupply = message.maxsupply)
    message.url !== undefined && (obj.url = message.url)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken {
    const message = { ...baseMsgUpdateToken } as MsgUpdateToken
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
    if (object.maxsupply !== undefined && object.maxsupply !== null) {
      message.maxsupply = object.maxsupply
    } else {
      message.maxsupply = 0
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url
    } else {
      message.url = ''
    }
    return message
  }
}

const baseMsgUpdateTokenResponse: object = {}

export const MsgUpdateTokenResponse = {
  encode(_: MsgUpdateTokenResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse
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

  fromJSON(_: any): MsgUpdateTokenResponse {
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse
    return message
  },

  toJSON(_: MsgUpdateTokenResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse {
    const message = { ...baseMsgUpdateTokenResponse } as MsgUpdateTokenResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>
  MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>
  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>
  /** rpc MintAndSendToken(MsgMintToken) returns (MsgMintTokenResponse); */
  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>
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

  CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse> {
    const data = MsgCreateToken.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'CreateToken', data)
    return promise.then((data) => MsgCreateTokenResponse.decode(new Reader(data)))
  }

  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish()
    const promise = this.rpc.request('clockworkgr.pactolus.pactolus.Msg', 'UpdateToken', data)
    return promise.then((data) => MsgUpdateTokenResponse.decode(new Reader(data)))
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
