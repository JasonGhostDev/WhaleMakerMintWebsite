import React from "react";
import { nftCollection } from "../data/nftCollection";
import styles from "../styles/patterns/nftcollection.module.css";

const NftCollection = () => {
  const renderCollections = (
    <div className={styles.cardWrapper}>
      {nftCollection.map((data, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.image}>
              <img src={data.image} alt={data.name} />
            </div>
            <div>
              <p className="text_pri_14">{data.name}</p>
              <p className="text_sec_14" style={{ margin: "1em 0" }}>
                {data.description}
              </p>
              <a href={data.to}>
                <button className="secondary_btn">Learn more</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={styles.nftCollection}>
      <p className="text_pri_32">Discover The Whale Maker Collection</p>
      {renderCollections}
    </div>
  );
};

export default NftCollection;
