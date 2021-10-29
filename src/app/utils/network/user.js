import { toast } from '../notification.util';
import { environment } from '../../../environment';

// export const bscNetworkChainId = '0x6357d2e0'; // testNet
// export const bscNetworkChainId = '0x63564c40'; // mainNet

export function getUserByWalletAddress(walletAddress) {
    return fetch(`${ environment.serverUrl }/user/${walletAddress}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET',
    }).then(handleResponse)
}

function handleResponse(response) {
    return response.json();
}
