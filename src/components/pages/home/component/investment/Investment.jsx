import React from "react";
import styles from "./style.module.css";
import { UlMap } from "../../../../common/ulColumn/UlMap";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const Investment = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="container">
          <div className="row py-5 text-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6">
              <div>
                <UlMap
                  text={textItem}
                  title={"چرا در بورس سرمایه‌گذاری کنیم؟"}
                />
                <div className="container">
                  <div className={styles.btnWhy}>
                    <a
                      href="https://smart.mobinsb.ir"
                      target="_blank"
                      rel="noreferrer"
                    >
                      سرمایه گذاری در بورس
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5 text-center">
              <div>
                <img
                  className={styles.imageWhy}
                  src={
                    "/asset/images/iStock-1059661424-e1598366722783-2048x1075.png"
                  }
                  alt=""
                />
                <img
                  className={styles.imageFilter}
                  src={"/asset/images/Rectangle 158.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="text-center mb-4  d-lg-none d-flex justify-content-center">
              <h3
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ fontSize: "25px" }}
              >
                چرا در بورس سرمایه‌گذاری کنیم؟
                <LineOrange />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const textItem = [
  { item: "بیشترین بازدهی سرمایه‌گذاری" },
  { item: "نقدشوندگی بالا " },
  { item: "کمک به رشد اقتصادی کشور" },
  { item: "ابزار سرمایه‌گذاری متنوع" },
  { item: "شفافیت اطلاعاتی" },
  { item: "امنیت دارایی" },
];
