import React from "react";
import style from "../style.module.css";
import { Link } from "react-router-dom";
export const NavItem = ({ itemNav, setClick, setDropDown }) => {
  const handleClick = () => {
    setClick(false);
    setDropDown(null);
  };

  return (
    <>
      <div className={style.itemNav}>
        <div className="ml-1 pr-2">
          {" "}
          <span></span>
        </div>
        <div style={{ fontSize: "13px" }} onClick={handleClick}>
          {itemNav.route.includes("http") ? (
            <a target="_blank" href={itemNav.route} rel="noreferrer">
              {itemNav.text}
            </a>
          ) : (
            <Link
              className={itemNav.route ? "" : style.textMuted}
              to={itemNav.route}
            >
              {itemNav.text}
            </Link>
          )}
          {/* <LinkDowload
            className={itemNav.route ? "" : style.textMuted}
            to={itemNav.route}
          >
            {itemNav.text}
          </LinkDowload> */}
        </div>
      </div>
    </>
  );
};
