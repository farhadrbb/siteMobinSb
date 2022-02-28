import React from "react";
import styles from "./style.module.css";
import Icons from "./Icons";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const InfoMobin = () => {
  return (
    <>
      <div className={styles.backInfoImage}>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className={styles.infoImageContent}>
              <h3 className="d-flex justify-content-center align-items-center  flex-column">
                از مبین سرمایه بیشتر بدانیم
                <LineOrange />
              </h3>
            </div>
            <div className="row w-100 text-center ">
              {items.map((itm, ind) => (
                <div className="col-6 col-lg-3 mb-5" key={ind}>
                  <Icons itm={itm} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

let items = [
  {
    text: "میلیون نفر مشتری",
    int: "1+",
    src: "/asset/images/icons/681494.png",
  },
  {
    text: "شعبه فعال",
    int: "90+",
    src: "/asset/images/icons/447031.png",
  },
  {
    text: "دفتر پیشخوان همکار",
    int: "1000+",
    src: "/asset/images/icons/Group 79.png",
  },
  {
    text: "سال سابقه فعالیت ",
    int: "10+",
    src: "/asset/images/icons/Group 75.png",
  },
];
