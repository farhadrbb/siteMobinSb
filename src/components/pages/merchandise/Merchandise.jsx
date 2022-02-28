import React from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import { AdvantagesMerchandise } from "./components/AdvantagesMerchandise";
import { HallBourse } from "./components/hallBourse/HallBourse";
import { Services } from "../../Services/Services";
import { GetCode } from "../bourseEnerzhy/components/GetCode/GetCode";
// import { FooterOrange } from "../../common/FooterOrange/FooterOrange";
import { FooterBourse } from "../bourseEnerzhy/footerBourse/FooterBourse";
import LineOrange from "../../common/LineOrange/LineOrange";

export const Merchandise = () => {
  return (
    <>
      <div className="container">
        <BourseTittle text={text} />
      </div>
      <div className="text-center mb-4  d-lg-none d-flex justify-content-center">
        <h3
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ fontSize: "25px" }}
        >
          مزایای فعالیت بورس کالا
          <LineOrange />
        </h3>
      </div>
      <AdvantagesMerchandise />
      <HallBourse />
      <Services item={srcArr} />
      <GetCode
        items={itemGetCode}
        tittle={"فرآیند اخذ کد معاملاتی بورس کالا "}
      />
      {/* <FooterOrange
        btn={"white"}
        text={"برای صدور کد معاملاتی بورس کالا "}
        color={"#ff5f00"}
      /> */}
      <FooterBourse title={"برای صدور کد معاملاتی بورس کالا به یکی از"} />
    </>
  );
};

let text = {
  item:
    "بورس کالای ایران یک بازار سازمان‌یافته است که کالاهای خام و مواد اولیه مانند فلزات، مواد معدنی و شیمیایی به صورت عمده\n" +
    " در این بازار عرضه می‌شوند. متقاضیان عرضه کالا پس از تأیید کیفیت و اصالت کالای خود توسط کارشناسان بورس می‌توانند،\n" +
    ". کالای خود را در تالار مربوطه عرضه نموده و بر اساس شرایط عرضه و تقاضا به فروش برسانند\n" +
    " فعالان بورس کالا باید در چهارچوب قوانین و تحت نظارت نهادهای مالی فعالیت کنند و از همین روی، مشکلات رایج بازارهای سنتی از\n" +
    " قبیل عدم اجرای تعهدات طرفین و قیمت‌گذاری‌های غیرشفاف در این بازار وجود ندارد. بازار بورس فلزات در شهریور سال 1382 به عنوان\n" +
    ". اولین بورس کالایی شروع به کار نمود و در ادامه با اضافه شدن سایر بورس‌های کالایی، شرکت بورس کالای ایران در سال 1385 آغاز به کار کرد. ",
  item2: "بورس کالا",
};
const srcArr = [
  { item1: "#Group 332", text: "برگزاری دوره‌های آموزشی تخصصی  " },
  {
    item1: "#Group 336",
    text: "گزارشات و آمار معاملاتی روزانه",
  },
  {
    item1: "#Group 337",
    text: "پذیرش و عرضه کالاهای تولیدی و وارداتی",
  },
  {
    item1: "#Group 338",
    text: "مشاوره معاملات صادراتی",
  },
];
let itemGetCode = [
  {
    src: "#Group 339",
    text: "تکمیل فرم‌های مربوطه و پیوست مدارک در کارگزاری مبین ‌سرمایه",
  },
  {
    src: "#Group 340",
    text: "بررسی پرونده توسط کارشناسان کارگزاری و ارسال مدارک به بورس کالا",
  },
  {
    src: "#Group 343",
    text: "تأیید مدارک توسط بورس کالا",
  },
  {
    src: "#Group 341",
    text: "دریافت اسناد تأیید شده جهت امضا و ممهور نمودن",
  },
  {
    src: "#Group 342",
    text: "صدور کد معاملاتی ",
  },
];
