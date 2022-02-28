import React from "react";
import styled from "../style.module.css";
export const BoxesSquare = ({ item }) => {
  return (
    <>
      <div className={styled.box}>
        <div className="mb-2">
          {/*<img*/}
          {/*  src={"/asset/images/hamrah/Group 332.png"}*/}
          {/*  className="img-fluid p-3"*/}
          {/*  alt=""*/}
          {/*/>*/}
          <svg
            className="icon  img-fluid px-2"
            style={{ width: "150px", height: "70px" }}
          >
            <use xlinkHref={`/sprite.svg${item.src}`}></use>
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "12px" }}>{item.text}</p>
        </div>
      </div>
    </>
  );
};
