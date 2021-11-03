import React, {useEffect, useState} from "react";
import { BigNumber } from 'bignumber.js';
import cn from "classnames";
import Web3 from "web3";

import {whaleSharkAddress} from "./web3-abi-address/address";
import {whaleSharkAbi} from "./web3-abi-address/abi";
import {useUser} from "../core/user/user-context";
import {toast} from "../utils/notification.util";
import {lengthOfAddress} from "../utils/wallet";
import {BNtoNum} from "../utils";
import styles from "../styles/Home.module.css";

const Mint = () => {

    const { walletAddress, connectWallet } = useUser();
    const [mintCount, setMintCount] = useState('');
    const [userBalance, setUserBalance] = useState(0);
  //  const bscWeb3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'));
    const [primaryPrice, setPrimaryPrice] = useState(new BigNumber(0));

    const ethereum = window.ethereum;
    const metaWeb3 = new Web3(ethereum);
    const ethWeb3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'));
   // const ethWeb3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'));

    useEffect(() => {
        const whaleContract = new ethWeb3.eth.Contract(whaleSharkAbi, whaleSharkAddress);
        whaleContract.methods.getPrice().call().then((result) => {
            setPrimaryPrice(new BigNumber(result));
        })
       
        getAccountBalance();
    })
    const  getAccountBalance = async () =>  {
        if(walletAddress.length === lengthOfAddress)
        { 
            const ethBalance = await metaWeb3.eth.getBalance(walletAddress);
            setUserBalance(ethBalance);
        }
        
    }
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
                    <div>
                        <p className="text_sec_16" style={{ fontSize: "1em" }}> 
                            Mint Price: {BNtoNum(primaryPrice)} ETH
                        </p>
                        <p className="text_sec_16" style={{ fontSize: "1em" }}> 
                            Balance: {BNtoNum(userBalance)} ETH
                        </p>
                    </div>
                    <button className={styles.primaryBtn} onClick={() => {
                      
                        if(walletAddress.length === lengthOfAddress) {
                            console.log("sadfsdfds");
                            if(parseInt(mintCount) === 0 || !mintCount) {
                                toast('danger', 'Please input mint count.')
                                return;
                            }
                           
                            const whaleContract = new metaWeb3.eth.Contract(whaleSharkAbi, whaleSharkAddress);
                            whaleContract.methods.walletOfOwner(walletAddress).call().then(mintedCount => {
                                console.log(Number(mintedCount.length) + Number(mintCount));
                              

                                    whaleContract.methods.mintWhale(mintCount).send({ from: walletAddress, value: primaryPrice*mintCount }).then((result) => {
                                        toast('success', 'SUCCESS');
                                    });
                               
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
