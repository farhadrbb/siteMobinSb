import styles from "../../../common/ulColumn/style.module.css";
import React from "react";

export const SystemLinkIcon = ({ items }) => {
  return (
    <>
      <a target={"_blank"} href={items.link}>
        <li className={styles.listItem}>
          <img
            src={"/asset/images/Path 80.png"}
            width="20"
            className="ml-4 ml-lg-1"
            alt=""
          />
          {items.item}
        </li>
      </a>
    </>
  );
};
