// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintAndSendTokens } from "./types/pactolus/tx";
import { MsgCreateDenom } from "./types/pactolus/tx";
import { MsgUpdateDenom } from "./types/pactolus/tx";
import { MsgUpdateOwner } from "./types/pactolus/tx";
const types = [
    ["/clockworkgr.pactolus.pactolus.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/clockworkgr.pactolus.pactolus.MsgCreateDenom", MsgCreateDenom],
    ["/clockworkgr.pactolus.pactolus.MsgUpdateDenom", MsgUpdateDenom],
    ["/clockworkgr.pactolus.pactolus.MsgUpdateOwner", MsgUpdateOwner],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgMintAndSendTokens: (data) => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgMintAndSendTokens", value: data }),
        msgCreateDenom: (data) => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgCreateDenom", value: data }),
        msgUpdateDenom: (data) => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgUpdateDenom", value: data }),
        msgUpdateOwner: (data) => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgUpdateOwner", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
