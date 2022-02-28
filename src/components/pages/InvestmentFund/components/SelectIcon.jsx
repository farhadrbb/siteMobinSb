import React from "react";
import { UlItem } from "../../../common/ulColumn/UlItem";
import styles from "../style.module.css"
// import LineOrange from "../LineOrange/LineOrange";

export const SelectIcon = ({text}) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column  ">
     
      <div className="w-100  ">
        <ul className={styles.list}>
          {text.map((di, index) => (
            <UlItem items={di.item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
