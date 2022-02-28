import React from "react";
export const InfoIcon = ({ item }) => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="mb-2">
            {/*<img src={item.src} alt=""/>*/}
            <svg
              className="icon  img-fluid px-2"
              style={{ width: "90px", height: "55px" }}
            >
              <use xlinkHref={`/sprite.svg${item.src}`}></use>
            </svg>
          </div>
          <div>
            <span style={{ fontSize: "25px", fontWeight: "700" }}>
              {item.int}
            </span>
          </div>
          <div className="text-center">
            <span>{item.text}</span>
          </div>
        </div>
      </div>
    </>
  );
};
