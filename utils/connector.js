import { InjectedConnector } from "@web3-react/injected-connector";

const Metamask = new InjectedConnector({
  supportedNetworks: [1, 2, 3, 4, 5, 56, 97],
});

export default Metamask;
