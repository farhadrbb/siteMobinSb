import React from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import { WhyBourse } from "./components/WhyBourse";
import { MarketReturn } from "./components/marketReturn/MarketReturn";
import { Services } from "../../Services/Services";
import { GetCode } from "../bourseEnerzhy/components/GetCode/GetCode";
import { FooterOrange } from "../../common/FooterOrange/FooterOrange";
import styles from "./style.module.css";
import LineOrange from "../../common/LineOrange/LineOrange";
export const Securities = () => {
  return (
    <>
      <div className="container">
        <BourseTittle text={text} />
        <div className={styles.btnWhy}>
          <a
            type="submit"
            href="https://smart.mobinsb.ir"
            target="_blank"
            rel="noreferrer"
          >
            دریافت کد بورسی
          </a>
        </div>

        <div className="d-flex d-lg-none justify-content-center flex-column align-items-center">
          <h3 className="justify-content-center flex-column d-flex align-items-center mb-5">
            چرا سهام بخریم؟
            <LineOrange />
          </h3>
        </div>
        <WhyBourse
          title={"چرا سهام بخریم؟"}
          item={textUl}
          src={"/asset/images/boursePage/Group 333.jpg"}
        />
      </div>
      <MarketReturn />
      <div className="d-flex d-lg-none justify-content-center flex-column align-items-center mt-5">
        <h3
          className="justify-content-center flex-column d-flex align-items-center mb-5"
          style={{ fontSize: "24px" }}
        >
          انواع ابزار سرمایه‌گذاری در بازار سهام
          <LineOrange />
        </h3>
      </div>
      <WhyBourse
        title={"انواع ابزار سرمایه‌گذاری در بازار سهام "}
        item={textUl1}
        src={"/asset/images/boursePage/1615636.jpg"}
      />
      <Services item={srcArr} className={styles["gridSrevices"]} />

      <GetCode
        items={itemGetCode}
        tittle={"فرآیند اخذ کد بورسی \n" + "اوراق بهادار"} //eslint-disable-line no-useless-concat
      />

      <FooterOrange
        text={"همین الان کد بورسی بگیرید!"}
        btn={"#ff5f00"}
        color={"white"}
        href={"https://smart.mobinsb.ir"}
      />
    </>
  );
};
let text = {
  item:
    " بورس محلی برای خرید و فروش سهام شرکت‌ها و سایر اوراق بهادار بر اساس عرضه و تقاضا است. امکان تأمین مالی بنگاه‌های بزرگ اقتصادی و\n" +
    ". مشارکت تمامی اقشار جامعه در کسب‌وکارهای سودآور، از مزایای اصلی فعالیت و رونق بازار بورس در سطح کلان است\n" +
    ". معاملات بازار بورس توسط شرکت‌های کارگزاری به عنوان نهادهای واسطه‌گری مالی تحت نظارت سازمان بورس و اوراق بهادار صورت می‌پذیرند\n" +
    " امروزه علاوه بر اینکه بازار سهام یکی از ارکان مهم ساختار اقتصادی کشورهای توسعه یافته محسوب می‌شود، به عنوان امن‌ترین بازار مالی مورد توجه\n" +
    ".همگان است",
  item2: "بورس اوراق بهادار",
};

const srcArr = [
  {
    item1: "#Group 400",
    text: "معاملات آنلاین و آفلاین",
  },
  { item1: "#Group 402", text: "اعتبار معاملاتی" },
  {
    item1: "#Group 401",
    text: " مشاوره سرمایه‌گذاری",
  },
  // {
  //   item1: "#Group 403",
  //   text: "مشاوره سرمایه‌گذاری",
  // },
  {
    item1: "#Group 408",
    text: "تخفیف  کارمزد اعتباری",
  },

  {
    item1: "#Group 404",
    text: " تحلیل  بازار اعتباری",
  },

  {
    item1: "#Group 405",
    text: "  عرضه و پذیرش شرکت‌ها",
  },

  {
    item1: "#Group 406",
    text: " بازار گردانی",
  },

  {
    item1: "#Group 407",
    text: "  صندوق سرمایه‌گذاری",
  },
];
let itemGetCode = [
  {
    src: "#Group 376",
    text: "ثبت‌نام و احراز هویت  در سامانه سجام  ",
  },
  {
    src: "#Group 377",
    text: "عضویت در باشگاه مشتریان مبین‌سرمایه ",
  },
  {
    src: "#Group 378",
    text: "دریافت نام کاربری و  رمز عبور سامانه آنلاین ",
  },
];

let textUl = [
  { item: "شراکت در کسب‌وکارهای بزرگ " },
  { item: "امکان فعالیت با سرمایه اولیه کم" },
  { item: "سرمایه‌گذاری از هر نقطه مکانی" },
  { item: "حفظ ارزش پول در شرایط تورمی" },
  { item: "امنیت سرمایه‌گذاری بالا" },
  { item: "کمک به اشتغال‌زایی برای جوانان" },
  { item: "امکان فعالیت بدون تخصص مالی" },
  { item: "کسب بازدهی معقول" },
];
let textUl1 = [
  { item: "سهام و حق تقدم" },
  { item: "صندوق‌های سرمایه‌گذاری " },
  { item: "اوراق درآمد ثابت" },
  { item: "اوراق تسهیلات مسکن" },
  { item: "اوراق مشتقه " },
];
