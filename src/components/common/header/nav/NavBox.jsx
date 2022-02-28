import React from "react";
import { DropBoxNav } from "./DropBoxNav";
import { NavItem } from "./NavItem";
import style from "../style.module.css";
export const NavBox = ({ item, setClick, flag, setDropDown }) => {
  return (
    <>
      {flag ? (
        <DropDownElement item={item} />
      ) : (
        <>
          <DropBoxNav item={item} />
          {item.text.map((item, index) => (
            <NavItem
              itemNav={item}
              key={index}
              setClick={setClick}
              setDropDown={setDropDown}
            />
          ))}
        </>
      )}
    </>
  );
};

export const DropDownElement = ({ item }) => {
  return (
    <>
      {item.text.map((itm, ind) => (
        <div className={style.HeaderDorp} key={ind}>
          {/*{("itm", itm)}*/}
          <h6 className={itm.route ? "" : style.textMuted}>
            <a
              target="_blank"
              href="https://club.mobinsb.ir/Course/Index"
              rel="noreferrer"
            >
              {itm.text}
            </a>
          </h6>
          {/*className={itemNav.route?"":style.textMuted}*/}
          {ind - 1 ? <hr /> : null}
        </div>
      ))}
    </>
  );
};
