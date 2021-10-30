import React, { useState } from "react";
import styles from "../styles/Home.module.css";

import { faqs } from "../data/faqs";

const Card = ({ question, ans }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqCard}>
      <div className={styles.flex} onClick={() => setOpen((open) => !open)}>
        <p className="text_pri_14">{question}</p>
        {open ? (
          <img src="/icons/minus.svg" alt="minus" width={24} height={24} />
        ) : (
          <img src="/icons/plus.svg" alt="plus" width={24} height={24} />
        )}
      </div>
      {open && (
        <ul className="text_sec_14" style={{ padding: "1em 2em" }}>
          {ans.map((info, index) => {
            return <li key={index}>{info}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

const Faqs = () => {
  const renderFaqs = (
    <div className={styles.faqCardWrapper}>
      {faqs.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );

  return (
    <div className={styles.faq}>
      <p className="text_pri_32" style={{ textAlign: "center", width: "100%" }}>
        FAQs
      </p>
      {renderFaqs}
    </div>
  );
};

export default Faqs;
