import React, {useEffect, useState} from "react";
import { BigNumber } from 'bignumber.js';
import cn from "classnames";
import Web3 from "web3";

import styles from "../styles/Home.module.css";
import {whaleSharkAddress} from "./web3-abi-address/address";
import {whaleSharkAbi} from "./web3-abi-address/abi";
import {useUser} from "../core/user/user-context";
import {toast} from "../utils/notification.util";
import {lengthOfAddress} from "../utils/wallet";

const Mint = () => {

    const { walletAddress, connectWallet } = useUser();

    const ethereum = window.ethereum;
    const metaWeb3 = new Web3(ethereum);
    const ethWeb3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'));
    const [primaryPrice, setPrimaryPrice] = useState(0);

    useEffect(() => {
        const whaleContract = new ethWeb3.eth.Contract(whaleSharkAbi, whaleSharkAddress);
        whaleContract.methods.getPrice().call().then((result) => {
            setPrimaryPrice(new BigNumber(result));
        })
    })

    return (
        <div className={styles.faq}>
            <p className="text_pri_32" style={{ textAlign: "center", width: "100%" }}>
                MINT
            </p>
            <div className={styles.faqCardWrapper}>
                <div className={cn(styles.mintCard)}>
                    <button className={styles.primaryBtn} onClick={() => {
                        if(walletAddress.length === lengthOfAddress) {
                            const whaleContract = new metaWeb3.eth.Contract(whaleSharkAbi, whaleSharkAddress);
                            whaleContract.methods.walletOfOwner(walletAddress).call().then(mintedCount => {
                                if(mintedCount.length >= 2) {
                                    toast('danger', "Maximum of mint per wallet is 2 WHALESHARKS.")
                                } else {
                                    whaleContract.methods.mintWhale(1).send({ from: walletAddress, value: primaryPrice }).then((result) => {
                                        toast('success', 'SUCCESS');
                                    });
                                }
                            });
                        } else {
                            connectWallet();
                        }
                    }}>
                        { walletAddress.length === lengthOfAddress ? "Mint Whale" : "Connect wallet" }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mint;
