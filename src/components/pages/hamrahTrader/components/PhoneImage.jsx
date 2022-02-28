import React from "react";
import styled from "../style.module.css";
import classNames from "classnames";
import LineOrange from "../../../common/LineOrange/LineOrange";

export const PhoneImage = () => {
  return (
    <>
      <div style={{ padding: "150px 0" }}>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-lg-6 text-center text-lg-right mb-5">
              <div className="text-center d-flex justify-content-center justify-content-lg-start mb-5">
                <div className={styled.logo}>
                  <img src={"/asset/images/hamrah/unnamed.jpg"} alt="" />
                </div>
              </div>

              <div className="mb-5">
                <h3
                  style={{ fontWeight: "700" }}
                  // className="d-flex align-items-center"
                >
                  <span style={{ fontWeight: "100" }}>نرم افزار</span> همراه
                  تریدر
                </h3>
                <LineOrange />
              </div>
              <div className="d-lg-none">
                <img
                  src={"/asset/images/hamrah/Group 134.jpg"}
                  className="img-fluid mb-5"
                  alt=""
                />
              </div>
              <p>
                {" "}
                نرم افزار همراه تریدر، اولین اپلیکیشن خرید و فروش آنلاین سهام
                بروی تلفن همراه ، که از سال ۱۳۹۱ برای بازار بورس ایران تولید و
                در دسترس فعالان این حوزه قرار داشت، با تغییرات ظاهری و افزایش
                امکانات کاربردی در قالب یک اپ جدید برای گوشی و .در دسترس قرار
                گرفت iOS تبلت های اندروید و
              </p>
              <div className="row justify-content-center justify-content-lg-start">
                <div className={classNames("col-12 col-lg-6", styled.btnWhy)}>
                  <a target="_blank" href="https://www.etadbir.com/MobileTrading/M-Trader/M-TraderPro.plist" rel="noreferrer">iOS دانلود مستقیم نسخه</a>
                </div>
                <div className={classNames("col-12 col-lg-6", styled.btnWhy)}>
                  <a 
                  target="_blank"
                    href="
https://play.google.com/store/apps/details?id=com.sefryektadbir.mobiletradingpro
"
                  >
                    دانلود نسخه اندروید
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center d-none d-lg-flex justify-content-center">
              <div>
                <img
                  src={"/asset/images/hamrah/Group 134.jpg"}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
