import React, {useEffect, useState} from "react";
import { BigNumber } from 'bignumber.js';
import cn from "classnames";
import Web3 from "web3";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Button,
} from 'reactstrap';

import {whaleSharkAddress} from "./web3-abi-address/address";
import {whaleSharkAbi} from "./web3-abi-address/abi";
import {useUser} from "../core/user/user-context";
import {toast} from "../utils/notification.util";
import {lengthOfAddress} from "../utils/wallet";

import styles from "../styles/Home.module.css";

const Mint = () => {

    const { walletAddress, connectWallet, ethWeb3 } = useUser();
    const [mintCount, setMintCount] = useState('');
    const bscWeb3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'));
    const [primaryPrice, setPrimaryPrice] = useState(new BigNumber(0));

    useEffect(() => {
        const whaleContract = new bscWeb3.eth.Contract(whaleSharkAbi, whaleSharkAddress);
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
                    <input className={styles.primaryBtn} value={mintCount} type='number' placeholder="Number of mint." onChange={(e) => {
                        console.log(e.target.value);
                        setMintCount(e.target.value.toString());
                    }}/>
                    <button className={styles.primaryBtn} onClick={() => {
                        if(parseInt(mintCount) === 0) {
                            toast('danger', 'Please input mint count.')
                        }
                        if(walletAddress.length === lengthOfAddress) {
                            const whaleContract = new ethWeb3.eth.Contract(whaleSharkAbi, whaleSharkAddress);
                            whaleContract.methods.walletOfOwner(walletAddress).call().then(mintedCount => {
                                console.log(mintedCount);
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
