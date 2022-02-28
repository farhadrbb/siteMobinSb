import React from "react";
import styles from "./style.module.css";

export const IconsBox = ({ src, text }) => {
  return (
    <div className={styles.cardOpen}>
      <div>
        {/*<img*/}
        {/*  src={src}*/}
        {/*  className="ml-2 img-fluid"*/}
        {/*  alt=""*/}
        {/*  style={{ minWidth: "60px" }}*/}
        {/*/>*/}
        <svg
          className="icon  img-fluid px-2"
          style={{ maxWidth: "90px", height: "55px" }}
        >
          <use xlinkHref={`/sprite.svg${src}`}></use>
        </svg>
      </div>
      <div className="text-right  ">
        <p style={{ fontWeight: "600", fontSize: "13px" }} className="m-0 px-2">
          {text}
        </p>
      </div>
    </div>
  );
};
