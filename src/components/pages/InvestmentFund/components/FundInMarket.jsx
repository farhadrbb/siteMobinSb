import React from "react";
import LineOrange from "../../../common/LineOrange/LineOrange";
// import { UlMap } from "../../../common/ulColumn/UlMap";
import { SelectIcon } from "./SelectIcon";

export const FundInMarket = () => {
  return (
    <div
      className="d-flex  align-items-center justify-content-center py-5 p-lg-0 mb-5"
      style={{
        minHeight: "50vh",
        background: "#F2F4F6",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="d-flex justify-content-center flex-column px-5">
            <h3 className="text-center d-flex flex-column align-items-center">
              انواع صندوق‌های سرمایه‌گذاری در بازار سرمایه ایران <LineOrange />
            </h3>
          </div>
          <div className="col-12 col-lg-7">
            <div className="text-center text-lg-right pr-3  px-5">
              <div className="mb-4"></div>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "200",
                    lineHeight: "40px",
                  }}
                >
                  امروزه صندوق‌های سرمایه‌گذاری صرفاً محدود به معاملات سهام
                  نیستند و بر اساس نوع مجوز فعالیت خود می‌توانند در دارایی‌های
                  دیگری نظیر طلا سرمایه‌گذاری کرده یا با اهداف خاصی همچون
                  بازارگردانی و تأمین مالی فعالیت کنند. شایان ذکر است که انواع
                  دیگری از صندوق‌های سرمایه‌گذاری مثل نیکوکاری، شاخصی و قابل
                  معامله (ETF) نیز در بازار سرمایه وجود دارند.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            {/* <UlMap
              text={text}
              title={"مزایای پذیرش و معامله در بورس انرژی ایران "}
            /> */}
            <SelectIcon text={text} />
          </div>
        </div>
      </div>
    </div>
  );
};

let text = [
  { item: "سهام " },
  { item: "مختلط" },
  { item: "درآمد ثابت" },
  { item: "بازارگردانی" },

  { item: "طلا" },
  { item: "جسورانه" },
  { item: "زمین و ساختمان" },
  { item: "پروژه " },
];
