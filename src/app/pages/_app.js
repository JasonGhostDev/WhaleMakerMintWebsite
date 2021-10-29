import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

import Footer from "../patterns/footer";

//IMPORTING GLOBAL STYLES

import "../styles/globals.css";

//INITIALIZING WEB3 LIBRARY

const getLibrary = (provider) => {
  return new Web3(provider);
};

function MyApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
      <Footer />
    </Web3ReactProvider>
  );
}

export default MyApp;
