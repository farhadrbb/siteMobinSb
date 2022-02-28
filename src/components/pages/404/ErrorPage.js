import React from "react";
import styles from "./style.module.css";
const ErrorPage = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div
          className="d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30 text-center"
          style={{
            backgroundImage: `url(./bg-9.jpg)`,
          }}
        >
          <div className={styles.divParent}>
            {" "}
            <div
              style={{
                backgroundColor: "#ff5f00",
                opacity: ".6",
                color: "white",
                width: "50%",
                borderRadius: "10px",
              }}
            >
              <h3
                className="font-size-sm-100 font-weight-boldest text-dark-75 mt-15 d-lg-none"
                style={{ fontSize: "80px" }}
              >
                404
              </h3>
              <h1
                className="font-size-sm-100 font-weight-boldest text-dark-75 mt-15 d-none d-lg-inline-block"
                style={{ fontSize: "150px" }}
              >
                404
              </h1>
              <p className="font-size-h3 font-weight-light">
                متاسفانه این صفحه وجود ندارد
              </p>
            </div>
          </div>
          <img src={"/asset/images/404/bg-9.jpg"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
