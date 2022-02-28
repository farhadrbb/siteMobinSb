import React from "react";
import style from "./style.module.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const BackgroundHeader = (props) => {
  const { pathname } = props.location;

  const handleBackImage = () => {
    switch (pathname) {
      case "/faq":
        return "/asset/images/libraries.png";
      case "/account":
        return "/asset/images/IMG_0655.png";
      case "/shoab":
        return "/asset/images/backgroundImage/IMG_0603-low-quality.png";
      case "/contactus":
        return "/asset/images/backgroundImage/IMG_0655.png";
      case "/bourseEnerzhy":
        return "/asset/images/backgroundImage/IMG_0655.png";
      case "/derivative":
        return "/asset/images/backgroundImage/unnamed.jpg";
      case "/merchandise":
        return "/asset/images/backgroundImage/Steel-Factory.jpg";
      case "/securities":
        return "/asset/images/backgroundImage/180522_381.jpg";
      case "/about":
        return "/asset/images/backgroundImage/IMG_0655.png";
      case "/fund":
        return "/asset/images/backgroundImage/180522_381.jpg";
      case "/workwithus":
        return "/asset/images/backgroundImage/work-with-us.jpg";
      case "/investmentFund":
        return "/asset/images/backgroundImage/leading-board-1-banner.png";
      case "/TermsAndConditions":
        return "/asset/images/backgroundImage/IMG_0603-low-quality.png";

      default:
        return;
    }
  };
  const handleBackText = () => {
    switch (pathname) {
      case "/faq":
        return "سوالات متداول";
      case "/account":
        return "شماره‌حساب‌های کارگزاری مبین سرمایه";
      case "/shoab":
        return "شعب و دفاتر";
      case "/contactus":
        return "تماس با ما";
      case "/bourseEnerzhy":
        return "بورس انرژی";
      case "/derivative":
        return "بازار مشتقه";
      case "/merchandise":
        return "بورس کالا";
      case "/securities":
        return "بورس اوراق بهادار";
      case "/about":
        return "درباره مبین سرمایه";
      case "/fund":
        return "سرمایه گذاری در بورس";
      case "/workwithus":
        return "همکاری با ما";
      case "/investmentFund":
        return "صندوق سرمایه گذاری";
      case "/TermsAndConditions":
        return "خدمات آنلاین و آفلاین";

      default:
        return null;
    }
  };

  return (
    <div
      className={style.backNav}
      style={{
        backgroundImage: `url(${handleBackImage()})`,
        height: "200px",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        className="container  px-4"
        style={{ position: "absolute", zIndex: "200" }}
      >
        <div className="row">
          <div className="col-12">
            <div className={style.imageParagraph}>
              <p>{handleBackText()}</p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-md-between flex-md-row flex-column justify-content-center text-center mt-4 mt-lg-0">
            <div>
              <p className={style.imageBreadCrumb}>
                {" "}
                <Link to={"/"} style={{ color: "white !important" }}>
                  خانه
                </Link>{" "}
                > {handleBackText()}
              </p>
            </div>
            <div>
              <a
                target="_blank"
                href="https://t.me/mobinSb"
                className={style.imageBreadCrumb}
                rel="noreferrer"
              >
                <img src={"/asset/images/Path 100.svg"} alt="" width="18" />
              </a>
              <a
                href="http://instagram.com/mobinsarmayeh"
                className={style.imageBreadCrumb}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"/asset/images/instagram-seeklogo.com.svg"}
                  alt=""
                  width="18"
                />
              </a>
              <a
                href="https://www.aparat.com/Mobinsb"
                className={style.imageBreadCrumb}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={"/asset/images/icon--color-black.svg"}
                  alt=""
                  width="18"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(BackgroundHeader);
