import React from "react";
import { GetCodeIcon } from "./components/getCodeIcon/GetCodeIcon";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const GetCode = ({ items, tittle }) => {
  return (
    <>
      <div className="mb-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <div className="p-5 text-center mb-5">
              <h3 className="d-flex justify-content-center align-items-center flex-column">
                {tittle}
                <LineOrange />
              </h3>
            </div>

            {/*<div className="d-flex flex-grow-1  align-items-center justify-content-center mb-5 flex-wrap flex-lg-nowrap">*/}
            <div className="row">
              {items.map((item, index) => (
                <div className="col-12 col-lg" key={index}>
                  <GetCodeIcon item={item} index={index} items={items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
