import React from "react";
import { IconsBox } from "../../../../common/iconBox/IconsBox";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const ImportantProduct = () => {
  const srcArr = [
    { item1: "#Group 344", text: "نفت خام" },
    { item1: "#Group 345", text: "زغال سنگ" },
    { item1: "#Group 346", text: "متانول" },
    { item1: "#Group 347", text: "قطران" },
    { item1: "#Group 348", text: "برق" },
    { item1: "#Group 349", text: "نفت خام" },
  ];

  return (
    <>
      <div className="text-center mb-5">
        <h3 className="d-flex flex-column justify-content-center align-items-center">
          مهم‌ترین کالاهای قابل معامله در بورس انرژی
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
};
