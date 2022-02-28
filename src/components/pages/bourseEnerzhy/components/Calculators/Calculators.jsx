import React from "react";

import { CalcBox } from "./components/CalcBox";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const Calculators = ({ setFilter, filter }) => {
  return (
    <>
      <div style={{ minHeight: "40vh" }}>
        <div className="d-flex justify-content-center align-items-center flex-column  py-5 text-center ">
          <h3 className="d-flex justify-content-center align-items-center flex-column">
            محاسبه گرهای بورس انرژی
            <LineOrange />
          </h3>
        </div>
        <div className="row mb-5 ">
          {text.map((item, index) => (
            <div className="col-12 col-lg mb-5" key={index}>
              <CalcBox
                src={item.src}
                text={item.text}
                text2={item.text2}
                id={index}
                filter={filter}
                setFilter={setFilter}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

let text = [
  { src: "#Group 350", text: "محاسبه", text2: "کارمزد بازار  برق" },
  { src: "#Group 351", text: "محاسبه", text2: "کارمزد بازار فیزیکی" },
  { src: "#Group 352", text: "محاسبه", text2: "کارمزد بازار پتروشیمی" },
  { src: "#Group 353", text: "محاسبه گر", text2: "تقسیم به نسبت کالا" },
  { src: "#Group 354", text: "تبدیل", text2: "واحدهای نفتی" },
];
