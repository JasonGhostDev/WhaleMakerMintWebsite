import React, { useState } from 'react';

import { UserContext } from './user-context';
import { setLocalStorageWalletStatus } from '../../utils/wallet';
import { toast } from '../../utils/notification.util';
import { isEthNetwork } from '../../utils/network/user'

declare global {
    interface Window {
        ethereum: any;
    }
}

export const UserProvider = (props: React.PropsWithChildren<{}>) => {

  const [walletAddress, setWalletAddress] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(-1);

    const connectWallet = () => {
        if(window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(handleAccountsChanged)
                .catch(async (err: any) => {
                    setWalletAddress('');
                    setLocalStorageWalletStatus('').then();
                    if (err.code === 4001) {
                        toast('danger', 'Please connect to MetaMask.');
                    }
                });
        } else {
            toast('danger', 'Please install Metamask.')
        }
    }

    const handleAccountsChanged = async (accounts: string[]) => {
        if (!await isEthNetwork()) {
            setWalletAddress('');
            setLocalStorageWalletStatus('').then();
            return;
        }
        if (!accounts || !accounts.length) {
            setWalletAddress('');
            setLocalStorageWalletStatus('').then();
            toast('danger', 'Please connect to MetaMask.');
            return;
        }
        console.log(accounts[0]);
        setWalletAddress(accounts[0])
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
    }}>
      { props.children }
    </UserContext.Provider>
  );

}