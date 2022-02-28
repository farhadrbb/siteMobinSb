import React from "react";
import { IconsBox } from "../../../common/iconBox/IconsBox";
import LineOrange from "../../../common/LineOrange/LineOrange";

export default function Advantages() {
  const srcArr = [
    { item1: "#fund1", text: "مدیریت حرفه‌ای دارایی" },
    { item1: "#fund3", text: "نقدشوندگی بالا" },
    { item1: "#fund2", text: "ریسک و بازدهی بهینه " },
    { item1: "#fund4", text: "صرفه‌جویی درهزینه و زمان" },
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h3 className="d-flex flex-column justify-content-center align-items-center">
          مزایای صندوق‌ سرمایه‌گذاری
          <LineOrange />
        </h3>
      </div>
      <div className="row text-center justify-content-center   mb-5">
        {srcArr.map((item, index) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4 p-1" key={index}>
            <IconsBox src={item.item1} text={item.text} />
          </div>
        ))}
      </div>
    </>
  );
}
