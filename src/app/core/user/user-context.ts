
import { createContext, useContext } from 'react';

export type UserContextType = {
  walletAddress: string,
  setWalletAddress: (address: string) => void;
  token: string,
  setToken: (token: string) => void;
  connectWallet: () => void;
  pageIndex: number,
  setPageIndex: (pageIndex: number) => void;
  ethWeb3: any;
}

export const UserContext = createContext<UserContextType>({
  walletAddress: '',
  setWalletAddress: (address: string) => {},
  token: 'string',
  setToken: (token: string) => {},
  connectWallet: () => {},
  pageIndex: -1,
  setPageIndex: () => {},
  ethWeb3: null,
});

export const useUser = () => useContext(UserContext);
