import React from "react";
import styled from "./style.module.css";
import { PhoneImage } from "./components/PhoneImage";
import { InfoApp } from "./components/InfoApp";
import { BoxesSquare } from "./components/BoxesSquare";
import classNames from "classnames";
import { FooterApp } from "./components/FooterApp";


export const HamrahTrader = () => {
  return (
    <>
      <div className={styled.section1}>
        <div
          className="d-flex justify-content-center align-items-center fixed-bottom d-lg-none"
          style={{
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <a
            href="http://club.mobinsb.ir/User/Login?q="
            className={styled.btnBackImage}
          >
            دانلود مستقیم نسخه ios{" "}
          </a>
          <a href="/#" className={styled.btnBackImageGlass}>
            <span className="ml-2">دانلود نسخه اندروید</span>{" "}
          </a>
        </div>

        <div className="container">
          <PhoneImage />
          <InfoApp />
          <div className={classNames("row", styled.boxSquare)}>
            {itemBox.map((item, index) => (
              <div
                className="col-6 col-lg text-center d-flex justify-content-center "
                key={index}
              >
                <BoxesSquare item={item} />
              </div>
            ))}
          </div>
        </div>
        <FooterApp />
      </div>
    </>
  );
};
let itemBox = [
  { src: "#Group 600", text: "نمایش پرتفوی لحظه‌ای" },
  { src: "#Group 602", text: "نمایش پرتفوی لحظه‌ای" },
  { src: "#Group 332", text: "ورود با اثر انگشت" },
  { src: "#Group 601", text: "تقسیم سفارشات بزرگتر" },
  { src: "#Group 603", text: "تغییر کارگزار ناظر" },
  { src: "#Group 604", text: "نمایش اطلاعات بازار بورس و فرا بورس" },
];
