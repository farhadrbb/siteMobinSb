import React from "react";
import styles from "./style.module.css";
import LineOrange from "../LineOrange/LineOrange";

export const BourseTittle = ({ text }) => {
  return (
    <>
      <div className={styles.sectionTittle}>
        <div className="d-flex justify-content-center align-items-center flex-column p-4  p-lg-5 ">
          <div className="mb-4">
            <h3 className="d-flex flex-column justify-content-center align-items-center">
              {text.item2}
              <LineOrange />
            </h3>
          </div>
          <div style={{ fontSize: "17px" }}>
            <p className="mt-3">{text.item}</p>
          </div>
        </div>
      </div>
    </>
  );
};
