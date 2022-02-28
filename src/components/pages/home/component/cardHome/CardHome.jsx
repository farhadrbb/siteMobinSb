import React, { useState } from "react";
import styles from "./style.module.css";
import classNames from "classnames";
import { ArrowLeft } from "react-bootstrap-icons";

export const CardHome = () => {
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);

  const handleHover = () => {
    setFlag(true);
  };
  const handleHover1 = () => {
    setFlag1(!flag1);
  };
  const handleHover2 = () => {
    setFlag2(!flag2);
  };
  return (
    <>
      <div className={styles.sectionCardHome}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mb-3">
              {/*<div className="p-1">*/}
              {/*    <img src={"/asset/images/homeImage/xbxb.png"} className="img-fluid" alt=""/>*/}
              {/*    <div className={styles.tittleImage}><a href="/#" style={{color:"white !important"}}>دوره های آموزشی</a></div>*/}
              {/*</div>*/}
              <a
                href="https://smart.mobinsb.ir"
                className="d-flex justify-content-center "
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <div
                  className={classNames(styles.backImage)}
                  onMouseEnter={handleHover}
                  onMouseLeave={() => setFlag(false)}
                >
                  <h3
                    style={{ color: "white" }}
                    className={
                      flag ? styles.hoverTitleActive : styles.hoverTitle
                    }
                    onMouseEnter={handleHover}
                  >
                    افتتاح حساب
                  </h3>

                  <div
                    className={flag ? styles.hoverTextActive : styles.hoverText}
                  >
                    <div>
                      <p style={{ color: "white", fontSize: "12px" }}>
                        مجموعه‌ای از متنوع‌ترین امکانات و خدمات مالی فقط در
                        باشگاه مشتریان!
                      </p>
                    </div>
                    {/*<img*/}
                    {/*  src={"/asset/images/homeImage/logoHome/image/481127.png"}*/}
                    {/*  className="img-fluid"*/}
                    {/*  alt=""*/}
                    {/*  width="40"*/}
                    {/*/>*/}
                    <ArrowLeft
                      color={"white"}
                      style={{ fontSize: "60px" }}
                      className={
                        flag ? styles.hoverIconActive : styles.hoverIcon
                      }
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mb-3">
              {/*<div className="p-1">*/}
              {/*  <img*/}
              {/*    src={"/asset/images/homeImage/iStock-1011244876-1200x800.png"}*/}
              {/*    className="img-fluid"*/}
              {/*    alt=""*/}
              {/*  />*/}
              {/*  <div className={styles.tittleImage}>*/}
              {/*    <a href="/#" style={{ color: "white !important" }}>*/}
              {/*      دوره های آموزشی{" "}*/}
              {/*      <p style={{ fontSize: "11px" }}>*/}
              {/*        مجموعه‌ای متنوع‌ترین امکانات و خدمات مالی فقط در باشگاه*/}
              {/*        مشتریان!*/}
              {/*      </p>*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <a
                href="http://club.mobinsb.ir/"
                className="d-flex justify-content-center "
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={classNames(styles.backImage1)}
                  onMouseEnter={handleHover1}
                  onMouseLeave={() => setFlag1(false)}
                >
                  <h3
                    style={{ color: "white" }}
                    className={
                      flag1 ? styles.hoverTitleActive : styles.hoverTitle
                    }
                  >
                    باشگاه مشتریان{" "}
                  </h3>

                  <div
                    className={
                      flag1 ? styles.hoverTextActive : styles.hoverText
                    }
                  >
                    <div>
                      <p style={{ color: "white", fontSize: "12px" }}>
                        مجموعه‌ای از متنوع‌ترین امکانات و خدمات مالی فقط در
                        باشگاه مشتریان!
                      </p>
                    </div>
                    {/*<img*/}
                    {/*  src={"/asset/images/homeImage/logoHome/image/481127.png"}*/}
                    {/*  className="img-fluid"*/}
                    {/*  alt=""*/}
                    {/*  width="40"*/}
                    {/*/>*/}
                    <ArrowLeft
                      color={"white"}
                      style={{ fontSize: "60px" }}
                      className={
                        flag1 ? styles.hoverIconActive : styles.hoverIcon
                      }
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mb-3">
              {/*<div className="p-1">*/}
              {/*  <img*/}
              {/*    src={"/asset/images/homeImage/10_tips_blog.png"}*/}
              {/*    className="img-fluid"*/}
              {/*    alt=""*/}
              {/*  />*/}
              {/*  <div className={styles.tittleImage}>*/}
              {/*    <a href="/#" style={{ color: "white !important" }}>*/}
              {/*      دوره های آموزشی*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <a
                href="http://club.mobinsb.ir/Course/Index"
                className="d-flex justify-content-center "
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={classNames(styles.backImage2)}
                  onMouseEnter={handleHover2}
                  onMouseLeave={() => setFlag2(false)}
                >
                  <h3
                    style={{ color: "white" }}
                    className={
                      flag2 ? styles.hoverTitleActive : styles.hoverTitle
                    }
                  >
                    دوره‌های آموزشی
                  </h3>
                  <div
                    className={
                      flag2 ? styles.hoverTextActive : styles.hoverText
                    }
                  >
                    <div>
                      <p style={{ color: "white", fontSize: "12px" }}>
                        مجموعه‌ای از متنوع‌ترین امکانات و خدمات مالی فقط در
                        باشگاه مشتریان!
                      </p>
                    </div>
                    {/*<img*/}
                    {/*  src={"/asset/images/homeImage/logoHome/image/481127.png"}*/}
                    {/*  className="img-fluid"*/}
                    {/*  alt=""*/}
                    {/*  width="40"*/}
                    {/*/>*/}
                    <ArrowLeft
                      color={"white"}
                      style={{ fontSize: "60px" }}
                      className={
                        flag2 ? styles.hoverIconActive : styles.hoverIcon
                      }
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
