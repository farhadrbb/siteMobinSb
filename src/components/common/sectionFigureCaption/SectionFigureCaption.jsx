import React from "react";
import LineOrange from "../LineOrange/LineOrange";

export const SectionFigureCaption = ({ item, btn }) => {
  return (
    <>
      <div className="container">
        {/*<div className="row flex-column-reverse flex-lg-row" >*/}
        <div className={`row + flex-column-reverse ${item.nameClass}`}>
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <img className="img-fluid" src={item.src} alt="f" />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center flex-column ">
            <div className="text-center text-lg-right pr-3 pt-5 p-lg-0  ">
              <div className="mb-3">
                <h3>{item.title}</h3>
                <LineOrange />
              </div>
              <div>
                <p style={{ fontSize: "15px", fontWeight: "200" }}>
                  {item.text}
                </p>
              </div>
              {btn}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
