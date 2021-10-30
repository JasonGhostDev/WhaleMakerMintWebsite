import React from "react";
import styles from "../styles/patterns/story.module.css";

const Story = () => {
  const renderWhatIsWhaleMarket = (
    <div className={styles.market}>
      <div>
        <p className="text_pri_32">What is The Whale Maker?</p>
        <div className={styles.story_block}>
          <div>
            {/* <p className="text_sec_16" style={{ margin: "1em 0 1.5em" }}>
              <span
                style={{ fontWeight: "bold", fontSize: "1.1em" }}
                className="text_sec_16"
              >
                WHAT IS WHALE PASS?
              </span>
              <p>
                Whale Pass is the NFT for this project and has various rewards:
                access to │og-whale chat access to premint, presale, and
                whitelist for our partner projects + airdrops from our partners
              </p>
            </p> */}
            <p className="text_sec_16" style={{ margin: "1em 0 1.5em" }}>
              <span
                style={{ fontWeight: "bold", fontSize: "1.1em" }}
                className="text_sec_16"
              >
                {" "}
                WHAT IS WHALE SHARK?
              </span>
              <p>
                Each Whale Shark has upgraded benefits such as: It gets you
                access to the WhaleMakerDAO and Alpha Chat It gives you 10x
                staking rewards It gives you first access to premint, presale,
                and whitelist for our partner projects
              </p>
            </p>
            <p className="text_sec_16" style={{ margin: "1em 0 1.5em" }}>
              <span
                style={{ fontWeight: "bold", fontSize: "1.1em" }}
                className="text_sec_16"
              >
                HOW DOES STAKING WORK?{" "}
              </span>
              <p className="text_sec_16">
                Our token will be called $KRILL.You'll get 10 per day for Whale
                Shark $KRILL.We will have the "Whale Shop" where only owners can
                buy premint, presale, and whitelist - only using $KRILL (so
                it'll have direct utility)
              </p>
            </p>
          </div>
          <div>
            <p
              className="text_sec_16"
              style={{ margin: "1em 0 1.5em" }}
              
            >
              <span
                style={{ fontWeight: "bold", fontSize: "1.1em" }}
                className="text_sec_16"
              >
                {" "}
                WHAT IS ALPHA CHAT?
              </span>
              <p className="text_sec_16">
                Alpha chat is a private chat reserved for Whale Sharks. This
                community based chat is designed to seek out opportunities and
                validate potential projects. It is a DAO Driven Community who
                votes on any and all group participation in projects.
              </p>
            </p>
            <p
              className="text_sec_16"
              style={{ margin: "1em 0 1.5em" }}
             
            >
              <span
                style={{ fontWeight: "bold", fontSize: "1.1em" }}
                className="text_sec_16"
              >
                WHAT IS THE WHALEMAKERDAO?
              </span>
              <p className="text_sec_16">
                WhaleShark is a governance token. By owning WhaleShark, you can
                vote on WhaleMakerDAO proposals and work on your own proposals
                with other WhaleMakerDAO members. Owning any number of
                WhaleSharks allows access to WhaleMakerDAO channels where you
                can help steer the future of WhaleMakerDAO within our
                committees.
              </p>
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div>
            <p className="text_pri_32 mb-10">6+</p>
            <p className="text_sec_16">Nations</p>
            <img src="/icons/globePassthrough.svg" alt="globe" />
          </div>
        </div>
        <div className={styles.card}>
          <p className="text_pri_32 mb-10">101+</p>
          <p className="text_sec_16">Traits</p>
          <img src="/icons/swordPassthrough.svg" alt="sword" />
        </div>
        <div className={styles.card}>
          <p className="text_pri_32 mb-10">10k</p>
          <p className="text_sec_16">Whales</p>
          <img src="/icons/logoPassthrough.svg" alt="logo" />
        </div>
      </div> */}
    </div>
  );

  return (
    <div className={styles.story} style={{ width: "60%", margin: "0 auto" }}>
      {renderWhatIsWhaleMarket}
      {/* <div className={styles.flexGap} style={{ marginTop: "-4em" }}>
        <img src="/icons/turtle.svg" alt="fish" className={styles.fish2} />
        <img src="/icons/redFish.svg" alt="fish" className={styles.fish3} />
        <img src="/icons/whiteFish.svg" alt="fish" className={styles.fish1} />
      </div> */}
      {/* <div className={styles.flexGap}>
        <img src="/icons/redFish.svg" alt="fish" className={styles.fish1} />
        <img src="/icons/whiteFish.svg" alt="fish" className={styles.fish2} />
        <img src="/icons/turtle.svg" alt="fish" className={styles.fish3} />
      </div> */}
    </div>
  );
};

export default Story;
