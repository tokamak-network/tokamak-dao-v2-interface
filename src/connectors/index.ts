import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";

// import {REACT_APP_MAINNET_INFURA_API, REACT_APP_RINKEBY_INFURA_API} from 'constants/index';

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/34448178b25e4fbda6d80f4da62afba2",
  5: "https://goerli.infura.io/v3/34448178b25e4fbda6d80f4da62afba2",
  11155111: "https://sepolia.infura.io/v3/34448178b25e4fbda6d80f4da62afba2",
};

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[5] },
  defaultChainId: 1,
});

const newWalletConnect = () =>
  new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1] },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    //@ts-ignore
    pollingInterval: POLLING_INTERVAL,
  });

const newWalletLink = () =>
  new WalletLinkConnector({
    url: RPC_URLS[1],
    appName: "",
  });

export const injected = new InjectedConnector({
  supportedChainIds: [1, 4, 5],
});

export const trazorConnector = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: "ale.s@onther.io",
  manifestAppUrl: "http://localhost:3000",
});

// Fixes https://github.com/NoahZinsmeister/web3-react/issues/124
// You can close and open walletconnect at will with this fix
export let walletconnect = newWalletConnect();
export let walletlink = newWalletLink();

export const resetWalletConnect = () => {
  walletconnect = newWalletConnect();
};

export const resetWalletLink = () => {
  walletlink = newWalletLink();
};
