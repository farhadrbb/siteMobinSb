import React from "react";
import styles from "../../style.module.css";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const MarketReturn = () => {
  return (
    <>
      <div
        style={{ minHeight: "50vh", backgroundColor: "#F2F4F6" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 text-center text-lg-right d-flex justify-content-center">
              <div className="d-flex flex-column justify-content-center  ">
                <div className="d-flex align-items-end mb-5 ">
                  <div className="d-flex flex-column justify-content-center align-items-center ml-4 ml-lg-5">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ff5f00",
                        display:'flex',
                        flexDirection:'column'
                      }}
                    >
                      <span>1831+</span>
                      <span style={{fontSize:12,display:'inline-block',textAlign:'center'}}>درصد</span>
                    </span>
                    <div className={styles.range}></div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#ff5f00",
                      }}
                    >
                      بورس
                    </span>
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center ml-4 ml-lg-5">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "black",
                        display:'flex',
                        flexDirection:'column'
                      }}
                    >
                      <span>723+</span>
                      <span style={{fontSize:12,display:'inline-block',textAlign:'center'}}>درصد</span>
                    </span>
                    <div className={styles.range2}></div>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "100",
                        color: "black",
                      }}
                    >
                      دلار
                    </span>
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center ml-4 ml-lg-5">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "black",
                        display:'flex',
                        flexDirection:'column'
                      }}
                    >
                      <span>672+</span>
                      <span style={{fontSize:12,display:'inline-block',textAlign:'center'}}>درصد</span>
                    </span>
                    <div
                      className={styles.range2}
                      style={{ height: "75px" }}
                    ></div>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "100",
                        color: "black",
                      }}
                    >
                      سکه
                    </span>
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center ml-4 ml-lg-5">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "black",
                        display:'flex',
                        flexDirection:'column'
                      }}
                    >
                      <span>604+</span>
                      <span style={{fontSize:12,display:'inline-block',textAlign:'center'}}>درصد</span>
                    </span>
                    <div
                      className={styles.range2}
                      style={{ height: "65px" }}
                    ></div>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "100",
                        color: "black",
                      }}
                    >
                      مسکن
                    </span>
                  </div>

                  <div className="d-flex flex-column justify-content-center align-items-center ml-4 ml-lg-5">
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "black",
                        display:'flex',
                        flexDirection:'column'
                      }}
                    >
                      <span>299+</span>
                      <span style={{fontSize:12,display:'inline-block',textAlign:'center'}}>درصد</span>
                    </span>
                    <div
                      className={styles.range2}
                      style={{ height: "35px" }}
                    ></div>
                    <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "100",
                        color: "black",
                      }}
                    >
                      سپرده بانکی
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p style={{ fontSize: "13px" }}>
                    این آمار از سال 1391 تا 1399 می باشد
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6  text-center text-lg-right px-5  ">
              <div className="mb-5  my-5">
                <h3>بازدهی بازارهای مالی</h3>
                <LineOrange />
              </div>
              <div className="mb-5 ">
                <p style={{ fontSize: "15px", fontWeight: "200" }}>
                  {" "}
                  دغدغه‌ اصلی سرمایه‌گذاران در بازارهای مختلف، کسب بازدهی معقول
                  ضمن تحمل کمترین ریسک ممکن است. یکی از معیارهای اساسی برای
                  تعیین بهترین محل سرمایه‌گذاری، بررسی سوابق بازدهی بازارها است
                  که بر اساس گزارشات آماری، ما بازار سرمایه را !به شما پیشنهاد
                  می‌کنیم
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
