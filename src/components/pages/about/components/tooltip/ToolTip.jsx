import React from "react";
import styles from "../style.module.css";
import classNames from "classnames";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const ToolTip = () => {
  return (
    <>
      <div
        className="d-flex flex-column text-center align-items-center mb-5 "
        style={{ minHeight: "50vh", padding: "80px 0" }}
      >
        <div className="mb-5">
          <h3 className="d-flex flex-column justify-content-center align-items-center mb-5">
            از کجا شروع کردیم
            <LineOrange />
          </h3>
        </div>

        <div className="container mt-lg-5 mt-0">
          <div className="d-flex justify-content-center flex-column flex-lg-row">
            <div className={styles.tooltip}>
              <div className={styles.iconToolTip}></div>
              <span className={styles.hr}></span>
              <span className={styles.tooltiptext}>
                رتبه سوم کارگزاران بازار سرمایه ایران
              </span>
              <div className={styles.btnRange}>
                <span>1399</span>
              </div>
            </div>

            <div className={styles.tooltip}>
              <div className={styles.iconToolTip}></div>
              <span className={styles.hr}></span>
              <span className={styles.toolColumn}>
                رتبه هشتم کارگزاران بازار سرمایه ایران{" "}
              </span>

              <div className={styles.btnRangeColumn}>
                <span>1396</span>
              </div>
            </div>

            <div className={styles.tooltip}>
              <div className={styles.iconToolTip}></div>
              <span className={styles.hr}></span>
              <span className={styles.tooltiptext}>
                رتبه 32 کارگزاران بازار سرمایه ایران{" "}
              </span>
              <div className={styles.btnRange}>
                <span>1394</span>
              </div>
            </div>
            <div className={styles.tooltip}>
              <div className={styles.iconToolTip}></div>
              <span className={styles.hr}></span>
              <span className={styles.toolColumn}>
                شروع فعالیت در بورس اوراق بهادار
              </span>
              <div className={styles.btnRangeColumn}>
                <span>1392</span>
              </div>
            </div>
            <div className={styles.tooltip}>
              <div className={styles.iconToolTip}></div>
              <span className={styles.hr}></span>
              <span className={styles.tooltiptext}>
                رتبه اول کارگزاران بورس کالای ایران{" "}
              </span>
              <div className={styles.btnRange}>
                <span>1390</span>
              </div>
            </div>
            <div className={styles.tooltip}>
              <div className={styles.iconToolTip}></div>
              <span
                className={classNames(styles.toolColumn, styles.toolColumnTop)}
              >
                شروع فعالیت در بورس کالا
              </span>
              <div className={classNames(styles.btnRange, styles.btnRangeLeft)}>
                <span>1388</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Button ref={target} >*/}
      {/*    Click me!*/}
      {/*</Button>*/}
      {/*<Overlay target={target.current} show={show} placement="right">*/}
      {/*    {(props) => (*/}
      {/*        <Tooltip id="overlay-example" {...props}>*/}
      {/*            My Tooltip*/}
      {/*        </Tooltip>*/}
      {/*    )}*/}
      {/*</Overlay>*/}
    </>
  );
};
