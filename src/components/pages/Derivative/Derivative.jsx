import React from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import styles from "./style.module.css";
import { SectionFigureCaption } from "../../common/sectionFigureCaption/SectionFigureCaption";
import { GetCode } from "../bourseEnerzhy/components/GetCode/GetCode";
import { Services } from "../../Services/Services";

export const Derivative = () => {
  return (
    <>
      <div className="container">
        <BourseTittle text={text} />
      </div>
      <div className={styles.sectionBourseMarket}>
        <SectionFigureCaption item={itemFigure1} />
      </div>
      <GetCode
        items={itemGetCode1}
        tittle={"فرآیند اخذ کد معاملاتی بورس انرژی"}
      />
      <div className={styles.sectionBourseMarket}>
        <SectionFigureCaption item={itemFigure2} />
      </div>
      <GetCode
        items={itemGetCode2}
        tittle={"فرآیند اخذ کد معاملات قراردادهای اختیار معامله کالا"}
      />
      <Services item={srcArr} />
    </>
  );
};
let text = {
  item: "اوراق بهاداری که ارزش آن‌ها از یک یا گروهی دارایی پایه برگرفته می‌شود، اصطلاحاً اوراق مشتقه نام دارند. ارزش‌گذاری این قراردادهای معاملاتی بر اساس نوسانات دارایی پایه صورت می‌پذیرد و به انواع مختلفی نظیر آتی، سلف، اختیار معامله و معاوضه تقسیم می‌شوند. به طور کلی قراردادهای مشتقه با هدف پوشش ریسک، آربیتراژ یا سفته‌بازی توسط فعالان بازار خرید و فروش می‌شوند.  ",
  item2: "بازار مشتقه",
};

let itemGetCode1 = [
  {
    src: "#Group 363",
    text: "ثبت‌نام و احراز هویت  در سامانه سجام ",
  },
  {
    src: "#Group 362",
    text: " مراجعه به یکی از شعب  کارگزاری مبین سرمایه ",
  },
  {
    src: "#Group 365",
    text: "افتتاح حساب‌های قرض‌الحسنه و کوتاه‌مدت",
  },
  {
    src: "#Group 368",
    text: "تکمیل فرآیند ثبت‌نام در شعبه کارگزاری",
  },
  {
    src: "#Group 369",
    text: "صدور کد معاملاتی",
  },
];
let itemGetCode2 = [
  {
    src: "#Group 363",
    text: "ثبت‌نام و احراز هویت در سامانه سجام",
  },
  {
    src: "#Group 362",
    text: " عضویت در باشگاه مشتریان مبین سرمایه",
  },
  {
    src: "#Group 365",
    text: "صدور کد معاملاتی اوراق بهادار",
  },
  {
    src: "#Group 366",
    text: "صدور کد معاملاتی  آتی کالا",
  },
  {
    src: "#Group 367",
    text: "صدور کد معاملاتی  قراردادهای اختیار کالایی   ",
  },
];

let itemFigure2 = {
  nameClass: "flex-lg-row",
  src: "/asset/images/sectionFigureCaption/RqjuNJty4d.jpg",
  text: "قرارداد اختیار معامله (آپشن) یکی از ابزارهای نوین برای کنترل ریسک‌ معاملاتی است. افراد به واسطه خرید قراردادهای اختیار معامله این حق (نه الزام) را برای خود ایجاد می‌کنند که دارایی پایه مشخصی را در تاریخ و قیمت معینی خریداری کرده یا به فروش برسانند. این قراردادهای معاملاتی بر اساس زمان مجاز اعمال به دو نوع آمریکایی و اروپایی تقسیم می‌شوند.",
  title: "قرارداد اختیار معامله",
};
let itemFigure1 = {
  nameClass: "flex-lg-row-reverse",
  src: "/asset/images/sectionFigureCaption/g1.jpg",
  text: "بورس انرژی ایران دارای سه بازار فیزیکی، مشتقه و فرعی است. در بازار فیزیکی، کالاهای پذیرفته شده در بورس و در بازار مشتقه، اوراق بهادار مبتنی بر کالاهای پذیرفته شده در بورس معامله می‌شوند. بازار فرعی نیز شامل کالاهای تک محموله‏ای و خارج از گونه است. خود بازار فیزیکی شامل سه تابلوی برق، نفت و گاز و تابلوی سایر حامل‌های انرژی و بازار مشتقه شامل سه تابلوی قرارداد سلف موازی استاندارد، قرارداد آتی و قرارداد اختیار معامله می‏باشد؛ که هر کدام از این تابلوها نیز دو رینگ داخلی و بین‏المللی دارند. ",
  title: "بازارهای بورس انرژی ایران ",
};

const srcArr = [
  {
    item1: "#Group 370",
    text: "سامانه معاملات آنلاین  ",
  },
  {
    item1: "#Group 371",
    text: "انجام سفارشات آفلاین",
  },
  {
    item1: "#Group 372",
    text: "تحلیل بازار",
  },
  {
    item1: "#Group 373",
    text: "مشاوره  سرمایه‌گذاری",
  },
];
