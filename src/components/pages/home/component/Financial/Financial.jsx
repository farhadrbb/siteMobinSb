import React from "react";
import InfoImage from "./InfoImage";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const Financial = () => {
  return (
    <>
      <div
        style={{ minHeight: "30vh" }}
        className="d-flex justify-content-center p-10 align-items-center"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="d-flex flex-column justify-content-center align-items-center">
              نهادهای مالی
              <LineOrange />
            </h3>
          </div>
          <div className="row mb-5">
            {items.map((itm, ind) => (
              <div className="col-lg col-6" key={ind}>
                <InfoImage itm={itm} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

let items = [
  {
    text: "سازمان بورس و اوراق بهادار",
    src: "/asset/images/homeImage/logoHome/image/logo-1.png",
    link: "https://www.seo.ir",
  },
  {
    text: "بورس اوراق بهادار تهران",
    src: "/asset/images/homeImage/logoHome/image/logo-2.png",
    link: "https://www.tse.ir",
  },
  {
    text: "فرا بورس",
    src: "/asset/images/homeImage/logoHome/image/logo-4.png",
    link: "https://www.ifb.ir",
  },
  {
    text: "بورس کالای ایران",
    src: "/asset/images/homeImage/logoHome/image/logo-3.png",
    link: "https://www.seo.ir",
  },
  {
    text: "بورس انرژی",
    src: "/asset/images/homeImage/logoHome/image/logo-6.png",
    link: "https://www.ime.ir",
  },
  {
    text: "کانون کارگزاران بورس",
    src: "/asset/images/homeImage/logoHome/image/logo-5.png",
    link: "https://www.irenex.ir",
  },
  {
    text: "شرکت مدیریت فناوری بورس تهران",
    src: "/asset/images/homeImage/logoHome/image/3246346_1.png",
    link: "http://www.tsetmc.com/Loader.aspx?ParTree=15",
  },
  {
    text: "شرکت سپرده‌گذاری مرکزی",
    src: "/asset/images/homeImage/logoHome/image/651984651_1.png",
    link: "https://csdiran.ir",
  },
];
