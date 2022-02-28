import React from "react";
import styles from "./style.module.css";
import { KeyboardArrowDown, KeyboardArrowLeft } from "@material-ui/icons";

export const GetCodeIcon = ({ item, index, items }) => {
  return (
    <>
      <div className={styles.parent}>
        <div className="d-flex justify-content-center   flex-column flex-lg-row px-5 px-lg-0">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div>
              <div className="mb-2">
                {" "}
                {/*<img className="img-fluid" src={item.src} alt="" />*/}
                <svg
                  className={`icon ml-2 img-fluid ${styles['icon']}`}
                  style={{ width: "200px", height: "100px" }}
                >
                  <use xlinkHref={`/sprite.svg${item.src}`}></use>
                </svg>
              </div>
            </div>
            <div>
              <p
                style={{ whiteSpace: "normal", fontSize: "13px" }}
                className={`text-center ${styles['desc']}`}
              >
                {" "}
                {item.text}
              </p>
            </div>
          </div>
          <div className="p-4 d-none d-lg-flex ">
            {
              items.length !== index + 1 && (
                <KeyboardArrowLeft className="mt-4" />
              )
            }
          </div>
          <div className="p-4 d-inline d-lg-none ">
            {
              items.length !== index + 1 && (
                <KeyboardArrowDown />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};
