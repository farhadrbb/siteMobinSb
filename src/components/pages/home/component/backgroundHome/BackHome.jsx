import React from "react";
import style from "./style.module.css";
import { withRouter } from "react-router";

const BackHome = (props) => {
  return (
    <div
      className="container-fluid p-0"
      style={
        {
          // backgroundImage: `url(${handleBackImage()})`,
        }
      }
    >
      <div className={style.backgroundImage}>
        <div>
          <div style={{ zIndex: "10", marginBottom: "20px" }}>
            <h2 style={{ color: "white", zIndex: "10" }}>
              رویاهایتان با سرمایه‌گذاری محقق می‌شود
            </h2>
          </div>
          <div className={style.btnImageParent}>
            <a
              href="https://smart.mobinsb.ir"
              className={style.btnBackImage}
              target="_blank"
              rel="noreferrer"
            >
              شروع معامله‌گری
            </a>
            <a
              href="tel:1579"
              className={style.btnBackImageGlass}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <span className="ml-2">پشتیبانی 1579</span>{" "}
              <img src={"/asset/images/icons/126509.png"} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(BackHome);
