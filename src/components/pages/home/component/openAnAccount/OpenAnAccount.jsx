import React from "react";
import styles from "./style.module.css";
import BoxIcon from "./BoxIcon";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const OpenAnAccount = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh", backgroundColor: "#F2F4F6" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="text-center d-flex justify-content-center d-lg-none  ">
                <h3
                  className="pt-5 d-flex flex-column align-items-center"
                  style={{ fontSize: "25px" }}
                >
                  مبین‌سرمایه انتخاب حرفه‌ای‌ها
                  <LineOrange />
                </h3>
              </div>

              <img
                src={"/asset/images/backgroundImage/Group 389.png"}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-6 px-lg-0 py-lg-5">
              <div>
                <div className="text-right d-none d-lg-flex">
                  <h3 className="d-flex flex-column mb-4">
                    مبین‌سرمایه انتخاب حرفه‌ای‌ها
                    <LineOrange />
                  </h3>
                </div>
                <div className="w-100 ">
                  <div className="row">
                    {items.map((itm, ind) => (
                      <div
                        className="col-12 col-md-6 col-lg-6 mb-3  m-lg-0 text-right p-lg-2"
                        key={ind}
                      >
                        <BoxIcon itm={itm} />
                      </div>
                    ))}
                    <div className="container">
                      <div className={styles.btnWhy}>
                        <a target="-blank" href="https://smart.mobinsb.ir">
                          افتتاح حساب{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
let items = [
  {
    title: "عرضه اولیه اعتباری",
    text: "خرید سهام عرضه اولیه بدون نیاز به مانده حساب نقدی  ",
    src: "/asset/images/icons/Group 332.png",
  },
  {
    title: "سامانه‌های معاملاتی پرسرعت",
    text: "معامله‌گری مطمئن با استفاده از سامانه‌های معاملاتی پیشرفته",
    src: "/asset/images/icons/Group 334.png",
  },
  {
    title: "تخفیف کارمزد",
    text: "بازگشت بخشی از کارمزد در قالب امتیاز باشگاه مشتریان ",
    src: "/asset/images/icons/Group 335.png",
  },
  {
    title: "اعتبار معاملاتی بدون بهره ",
    text: "دریافت سرمایه اعتباری بدون بهره متناسب با گردش معاملاتی",
    src: "/asset/images/icons/Group 336.png",
  },
];
