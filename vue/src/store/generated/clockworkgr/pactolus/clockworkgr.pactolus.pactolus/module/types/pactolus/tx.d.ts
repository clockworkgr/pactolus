import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "clockworkgr.pactolus.pactolus";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgUpdateOwner {
    owner: string;
    denom: string;
    newowner: string;
}
export interface MsgUpdateOwnerResponse {
}
export interface MsgMintAndSendTokens {
    owner: string;
    denom: string;
    amount: number;
    recipient: string;
}
export interface MsgMintAndSendTokensResponse {
}
export interface MsgCreateToken {
    owner: string;
    denom: string;
    description: string;
    maxsupply: number;
    supply: number;
    precision: number;
    ticker: string;
    url: string;
    canChangeSupply: boolean;
}
export interface MsgCreateTokenResponse {
}
export interface MsgUpdateToken {
    owner: string;
    denom: string;
    description: string;
    maxsupply: number;
    url: string;
}
export interface MsgUpdateTokenResponse {
}
export declare const MsgUpdateOwner: {
    encode(message: MsgUpdateOwner, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOwner;
    fromJSON(object: any): MsgUpdateOwner;
    toJSON(message: MsgUpdateOwner): unknown;
    fromPartial(object: DeepPartial<MsgUpdateOwner>): MsgUpdateOwner;
};
export declare const MsgUpdateOwnerResponse: {
    encode(_: MsgUpdateOwnerResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateOwnerResponse;
    fromJSON(_: any): MsgUpdateOwnerResponse;
    toJSON(_: MsgUpdateOwnerResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateOwnerResponse>): MsgUpdateOwnerResponse;
};
export declare const MsgMintAndSendTokens: {
    encode(message: MsgMintAndSendTokens, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintAndSendTokens;
    fromJSON(object: any): MsgMintAndSendTokens;
    toJSON(message: MsgMintAndSendTokens): unknown;
    fromPartial(object: DeepPartial<MsgMintAndSendTokens>): MsgMintAndSendTokens;
};
export declare const MsgMintAndSendTokensResponse: {
    encode(_: MsgMintAndSendTokensResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintAndSendTokensResponse;
    fromJSON(_: any): MsgMintAndSendTokensResponse;
    toJSON(_: MsgMintAndSendTokensResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintAndSendTokensResponse>): MsgMintAndSendTokensResponse;
};
export declare const MsgCreateToken: {
    encode(message: MsgCreateToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateToken;
    fromJSON(object: any): MsgCreateToken;
    toJSON(message: MsgCreateToken): unknown;
    fromPartial(object: DeepPartial<MsgCreateToken>): MsgCreateToken;
};
export declare const MsgCreateTokenResponse: {
    encode(_: MsgCreateTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTokenResponse;
    fromJSON(_: any): MsgCreateTokenResponse;
    toJSON(_: MsgCreateTokenResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateTokenResponse>): MsgCreateTokenResponse;
};
export declare const MsgUpdateToken: {
    encode(message: MsgUpdateToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateToken;
    fromJSON(object: any): MsgUpdateToken;
    toJSON(message: MsgUpdateToken): unknown;
    fromPartial(object: DeepPartial<MsgUpdateToken>): MsgUpdateToken;
};
export declare const MsgUpdateTokenResponse: {
    encode(_: MsgUpdateTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTokenResponse;
    fromJSON(_: any): MsgUpdateTokenResponse;
    toJSON(_: MsgUpdateTokenResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTokenResponse>): MsgUpdateTokenResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
    MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
    CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    /** rpc MintAndSendToken(MsgMintToken) returns (MsgMintTokenResponse); */
    UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
    MintAndSendTokens(request: MsgMintAndSendTokens): Promise<MsgMintAndSendTokensResponse>;
    CreateToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
