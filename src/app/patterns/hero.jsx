import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import styles from "../styles/patterns/hero.module.css";


import {getLocalStorageWalletAddress, lengthOfAddress, setLocalStorageWalletStatus} from "../utils/wallet";

import {useUser} from "../core/user/user-context";

const Hero = () => {
  const { walletAddress, connectWallet } = useUser();

    useEffect(() => {
        loadWallet().then();
    })

    const loadWallet = async () => {
        if(getLocalStorageWalletAddress() !== '') {
            console.log(getLocalStorageWalletAddress());
           
        } else {
           
        }
    }

  const renderSocialMediaLinks = (
    <div className={styles.flex}>
      <a href="/">
        <img
          src="/icons/github.svg"
          alt="github"
          target="_blank"
          rel="noopener noreferrer"
        />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src="/icons/twitter.svg" alt="twiiter" />
      </a>
      <a
        href="https://discord.gg/Npfz78G5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/discord.svg" alt="discord" />
      </a>
    </div>
  );

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.header}>
          <Link to="/">
            <img
              src="/logo.svg"
              alt="logo"
              width={60}
              height={40}
              style={{ cursor: "pointer" }}
            />
          </Link>
          <button
              className={styles.connect}
              onClick={async () => {
                  if(walletAddress.length === lengthOfAddress) {
                     
                      setLocalStorageWalletStatus('').then();
                  } else {
                      await connectWallet();
                  }
              }}
          >
            <span>
              {walletAddress.length === lengthOfAddress
                  ? `${walletAddress?.slice(0, 6)}...${walletAddress?.slice(walletAddress?.length - 6)}`
                  : "connect wallet"}
            </span>
            <img src="/icons/wallet.svg" alt="wallet" />
          </button>
        </div>
        <div className={styles.content}>
          <p className="text_pri_32" style={{ fontSize: "3em" }}>
            The Whale Maker
          </p>
          <p className="text_sec_16" style={{ fontSize: "1.4em" }}>
            A community driven NFT Project designed to support the ambitions of
            our OG Whale Collectors.
          </p>
          <p className="text_sec_16" style={{ fontSize: "1.2em" }}>
            Each Whale Adoption is 0.5 + gas OG Whale Mint
          </p>
          {renderSocialMediaLinks}
        </div>
      </div>
    </>
  );
};

export default Hero;
