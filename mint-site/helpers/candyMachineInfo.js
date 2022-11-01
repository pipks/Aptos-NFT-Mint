export const candyMachineAddress = "0x777da46692da4c46ddb4cac7bfecb2702104fb46e955d8829f6ff59ec72d6737";
export const collectionName = "TestCollection101"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmbNB4GzfpZJzMPw2qS5DEqbdnBJcmYDESPKA6bWyH1Dcm";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xc17197699c1a5c2d594bda3482e06cda9a7fe87378cbaec2b55aacd03e3f45d3";
export const COLLECTION_SIZE = 10
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
