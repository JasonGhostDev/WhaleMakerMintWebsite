import { environment } from '../../environment';

export const lengthOfAddress = 42;

export async function setLocalStorageWalletStatus(address) {
  await window.localStorage.setItem(environment.localStorageKeys.walletAddress, address);
}

export function getLocalStorageWalletAddress() {
  const address = window.localStorage.getItem(environment.localStorageKeys.walletAddress);
  return address || '';
}

export function reduceTheWalletAddress(walletAddress) {
  if(walletAddress === undefined) {
    return '';
  }
  if(walletAddress.length !== lengthOfAddress){
    return '';
  }
  const reducedAddress = walletAddress ? `${walletAddress.substring(0, 4)  }...${  walletAddress.substring(walletAddress.length - 4)}` : '';
  return reducedAddress;
}

export function cutWalletAddress(walletAddress) {
  if(walletAddress === undefined) {
    return '';
  }
  if(walletAddress.length !== lengthOfAddress){
    return '';
  }
  const reducedAddress = walletAddress ? `${walletAddress.substring(0, 12)  }...${  walletAddress.substring(walletAddress.length - 4)}` : '';
  return reducedAddress;
}