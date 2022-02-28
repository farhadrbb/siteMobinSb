import React from "react";
import LineOrange from "../../../common/LineOrange/LineOrange";

export const CommonFund = ({ item, btn }) => {
  return (
    <>
      <div
        style={{ minHeight: "50px", marginBottom: "100px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container">
          {/*<div className="row flex-column-reverse flex-lg-row" >*/}
          <div className={`row `}>
            <div className="col-12 col-lg-6 d-flex justify-content-center flex-column d-lg-none mb-5 ">
              <div className="text-center text-lg-right pr-3 pt-5 p-lg-0  ">
                <div className="mb-3 pr-0 pr-lg-4">
                  <h3>صندوق‌ سرمایه‌گذاری مشترک مبین ‌سرمایه </h3>
                  <LineOrange />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "200" }}>
                    صندوق سرمایه‌گذاری مشترک مبین سرمایه در سال 1394 با مجوز
                    سازمان بورس و اوراق بهادار تأسیس شد. این صندوق از نوع در
                    سهام بوده و ارزش دارایی‌های آن در پنج سال اخیر بیش از 20
                    برابر شده است. برای مشاهده سوابق عملکرد و ارزش خالص هر واحد
                    صندوق مبین سرمایه می‌توانید به وبسایت مرکز پردازش اطلاعات
                    مالی ایران (fipiran.com) یا وبسایت صندوق سرمایه‌گذاری مبین
                    سرمایه (fund.mobinsb.ir) مراجعه کنید.
                  </p>
                </div>
                {btn}
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <img
                className="img-fluid"
                src={"/asset/images/fundImages/Group 336.png"}
                alt="f"
              />
            </div>
            <div className="col-12 col-lg-6 d-lg-flex d-none justify-content-center flex-column ">
              <div className="text-center text-lg-right pr-3 pt-5 p-lg-0  ">
                <div className="mb-3 pr-0 pr-lg-4">
                  <h3>صندوق‌ سرمایه‌گذاری مشترک مبین ‌سرمایه </h3>
                  <LineOrange />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "200" }}>
                    صندوق سرمایه‌گذاری مشترک مبین سرمایه در سال 1394 با مجوز
                    سازمان بورس و اوراق بهادار تأسیس شد. این صندوق از نوع در
                    سهام بوده و ارزش دارایی‌های آن در پنج سال اخیر بیش از 20
                    برابر شده است. برای مشاهده سوابق عملکرد و ارزش خالص هر واحد
                    صندوق مبین سرمایه می‌توانید به وبسایت مرکز پردازش اطلاعات
                    مالی ایران (fipiran.com) یا وبسایت صندوق سرمایه‌گذاری مبین
                    سرمایه (fund.mobinsb.ir) مراجعه کنید.
                  </p>
                </div>
                {btn}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
