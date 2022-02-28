import React from "react";
// import styles from "./style.module.css";
export const FooterBourse = ({ btn, text, color,title}) => {
  return (
    <>
      <div
        style={{ minHeight: "20vh", backgroundColor: "#ff5f00" }}
        className="d-flex justify-content-center align-items-center p-5"
      >
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="text-center">
              <h4 style={{ color: "white" }}>
                        {title}{" "}
              </h4>
              <a target="_blank" href="/shoab">
                <h4 style={{ color: "white" }}>
                  {" "}
                  <span
                    className="h4"
                    style={{ color: "white", borderBottom: "1px solid white" }}
                  >
                    
                    شعب کارگزاری مبین سرمایه
                  </span>{" "}
                  مراجعه کنید{" "}
                </h4>
              </a>
            </div>
            {/* <div className={styles.btn} style={{ backgroundColor: `${btn}` }}>
                <h4>برای صدور کد معاملاتی بورس انرژی به یکی از </h4>
              <a target="_blank" href="https://fund.mobinsb.com/User/RegisterType">
                <span style={{ color: `${color}` }}> شعب کارگذاری مبین سرمایه مراجعه کنید </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
