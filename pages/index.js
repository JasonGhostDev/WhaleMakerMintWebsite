import Head from "next/head";
import styles from "../styles/Home.module.css";

import Hero from "../patterns/hero";
import Story from "../patterns/story";
import NftCollection from "../patterns/nftCollection";
import Roadmap from "../patterns/roadmap";
import Faqs from "../patterns/faqs";
import Teams from "../patterns/teams";
import Footer from "../patterns/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Whale Maker Nft</title>
        <meta name="description" content="The Whale Maker Nft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Story />
      {/* <NftCollection /> */}
      <Roadmap />
      <Faqs />
      {/* <Teams /> */}
    </div>
  );
}
