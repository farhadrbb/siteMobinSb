import React from "react";
import { UlMap } from "../../../common/ulColumn/UlMap";

export const AdvantagesMerchandise = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center mb-5 "
        style={{ minHeight: "40vh" }}
      >
        <div className="container d-flex justify-content-center">
          <div className="row w-100  ">
            <div className="col-12 col-lg-6 pr-5 d-flex d-lg-none">
              <UlMap text={text} title={"مزایای فعالیت بورس کالا"} />
            </div>
            <div className="col-12 d-flex col-lg-6 justify-content-center align-items-center  mb-4 mb-lg-0 ">
              <div>
                <img
                  src={"/asset/images/boursePage/pipesBanner.jpg"}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 pr-5 d-none d-lg-flex">
              <UlMap text={text} title={"مزایای فعالیت بورس کالا"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
let text = [
  { item: "قیمت‌گذاری شفاف" },
  { item: "معاملات سازمان‌یافته" },
  { item: "تأمین مالی تولیدکنندگان" },
  { item: "معافیت مالیاتی " },
  { item: "تضمین امنیت معاملات" },
  { item: "...." },
];
