import React from "react";
import styles from "./style.module.css";
import { IconsBox } from "../common/iconBox/IconsBox";
import LineOrange from "../common/LineOrange/LineOrange";
export const Services = ({ item ,className}) => {
  return (
    <>
      <div className={styles.sectionServices}>
        <div className="container">
          <div
            className="d-flex flex-column align-items-center"
            style={{ padding: "120px 0" }}
          >
            <div className="mb-5 d-flex d-lg-none">
              <h3
                style={{ color: "white", fontSize: "25px" }}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                خدمات مبین سرمایه برای شما
                <LineOrange />
              </h3>
            </div>

            <div className="mb-5 d-none d-lg-flex">
              <h3
                style={{ color: "white" }}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                خدمات مبین سرمایه برای شما
                <LineOrange />
              </h3>
            </div>
            <div className={`row justify-content-center text-center ${className}`}>
              {item.map((item, index) => (
                // <div key={index} className="mt-5 col-6 col-lg-3 p-0 px-1">
                //     <IconsBox src={item.item1} text={item.text}/>
                // </div>
                <div
                  key={index}
                  className="d-flex  mt-5 col-6 col-lg   p-0 px-1 justify-content-center"
                >
                  <IconsBox src={item.item1} text={item.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
