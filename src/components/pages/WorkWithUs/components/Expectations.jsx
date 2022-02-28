import React from "react";
import { IconsBox } from "../../../common/iconBox/IconsBox";
export const Expectations = () => {
  return (
    <>
      <div style={{ minHeight: "40vh" }} className="text-center">
        <div className="d-flex flex-column mt-5 pt-5">
          <div className="mb-5">
            <h3>ما از شما چه می‌خواهیم؟ </h3>
          </div>

          <div className="row p-0 mb-5 ">
            {srcArr.map((item, index) => (
              <div className="col-6 mb-3 mb-lg-0 col-lg text-center d-flex justify-content-center align-items-center mb-5 ">
                <IconsBox src={item.item1} text={item.text} />
              </div>
            ))}
          </div>
          <div className="p-0 px-lg-5 mb-5">
            <p>
              {" "}
              <br /> اگر به بازارهای مالی علاقه دارید، پیشرفت شغلی برایتان مهم
              است، به دنبال فعالیت در محیطی سالم و منعطف هستید و در حوزه .شغلی
              خود مهارت و توانایی‌های کافی دارید، ما در خانواده بزرگ و جوان مبین
              سرمایه پذیرای شما عزیزان هستیم
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const srcArr = [
  { item1: "#Group 379", text: "سخت‌کوشی" },
  { item1: "#Group 380", text: "خلاقیت " },
  { item1: "#Group 381", text: "تعامل " },
  { item1: "#Group 384", text: "تخصص" },
];
