import React from "react";
import { UlMap } from "../../../common/ulColumn/UlMap";
export const WhyBourse = ({ src, item, title }) => {
  return (
    <>
      <div className="container">
        <div
          className="d-flex  align-items-center justify-content-center mb-5"
          style={{ minHeight: "50vh" }}
        >
          <div className="row align-items-center w-100 ">
            <div className="col-12 col-lg-6">
              <UlMap text={item} title={title} />
            </div>
            <div className="col-12 col-lg-6">
              <div className="text-center">
                <img src={src} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// let text = [
//   { item: "شراکت در کسب‌وکارهای بزرگ " },
//   { item: "امکان فعالیت با سرمایه اولیه کم" },
//   { item: "سرمایه‌گذاری از هر نقطه مکانی" },
//   { item: "حفظ ارزش پول در شرایط تورمی" },
//   { item: "امنیت سرمایه‌گذاری بالا" },
//   { item: "کمک به اشتغال‌زایی برای جوانان" },
//   { item: "امکان فعالیت بدون تخصص مالی" },
//   { item: "کسب بازدهی معقول" },
// ];
