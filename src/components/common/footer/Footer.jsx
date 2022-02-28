import React from "react";

import styles from "./style.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container-fluid p-0">
      <div className={styles.sectionFooter}>
        <div className="container">
          <div className={styles.containerFooter}>
            <div className="row  pl-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg m-0 p-lg-0  ">
                <div className="d-flex flex-column   text-center mb-4 mb-lg-0">
                  <div>
                    <img
                      src={"/asset/images/Group 12.png"}
                      width="120"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className={styles.btnFooter}>
                    <p className="m-0">کارگزاری رتبه الف </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-5 mb-lg-0 m-0  text-md-center   ">
                <ul className={styles.listAdress}>
                  <li className={classNames(styles.itemAdrees, "d-flex")}>
                    <div>
                      {" "}
                      <img
                        src={"/asset/images/Path 68.png"}
                        alt=""
                        className="ml-1"
                      />
                    </div>
                    <span>
                      تهران، خیابان قائم مقام فراهانی، خیابان هشتم، پلاک 19
                    </span>
                  </li>
                  <li className={styles.itemAdrees}>
                    <img
                      src={"/asset/images/Path 67.png"}
                      alt=""
                      className="ml-1"
                    />
                    1579
                  </li>
                  <li className={styles.itemAdrees}>
                    <img
                      src={"/asset/images/Group 81.png"}
                      alt=""
                      className="ml-1"
                    />
                    info@mobinsb.com
                  </li>
                  <li className={styles.itemAdrees}>
                    <div className="row">
                      <div className="col">
                        <a
                          target="_blank"
                          href="https://t.me/mobinsb"
                          className="ml-1"
                          rel="noreferrer"
                        >
                          <img src={"/asset/images/Path 8.png"} alt="ds" />
                        </a>
                        <a
                          href="http://instagram.com/mobinsarmayeh/"
                          className="ml-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={"/asset/images/instagram-seeklogo.com.png"}
                            alt="alt"
                          />
                        </a>
                        <a
                          href="https://www.aparat.com/Mobinsb"
                          className="ml-1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={"/asset/images/icon--color-black.png"}
                            alt="alt"
                          />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg p-lg-0 ">
                <ul className="list-unstyled p-0 m-0 text-right ">
                  <li className={styles.tittleFooterLi}>
                    <img
                      src={"/asset/images/Rectangle 155.png"}
                      alt=""
                      className="ml-2"
                    />
                    معاملات
                  </li>
                  <li className={styles.textFooterLi}>
                    <a
                      href="https://smart.mobinsb.ir"
                      target="_blank"
                      rel="noreferrer"
                    >
                      شروع معامله‌گری
                    </a>
                  </li>
                  <li className={styles.textFooterLi}>
                    <a
                      target="_blank"
                      href="https://smart.mobinsb.ir"
                      rel="noreferrer"
                    >
                      {" "}
                      افتتاح حساب
                    </a>
                  </li>
                  <li className={styles.textFooterLi}>
                    <a
                      href="https://silver.mobinsb.ir"
                      target="_blank"
                      rel="noreferrer"
                    >
                      سامانه‌های معاملاتی
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6 col-sm-6 col-md-6 col-lg p-lg-0  ">
                <ul className="list-unstyled p-0 m-0 text-right ">
                  <li className={styles.tittleFooterLi}>
                    <img
                      src={"/asset/images/Rectangle 155.png"}
                      alt=""
                      className="ml-2"
                    />
                    سرمایه‌گذاری
                  </li>
                  <li className={styles.textFooterLi}>
                    <a
                      target="_blank"
                      href="https://smart.mobinsb.ir"
                      rel="noreferrer"
                    >
                      شروع سرمایه گذاری
                    </a>
                  </li>
                  <li className={styles.textFooterLi}>
                    <Link to="/investmentFund">صندوق سرمایه‌گذاری</Link>
                  </li>
                  <li className={styles.textFooterLi}>
                    <Link to="/faq">سوالات متداول</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-12 my-5 m-lg-0 col-md-12 col-lg p-lg-0 ">
                <ul className="list-unstyled m-0 p-0 text-right ">
                  <li className={styles.tittleFooterLi}>
                    <img
                      src={"/asset/images/Rectangle 155.png"}
                      alt=""
                      className="ml-2"
                    />
                    تماس با ما
                  </li>
                  <li
                    className={styles.textFooterLi}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <Link to={"/contactus"}>اطلاعات تماس</Link>
                  </li>
                  <li className={styles.textFooterLi}>
                    <Link to={"/workwithus"}>همکاری با ما</Link>
                  </li>
                  <li className={styles.textFooterLi}>
                    <Link to={"/shoab"}>شعب و دفاتر</Link>
                  </li>
                </ul>
              </div>
              <div
                className="col-6 col-sm-6 my-5 m-lg-0 col-md-6 col-lg p-lg-1 mx-5"
                style={{ cursor: "pointer", maxWidth: 110 }}
              >
                <a
                  referrerpolicy="origin"
                  target="_blank"
                  href="https://trustseal.enamad.ir/?id=230973&amp;Code=Le5wM5fzIWhccxFrv6Mz"
                >
                  <img
                    referrerpolicy="origin"
                    src="https://Trustseal.eNamad.ir/logo.aspx?id=230973&amp;Code=Le5wM5fzIWhccxFrv6Mz"
                    alt=""
                    style={{ cursor: "pointer", transform: "translateY(-8px)" }}
                    id="Le5wM5fzIWhccxFrv6Mz"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5 mb-lg-0">
        <div>
          <p className={styles.footerText}>
            کلیه حقوق این سایت متعلق به کارگزاری مبین سرمایه است و استفاده از
            مطالب آن با ذکر منبع بلامانع است.
          </p>
        </div>
      </div>
    </footer>
  );
};
