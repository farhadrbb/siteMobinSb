import React from "react";
import { IconsBox } from "../../../common/iconBox/IconsBox";
import LineOrange from "../../../common/LineOrange/LineOrange";
export const MainCriterion = () => {
  return (
    <>
      <div
        style={{ minHeight: "60vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-5 mb-5 mb-lg-0">
              <img
                src={"/asset/images/sectionFigureCaption/Group 334.jpg"}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="text-center mb-5">
                <h3>معیارهای اصلی انتخاب صندوق سرمایه‌گذاری</h3>
                <div className="text-right pr-4">
                  <LineOrange />
                </div>
              </div>
              <div className="row px-3 my-5">
                {srcArr.map((item, index) => (
                  <div
                    className="col-6 d-flex justify-content-center mb-3"
                    key={index}
                  >
                    <IconsBox src={item.item1} text={item.text} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const srcArr = [
  {
    item1: "#Group 390",
    text: "بازدهی بلندمدت",
  },
  {
    item1: "#Group 391",
    text: "ضامن نقد شوندگی",
  },
  {
    item1: "#Group 393",
    text: "ضریب بتا",
  },
  {
    item1: "#Group 392",
    text: "روش کسب بازدهی",
  },
];
