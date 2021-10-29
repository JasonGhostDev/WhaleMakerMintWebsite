import React from "react";
import styles from "../styles/Home.module.css";


//text_sec_14
//text_pri_14;
const Roadmap = () => {
  const renderRoadmaps = (
    <div className={styles.roadmapCardWrapper}>
      <div className={styles.roadmapCard}>
        <p className="text_pri_14">First Wave</p>
        <div className={styles.pointer}>
          <p></p>
        </div>
        <ul>
          <li className="text_sec_14">1000 Whale Sharks will be minted</li>
          <li className="text_sec_14">Private sale ONLY</li>
          <li className="text_sec_14">
            You must meet OG Whale Status see server
            <a href="https://discord.gg/Npfz78G5" style={{ display: "block" }}>
              https://discord.gg/Npfz78G5
            </a>
          </li>
          <li className="text_sec_14 ">Launch of WhaleMakerDAO</li>
        </ul>
        
      </div>
      <div className={styles.roadmapCard}>
        <p className="text_pri_14">Second Wave</p>
        <div className={styles.pointer}>
          <p></p>
        </div>
        <ul>
          <li className="text_sec_14">
            Top industry artists is minting only 1000 Whale Sharks
          </li>
          <li className="text_sec_14">Launch of Whale Shark Alpha Chat</li>
        </ul>
        
      </div>
      <div className={styles.roadmapCard}>
        <p className="text_pri_14">Third Wave</p>
        <div className={styles.pointer}>
          <p></p>
        </div>
        <ul>
          <li className="text_sec_14">Launch of the Aquarium</li>
          <li className="text_sec_14">
            Stake your Whale Pass to earn 10 $KRILL per day
          </li>
        </ul>
        
      </div>
      <div className={styles.roadmapCard}>
        <p className="text_pri_14">Fourth Wave</p>
        <div className={styles.pointer}>
          <p></p>
        </div>
        <ul>
          <li className="text_sec_14">Launch of the Whale Store</li>
          <li className="text_sec_14">Use your $KRILL to redeem</li>
          <li className="text_sec_14">Premint on partner projects</li>
          <li className="text_sec_14">Whitelist on partner projects</li>
        </ul>
        
      </div>
      <div className={styles.roadmapCard}>
        <p className="text_pri_14">Fifth Wave</p>
        <div className={styles.pointer}>
          <p></p>
        </div>
        <ul>
          <li className="text_sec_14">Coming Soon</li>
        </ul>
        
      </div>
      );
    </div>
  );

  return (
    <div className={styles.roadmap}>
      <center className="text_pri_32">Roadmap</center>
      {renderRoadmaps}
    </div>
  );
};

export default Roadmap;
