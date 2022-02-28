import React from "react";
import styles from "./style.module.css";
import LineOrange from "../../../../src/components/common/LineOrange/LineOrange";
import LinkDownload from "./LinkDowload/Link";
import SystemLink from "./systemLink/SystemLink";

export const TermsAndConditions = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="container">
          <div className="row py-5 text-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6">
              <div>
                <SystemLink text={textItemSystem} title={" سامانه ها"} />
                <div className="container">
                  {/*<div className={styles.btnWhy}>*/}
                  {/*  <a*/}
                  {/*    href="http://club.mobinsb.ir/User/Login?q="*/}
                  {/*    target="_blank"*/}
                  {/*    rel="noreferrer"*/}
                  {/*  >*/}
                  {/*    سرمایه گذاری در بورس*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5 text-center">
              <div>
                <img
                  className={styles.imageWhy}
                  src={"/asset/images/backgroundImage/Group 389.png"}
                  alt=""
                />
                {/*<img*/}
                {/*  className={styles.imageFilter}*/}
                {/*  src={"/asset/images/Rectangle 158.png"}*/}
                {/*  alt=""*/}
                {/*/>*/}
              </div>
            </div>
            <div className="text-center mb-4  d-lg-none d-flex justify-content-center">
              <h3
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ fontSize: "25px" }}
              >
                سامانه ها
                <LineOrange />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh", backgroundColor: "rgb(242, 244, 246)" }}
      >
        <div className="container">
          <div className="row py-5 text-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 order-lg-2 d-flex justify-content-lg-center">
              <div>
                <LinkDownload
                  text={textItemEducationSystems}
                  title={"  آموزش سامانه ها"}
                />
                <div className="container">
                  {/*<div className={styles.btnWhy}>*/}
                  {/*  <a*/}
                  {/*    href="http://club.mobinsb.ir/User/Login?q="*/}
                  {/*    target="_blank"*/}
                  {/*    rel="noreferrer"*/}
                  {/*  >*/}
                  {/*    سرمایه گذاری در بورس*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5 text-center order-md-1">
              <div>
                <img
                  className={`${styles.imageWhy} shadow-lg`}
                  src={"/asset/images/sectionFigureCaption/AKTkcgNVMF.jpg"}
                  alt=""
                />
                {/*<img*/}
                {/*  className={styles.imageFilter}*/}
                {/*  src={"/asset/images/Rectangle 158.png"}*/}
                {/*  alt=""*/}
                {/*/>*/}
              </div>
            </div>
            <div className="text-center mb-4  d-lg-none d-flex justify-content-center">
              <h3
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ fontSize: "25px" }}
              >
                آموزش سامانه ها
                <LineOrange />
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="container">
          <div className="row py-5 text-center flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6">
              <div>
                <LinkDownload text={textItem} title={"قوانین ومقررات"} />
                <div className="container">
                  {/*<div className={styles.btnWhy}>*/}
                  {/*  <a*/}
                  {/*    href="http://club.mobinsb.ir/User/Login?q="*/}
                  {/*    target="_blank"*/}
                  {/*    rel="noreferrer"*/}
                  {/*  >*/}
                  {/*    سرمایه گذاری در بورس*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5 text-center">
              <div>
                <img
                  className={`${styles.imageWhy} shadow`}
                  src={"/asset/images/sectionFigureCaption/RqjuNJty4d.jpg"}
                  alt=""
                />
                {/*<img*/}
                {/*  className={styles.imageFilter}*/}
                {/*  src={"/asset/images/Rectangle 158.png"}*/}
                {/*  alt=""*/}
                {/*/>*/}
              </div>
            </div>
            <div className="text-center mb-4  d-lg-none d-flex justify-content-center">
              <h3
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ fontSize: "25px" }}
              >
                قوانین ومقررات
                <LineOrange />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const textItem = [
  {
    item: "محدودیت_های موضوع ماده 10 دستورالعمل اجرایی معاملات بر خط",
    link: "/asset/file/matter10v2.pdf",
  },
  {
    item: "دستورالعمل اجرايي معاملات برخط اوراق بهادار در بورس اوراق بهادار تهران",
    link: "/asset/file/Executiveinstructions.pdf",
  },
  {
    item: " رویه معاملاتی ,مخاطرات معاملات",
    link: "/asset/file/procedure.pdf",
  },
  {
    item: "نمونه سوالات آزمون آنلاین",
    link: "/asset/file/Testquestions.pdf",
  },
];
const textItemEducationSystems = [
  {
    item: "آموزش آنلاین",
    link: "/asset/file/Onlinetraining.pdf",
  },
  {
    item: "آموزش آنلاین پلاس",
    link: "/asset/file/rahnama.pdf",
  },
];
const textItemSystem = [
  {
    item: "سامانه معاملات آنلاین پلاس",
    link: "https://online.mobinsb.ir/",
  },

  {
    item: "سامانه معاملات آنلاین سهام",
    link: "https://online.mobinsb.ir/",
  },
  {
    item: "سامانه معاملات آفلاین سهام",
    link: "https://c.mobinsb.ir/",
  },

  {
    item: "سامانه اسمارت",
    link: "https://smart.mobinsb.ir",
  },
];
