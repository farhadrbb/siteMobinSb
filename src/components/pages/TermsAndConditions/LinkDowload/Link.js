import React from "react";
import LineOrange from "../../../common/LineOrange/LineOrange";
import styles from "../../../common/ulColumn/style.module.css";
import { UlItemLink } from "./Map";

const LinkDownload = ({ text, title }) => {
  return (
    <>
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
          <ul className={styles.list} style={{ columns: "1" }}>
            {text.map((di, index) => (
              <UlItemLink items={di} key={index} />
              // <a download href={"/asset/test/New Text Document.txt"}>
              //   {di.item}
              // </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LinkDownload;
