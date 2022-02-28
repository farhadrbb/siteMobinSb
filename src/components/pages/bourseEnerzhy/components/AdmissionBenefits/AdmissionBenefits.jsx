import React from "react";
import { UlMap } from "../../../../common/ulColumn/UlMap";

export const AdmissionBenefits = () => {
  return (
    <>
      <div
        className="d-flex  align-items-center justify-content-center my-5"
        style={{ minHeight: "40vh" }}
      >
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <UlMap
              text={text}
              title={"مزایای پذیرش و معامله در بورس انرژی ایران "}
            />
          </div>
          <div className="col-12 col-lg-5">
            <div className="text-center">
              <img
                src={"/asset/images/sectionFigureCaption/Group 333.png"}
                className="img-fluid"
                alt=""
                width="350"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

let text = [
  { item: "معافیت مالیاتی " },
  { item: "کاهش ریسک‌های معاملاتی" },
  { item: "چهارچوب‌های مقرراتی استاندارد و جامع" },
  { item: "معافیت از تشریفات مزایده و مناقصه" },
  { item: "امکان تأمین مالی و پوشش ریسک عرضه‌کنندگان" },
  { item: "کاهش هزینه‌های معاملاتی مشتریان" },
];
