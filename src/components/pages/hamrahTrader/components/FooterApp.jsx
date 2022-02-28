import React from "react";
import styled from "../style.module.css";
import classNames from "classnames";
export const FooterApp = () => {
  return (
    <>
      <div
        className={classNames(
          "d-flex justify-content-center align-items-center ",
          styled.sectionFooterOrange
        )}
      >
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row ">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column">
              <div className="mb-3">
                <h3 style={{ color: "white", fontSize: "30px" }}>
                  دانلود نرم‌افزار همراه ‌تریدر
                </h3>
              </div>

              <div className="row w-100">
                <div
                  className={classNames(
                    "col-12 col-lg-6 mb-2 mb-lg-0",
                    styled.btnWhyFooter
                  )}
                >
                  <a
                    target="_blank"
                    href="https://www.etadbir.com/MobileTrading/M-Trader/M-TraderPro.plist"
                    rel="noreferrer"
                  >
                    iOS دانلود مستقیم نسخه
                  </a>
                </div>
                <div
                  className={classNames("col-12 col-lg-6", styled.btnWhyFooter)}
                >
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
            <div className={classNames("col-12 col-lg-6 ", styled.footerImage)}>
              <img
                className="img-fluid p-4"
                src={"/asset/images/hamrah/low2.png"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
