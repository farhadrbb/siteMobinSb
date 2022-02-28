import React from "react";
import { InfoIcon } from "./InfoIcon";

export const InfoIcons = () => {
  return (
    <>
      <div className="row mb-5 text-center justify-content-center">
        {item.map((item, index) => (
          <div className="col-6 col-lg mb-4 mb-lg-0 " key={index}>
            <InfoIcon item={item}  />
          </div>
        ))}
      </div>
    </>
  );
};
let item = [
  { src: "#Group 388", text: "میلیون نفر مشتری", int: "1+" },
  { src: "#Group 394", text: "شعبه فعال در سراسر کشور", int: "90+" },
  { src: "#Group 395", text: "دفتر پیشخوان همکار", int: "1000+" },
  {
    src: "#Group 396",
    text: "سال سابقه فعالیت در بازار سرمایه",
    int: "10+",
  },
  { src: "#Group 397", text: "نفر پرسنل همکار", int: "300+" },
];
