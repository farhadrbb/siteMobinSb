import React, { useState } from "react";
import styled from "../style.module.css";
import { DropDown } from "./DropDown";
import { KeyboardArrowDown } from "@material-ui/icons";

export const NavItems = ({ text, item, id, dropDown, setDropDown, flag }) => {
  const [click, setClick] = useState(false);
  // // const [dropDown, setDropDown] = useState()
  //
  // const closeMobileMenu = () => {
  //     setClick(false)
  // }
  const handleLClick = (id) => {
    if (dropDown === id) {
      return setDropDown(null);
    }
    setClick(true);
    setDropDown(id);
  };

  const handleClick1 = (id) => {
    if (dropDown === id) {
      return setDropDown(null);
    }
    setClick(true);
    setDropDown(id);
  };
  // const handleBlur = () => {
  //   ("blur");
  //   setDropDown(null);
  // };

  return (
    <>
      <li
        className={styled.navItem}
        onMouseEnter={() => handleLClick(id)}
        onMouseLeave={() => handleLClick(id)}
        onClick={() => handleClick1(id)}
        // onScroll={handleBlur}
      >
        <a className={dropDown === id ? styled.navLink : styled.nalinkNot} >{//eslint-disable-line jsx-a11y/anchor-is-valid
  }
          {text}
          {text !== "باشگاه مشتریان" && text !== "شعب ودفاتر" ? (
            //eslint-disable-line jsx-a11y/anchor-is-valid
            <div
              className={
                dropDown === id ? styled.navIconActive : styled.navIcon
              }
            >
              <KeyboardArrowDown />
            </div>
          ) : null}
        </a>

        {dropDown === id &&
        click &&
        text !== "باشگاه مشتریان" &&
        text !== "شعب ودفاتر" ? (
          <DropDown
            itemAll={item}
            id={id}
            dropDown={dropDown}
            setDropDown={setDropDown}
            setClick={setClick}
            flag={flag}
          />
        ) : null}
      </li>
    </>
  );
};
