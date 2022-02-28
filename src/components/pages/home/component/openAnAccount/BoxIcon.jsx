import React from "react";
import styles from "./style.module.css";

const BoxIcon = ({ itm }) => {
  return (
    <>
      <div className={styles.cardOpen}>
        <div className="ml-2">
          <img src={itm.src} alt="" />
        </div>
        <div className={styles.cardText}>
          <h6
            style={{
              fontWeight: "600",
              fontSize: "13px",
              whiteSpace: "nowrap",
            }}
          >
            {itm.title}
          </h6>
          <p style={{ fontSize: "12px" }}>{itm.text}</p>
        </div>
      </div>
    </>
  );
};

export default BoxIcon;
