import React from "react";
import { UlItem } from "./UlItem";
import styles from "./style.module.css";
import LineOrange from "../LineOrange/LineOrange";

export const UlMap = ({ text, title }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column  ">
      <div
        className="text-center pt-3  pr-md-2 d-lg-flex w-100 d-none"
        style={{ marginBottom: "65px" }}
      >
        <h3 className=" flex-column d-lg-flex ">
          {title}
          <LineOrange />
        </h3>
      </div>

      <div className="w-100  ">
        <ul className={styles.list}>
          {text.map((di, index) => (
            <UlItem items={di.item} key={index} />
            // <a download href={"/asset/test/New Text Document.txt"}>
            //   {di.item}
            // </a>
          ))}
        </ul>
      </div>
    </div>
  );
};
