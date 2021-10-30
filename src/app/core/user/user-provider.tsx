import React, {useState} from 'react';

import { UserContext } from './user-context';
import { setLocalStorageWalletStatus } from '../../utils/wallet';
import { toast } from '../../utils/notification.util';

import Web3Modal from "web3modal";
// @ts-ignore
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

declare global {
    interface Window {
        ethereum: any;
    }
}

export const UserProvider = (props: React.PropsWithChildren<{}>) => {

  const [walletAddress, setWalletAddress] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(-1);
  const [ethWeb3, setEthWeb3] = useState<any>();

    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: '9aa3d95b3bc440fa88ea12eaa4456161'
            }
        },
    };

    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });

    const connectWallet = async () => {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
        await subscribeProvider(provider);
        setEthWeb3(web3);
    }

    const bscNetworkChainId = '0x4';

    const subscribeProvider = async (provider: any) => {
        if (!provider.on) {
            return;
        }
        provider.on("close", () => {
            setWalletAddress('');
        });
        provider.on("accountsChanged", handleAccountsChanged);
        provider.on("chainChanged", async (chainId: number) => {

        });

        provider.on("networkChanged", async (networkId: number) => {

        });
    };

    const handleAccountsChanged = async (accounts: string[]) => {
        if(accounts.length === 0) {
            setWalletAddress('');
            setLocalStorageWalletStatus('').then();
        } else {
            setWalletAddress(accounts[0]);
            setLocalStorageWalletStatus(accounts[0]).then();
        }
    }

  return (
    <UserContext.Provider value={{
      walletAddress: walletAddress,
      setWalletAddress: setWalletAddress,
      token: token,
      setToken: setToken,
      connectWallet: connectWallet,
      pageIndex: pageIndex,
      setPageIndex: setPageIndex,
      ethWeb3: ethWeb3,
    }}>
      { props.children }
    </UserContext.Provider>
  );

}
