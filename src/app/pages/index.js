import React, {useEffect} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3";

import Hero from "../patterns/hero";
import Story from "../patterns/story";

import Roadmap from "../patterns/roadmap";
import Faqs from "../patterns/faqs";
import Footer from "../patterns/footer";
import Mint from "../patterns/mint";
import {UserProvider} from "../core/user/user-provider";

import 'react-notifications-component/dist/theme.css'
import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import {getLocalStorageWalletAddress} from "../utils/wallet";
import {useUser} from "../core/user/user-context";

export default function Home() {

  return (
      <UserProvider>
          <ReactNotification/>
          <Router>
            <div className={styles.container}>
                <Hero />
                <Mint />
                <Story />
              {/* <NftCollection /> */}
              <Roadmap />
              <Faqs />
              {/* <Teams /> */}
            </div>
            <Footer />
          </Router>
      </UserProvider>
  );
}
