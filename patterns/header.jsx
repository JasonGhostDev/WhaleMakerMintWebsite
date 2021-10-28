import React from "react";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";

import styles from "../styles/Home.module.css";

import Metamask from "../utils/connector";

const Header = () => {
  const { activate, account, active } = useWeb3React();

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
        onClick={active ? null : () => activate(Metamask)}
      >
        <span>
          {account
            ? `${account?.slice(0, 6)}...${account?.slice(account?.length - 6)}`
            : "connect wallet"}
        </span>
        <img src="/icons/wallet.svg" alt="wallet" />
      </button>
    </div>
  );
};

export default Header;
