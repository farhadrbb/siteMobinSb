import React from "react";
import { CalcRecruitment } from "./CalcRecruitment";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const HowCooperation = ({ setFilterForm, filterForm }) => {
  return (
    <>
      <div className="text-center" style={{ margin: "90px 0" }}>
        <h3 className="d-flex justify-content-center flex-column align-items-center">
          چطور با مبین‌سرمایه همکاری کنیم؟
          <LineOrange />
        </h3>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row ">
          {text.map((item, index) => (
            <div className="col-6 mb-3">
              <CalcRecruitment
                filterForm={filterForm}
                setFilterForm={setFilterForm}
                key={index}
                item={item}
                id={index}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
let text = [
  {
    src: "#Group 388",
    text2: "پیوستن به تیم مبین سرمایه",
    btn: "تکمیل فرم استخدام",
  },
  { src: "#Group 389", text2: "اخذ نمایندگی / بازاریابی", btn: "تکمیل فرم" },
];
