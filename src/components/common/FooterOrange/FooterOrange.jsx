import React from "react";
import styles from "./style.module.css";
export const FooterOrange = ({ btn, text, color, href, textBtn }) => {
  return (
    <>
      <div
        style={{ minHeight: "20vh", backgroundColor: "#ff5f00" }}
        className="d-flex justify-content-center align-items-center p-5"
      >
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="text-center">
              <h3 style={{ color: "white" }}>{text}</h3>
            </div>
            <div className={styles.btn} style={{ backgroundColor: `${btn}` }}>
              <a target="_blank" href={href} rel="noreferrer">
                <span style={{ color: `${color}` }}>
                  {" "}
                  {textBtn ? textBtn : "از اینجا شروع کنید"}{" "}
                </span>
              </a>
              {/* <a href="https://fund.mobinsb.com/" target="_blank">
                      صندوق سرمایه‌گذاری
                    </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
