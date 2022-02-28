import React from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import { SectionFigureCaption } from "../../common/sectionFigureCaption/SectionFigureCaption";
import styles from "../../common/sectionFigureCaption/style.module.css";
import { MainCriterion } from "./components/MainCriterion";
import { FooterOrange } from "../../common/FooterOrange/FooterOrange";

export const Fund = () => {
  return (
    <>
      <div className="container">
        <div className="p-5">
          <BourseTittle text={text} />
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "30vh", backgroundColor: "#F2F4F6" }}
      >
        <SectionFigureCaption btn={btn} item={itemFigure1} />
      </div>
      <div className="container">
        <div className="p-5">
          <BourseTittle text={text1} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F2F4F6",
          minHeight: "30hv",
          marginBottom: "30px",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <SectionFigureCaption item={itemFigure2} />
      </div>
      <MainCriterion />
      <FooterOrange
        text={"برای صدور واحد صندوق "}
        btn={"#ff5f00"}
        color={"white"}
        href={"/investmentFund"}
        textBtn={"کلیک کنید"}
      />
    </>
  );
};
let text = {
  item: "با توجه به روند توسعه بازار سرمایه طی سال‌های اخیر، دیگر سرمایه‌گذاری در بورس یک امر محال و پیچیده نیست! امروزه دفاتر شرکت‌های کارگزاری بورس در سراسر کشور حضور دارند و شما با استفاده از ابزار سرمایه‌گذاری متنوع موجود در بازار سرمایه می‌توانید به صورت مستقیم یا غیرمستقیم در بورس فعالیت کنید.",
  item2: "چگونه در بورس سرمایه‌گذاری کنیم؟ ",
};
let itemFigure1 = {
  nameClass: "flex-lg-row",
  src: "/asset/images/sectionFigureCaption/AKTkcgNVMF.jpg",
  text: "سرمایه‌گذاری مستقیم یعنی خرید و فروش اوراق بهادار توسط خود شخص، مرسوم‌ترین روش فعالیت در بازار بورس است. در این فرآیند افراد اقدام به اخذ کد بورسی نموده و با افتتاح حساب در یکی از شرکت‌های کارگزاری می‌توانند، اوراق بهادار پذیرفته شده در بازار سرمایه را خرید و فروش کنند. نباید فراموش کنیم که سرمایه‌گذاری موفقیت‌آمیز در بازار سهام، مستلزم داشتن تخصص مالی و زمان کافی است.",
  title: "خرید و فروش سهام",
};
//
let btn = (
  <div className={styles.btnWhy}>
    <a target="_blank" href="https://smart.mobinsb.ir" rel="noreferrer">
      افتتاح حساب معاملاتی{" "}
    </a>
  </div>
);

let text1 = {
  item: "اگر تخصص سرمایه‌گذاری، زمان کافی و سرمایه زیادی ندارید، سرمایه‌گذاری در صندوق‌ها گزینه مناسبی است. صندوق سرمایه‌گذاری یک نهاد مالی تحت نظارت سازمان بورس و اوراق بهادار است، که بر اساس دانش متخصصان مالی اقدام به تشکیل و مدیریت دارایی در سطح کلان می‌نماید. ",
  item2: "سبدگردانی ",
};
let itemFigure2 = {
  nameClass: "flex-lg-row-reverse",
  src: "/asset/images/sectionFigureCaption/KSs5pfL0M1.jpg",
  text: "سرمایه‌گذاری غیرمستقیم در بازار بورس از طریق صندوق‌های سرمایه‌گذاری یا شرکت‌های سبدگردان امکان‌پذیر است. در این فرآیند سبدی اختصاصی و متناسب با ریسک‌پذیری و افق سرمایه‌گذاری شخص تشکیل می‌شود، که مدیریت آن بر عهده شرکت سبدگردان است. استفاده از خدمات سبدگردانی معمولاً حداقل سرمایه مشخصی می‌خواهد و کارمزد آن نیز بر اساس توافق طرفین تعیین می‌شود.",
  title: "صندوق سرمایه‌گذاری ",
};
