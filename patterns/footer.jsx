import React from "react";
import Link from "next/link";
import styles from "../styles/patterns/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.content}>
        <p className="text_pri_32">Join Community</p>
        <p className="text_sec_14" style={{ margin: "1.5em 0" }}>
          Molestie donec consectetur vestibulum amet, placerat sed porttitor
          pellentesque sit. Velit est ut laoreet tortor euismod elementum. Dui
          lacus bibendum blandit diam in porta amet. Vestibulum eget in proin
          non ut. Dictumst leo tempor quam orci est mole.
        </p>
        <a
          href="https://discord.gg/Npfz78G5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="secondary_btn">Join our discord</button>
        </a>
      </div> */}
      <div className={styles.flexGap}>
        <p className="text_sec_14">
          Proudly powered by Whale Marker NFT Pools© 2021. All rights reserved.
        </p>
        <div className={styles.flex}>
          <Link href="/privacy_policy">Privacy Policy</Link>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="github" />
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
      </div>
    </footer>
  );
};

export default Footer;
