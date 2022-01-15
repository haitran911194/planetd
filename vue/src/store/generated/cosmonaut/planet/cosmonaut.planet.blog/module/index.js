// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
const types = [
    ["/cosmonaut.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/cosmonaut.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/cosmonaut.planet.blog.MsgDeletePost", MsgDeletePost],
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
        msgCreatePost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgCreatePost", value: MsgCreatePost.fromPartial(data) }),
        msgUpdatePost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgUpdatePost", value: MsgUpdatePost.fromPartial(data) }),
        msgDeletePost: (data) => ({ typeUrl: "/cosmonaut.planet.blog.MsgDeletePost", value: MsgDeletePost.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
