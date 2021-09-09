import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateToken } from "./types/pactolus/tx";
import { MsgMintAndSendTokens } from "./types/pactolus/tx";
import { MsgUpdateOwner } from "./types/pactolus/tx";
import { MsgCreateToken } from "./types/pactolus/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateToken: (data: MsgUpdateToken) => EncodeObject;
    msgMintAndSendTokens: (data: MsgMintAndSendTokens) => EncodeObject;
    msgUpdateOwner: (data: MsgUpdateOwner) => EncodeObject;
    msgCreateToken: (data: MsgCreateToken) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
