// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgReadChannel } from "./types/channel/tx";
import { MsgCreateChannel } from "./types/channel/tx";
import { MsgDeleteChannel } from "./types/channel/tx";
import { MsgUpdateChannel } from "./types/channel/tx";
const types = [
    ["/sonrio.sonr.channel.MsgReadChannel", MsgReadChannel],
    ["/sonrio.sonr.channel.MsgCreateChannel", MsgCreateChannel],
    ["/sonrio.sonr.channel.MsgDeleteChannel", MsgDeleteChannel],
    ["/sonrio.sonr.channel.MsgUpdateChannel", MsgUpdateChannel],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgReadChannel: (data) => ({ typeUrl: "/sonrio.sonr.channel.MsgReadChannel", value: MsgReadChannel.fromPartial(data) }),
        msgCreateChannel: (data) => ({ typeUrl: "/sonrio.sonr.channel.MsgCreateChannel", value: MsgCreateChannel.fromPartial(data) }),
        msgDeleteChannel: (data) => ({ typeUrl: "/sonrio.sonr.channel.MsgDeleteChannel", value: MsgDeleteChannel.fromPartial(data) }),
        msgUpdateChannel: (data) => ({ typeUrl: "/sonrio.sonr.channel.MsgUpdateChannel", value: MsgUpdateChannel.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
