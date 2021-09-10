// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgMintAndSendTokens: (data: MsgMintAndSendTokens): EncodeObject => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgMintAndSendTokens", value: data }),
    msgCreateDenom: (data: MsgCreateDenom): EncodeObject => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgCreateDenom", value: data }),
    msgUpdateDenom: (data: MsgUpdateDenom): EncodeObject => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgUpdateDenom", value: data }),
    msgUpdateOwner: (data: MsgUpdateOwner): EncodeObject => ({ typeUrl: "/clockworkgr.pactolus.pactolus.MsgUpdateOwner", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
