import React from "react";
import style from "../style.module.css";
export const DropBoxNav = ({ item }) => {
  return (
    <>
      <div className={style.HeaderDorp}>
        <h6>{item.title}</h6>
      </div>
    </>
  );
};
