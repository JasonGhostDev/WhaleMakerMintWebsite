import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Home.module.css";

import Metamask from "../utils/connector";
import {useUser} from "../core/user/user-context";
import {lengthOfAddress} from "../utils/wallet";

const Header = () => {

    const { walletAddress, connectWallet } = useUser();
console.log("sdf = ", lengthOfAddress)
  return (
    <div className={styles.header}>
      <Link href="/">
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
        onClick={walletAddress.length === lengthOfAddress ? null : () => {
          connectWallet()
      }}
      >
        <span>
          {walletAddress
            ? `${walletAddress?.slice(0, 6)}...${walletAddress?.slice(walletAddress?.length - 6)}`
            : "connect wallet"}
        </span>
        <img src="/icons/wallet.svg" alt="wallet" />
      </button>
    </div>
  );
};

export default Header;
