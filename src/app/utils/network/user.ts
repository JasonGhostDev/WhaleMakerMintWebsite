import { toast } from '../notification.util';
import { environment } from '../../../environment';

// export const bscNetworkChainId = '0x6357d2e0'; // testNet
// export const bscNetworkChainId = '0x63564c40'; // mainNet
export const bscNetworkChainId = '0x4';

export const isEthNetwork = async () => {
    // @ts-ignore
    const { ethereum } = window;
    if(!ethereum) {
        return;
    }
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    if (chainId.toLocaleUpperCase() !== bscNetworkChainId.toLocaleUpperCase()) {
        toast('danger', 'Please select network of MetaMask as "Harmony Test Network"');
        return false;
    }
    return true;
};

export function getUserByWalletAddress(walletAddress: string) {
    return fetch(`${ environment.serverUrl }/user/${walletAddress}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then(handleResponse)
}

function handleResponse(response: any) {
    return response.json();
}
