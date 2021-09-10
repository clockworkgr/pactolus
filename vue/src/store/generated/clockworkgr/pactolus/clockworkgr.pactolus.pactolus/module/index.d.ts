import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintAndSendTokens } from "./types/pactolus/tx";
import { MsgCreateDenom } from "./types/pactolus/tx";
import { MsgUpdateDenom } from "./types/pactolus/tx";
import { MsgUpdateOwner } from "./types/pactolus/tx";
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
    msgMintAndSendTokens: (data: MsgMintAndSendTokens) => EncodeObject;
    msgCreateDenom: (data: MsgCreateDenom) => EncodeObject;
    msgUpdateDenom: (data: MsgUpdateDenom) => EncodeObject;
    msgUpdateOwner: (data: MsgUpdateOwner) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
