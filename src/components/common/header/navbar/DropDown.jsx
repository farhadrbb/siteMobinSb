import React from "react";

import classNames from "classnames";
import styles from "../style.module.css";
import { NavBox } from "../nav/NavBox";

export const DropDown = ({ itemAll, flag, setClick, setDropDown }) => {
  return (
    <>
      <div className={classNames(styles.dropDownMenu, "row")}>
        {itemAll.map((item, index) => (
          <div
            className={classNames(styles.divider, "col-12 col-lg p-3")}
            key={index}
          >
            <NavBox
              item={item}
              setClick={setClick}
              flag={flag}
              setDropDown={setDropDown}
            />
          </div>
        ))}
      </div>
    </>
  );
};
