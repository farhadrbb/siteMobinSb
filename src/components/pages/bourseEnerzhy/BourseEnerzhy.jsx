import React, { useState } from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import { ImportantProduct } from "./components/importantProdcut/ImportantProduct";
import { SectionFigureCaption } from "../../common/sectionFigureCaption/SectionFigureCaption";
import styles from "./style.module.css";
import { AdmissionBenefits } from "./components/AdmissionBenefits/AdmissionBenefits";
import { Calculators } from "./components/Calculators/Calculators";
import { FormCalcPower } from "./components/FormCalc/FormCalcPower";
import { FormCalcPhysical } from "./components/FormCalcPhysical/FormCalcPhysical";
import { FormCalcPetrochemical } from "./components/formCalcPetrochemical/FormCalcPetrochemical";
import { FormCalcDivision } from "./components/FormCalcDivision/FormCalcDivision";
import { FormCalcOil } from "./components/Oil/FormCalcOil";
import { Services } from "../../Services/Services";
import { GetCode } from "./components/GetCode/GetCode";
// import { FooterOrange } from "../../common/FooterOrange/FooterOrange";
import { FooterBourse } from "./footerBourse/FooterBourse";
import LineOrange from "../../common/LineOrange/LineOrange";

export const BourseEnerzhy = () => {
  const [filter, setFilter] = useState({ id: 0 });

  return (
    <>
      <div className="container">
        <BourseTittle text={text} />
        <ImportantProduct />
      </div>
      <div className={styles.sectionBourseMarket}>
        <SectionFigureCaption item={itemFigure} />
      </div>
      <div className="container">
        <div className="d-flex d-lg-none justify-content-center flex-column align-items-center">
          <h3
            className="justify-content-center flex-column d-flex align-items-center mb-5 text-center mt-4"
            style={{ fontSize: "25px" }}
          >
            مزایای پذیرش و معامله در بورس انرژی ایران
            <LineOrange />
          </h3>
        </div>
        <AdmissionBenefits />
        <Calculators filter={filter} setFilter={setFilter} />
        <FormCalcPower filter={filter} />
        <FormCalcPhysical filter={filter} />
        <FormCalcPetrochemical filter={filter} />
        <FormCalcDivision filter={filter} />
        <FormCalcOil filter={filter} />
      </div>
      <Services item={srcArr} />
      <GetCode
        items={itemGetCode}
        tittle={"فرآیند اخذ کد معاملاتی بورس انرژی"}
      />
      {/* <FooterOrange
        btn={"white"}
        text={"برای صدور کد معاملاتی بورس انرژی "}
        color={"#ff5f00"}
      /> */}
      <FooterBourse title={"برای صدور کد معاملاتی بورس انرژی به یکی از"} />
    </>
  );
};
let text = {
  item: "بورس انرژی ایران یک بورس کالایی است که با هدف تأمین مواد اولیه (برق) برای شرکت‌های تولیدی و صادرات فرآورده‌های نفتی به خارج از کشور راه‌اندازی شده و امکان معاملات انواع حامل‌های انرژی و اوراق بهادار مبتنی بر آن‌ها در این بازار فراهم آمده است. محصولات عرضه شده در بورس انرژی بر اساس فرآیند عرضه و تقاضا مبادله می‌شوند. با عرضه این حامل‌های انرژی در بازار بورس، امکان احتکار و سفته‌بازی از سودجویان سلب شده و این کالاها تحت نظارت‌های قانونی میان فعالان بازار خرید و فروش می‌شوند.",
  item2: "بورس انرژی",
};

let itemGetCode = [
  {
    src: "#Group 362",
    text: "مراجعه به واحد بورس انرژی مبین‌سرمایه",
  },
  {
    src: "#Group 363",
    text: "تکمیل فرم‌های احراز  هویت مشتریان",
  },
  {
    src: "#Group 359",
    text: "ارائه مدارک هویتی و  ثبت شرکت به کارگزاری",
  },
  {
    src: "#Group 360",
    text: "ارسال مدارک به  شرکت سپرده‌گذاری مرکزی  توسط کارگزاری",
  },
  {
    src: "#Group 361",
    text: "صدور کد معاملاتی توسط سپرده‌گذاری و ارسال برای  مشتری",
  },
];

let itemFigure = {
  nameClass: "flex-lg-row",
  src: "/asset/images/sectionFigureCaption/08.jpg",
  text: "بورس انرژی ایران دارای سه بازار فیزیکی، مشتقه و فرعی است. در بازار فیزیکی، کالاهای پذیرفته شده در بورس و در بازار مشتقه، اوراق بهادار مبتنی بر کالاهای پذیرفته شده در بورس معامله می‌شوند. بازار فرعی نیز شامل کالاهای تک محموله‏ای و خارج از گونه است. خود بازار فیزیکی شامل سه تابلوی برق، نفت و گاز و تابلوی سایر حامل‌های انرژی و بازار مشتقه شامل سه تابلوی قرارداد سلف موازی استاندارد، قرارداد آتی و قرارداد اختیار معامله می‏باشد؛ که هر کدام از این تابلوها نیز دو رینگ داخلی و بین‏المللی دارند. ",
  title: "بازارهای بورس انرژی ایران ",
};

const srcArr = [
  {
    item1: "#Group 332",
    text: "برگزاری دوره‌های آموزشی تخصصی",
  },
  {
    item1: "#Group 356",
    text: "گزارشات و آمار معاملاتی روزانه",
  },
  {
    item1: "#Group 357",
    text: "پذیرش و عرضه کالاهای تولیدی و وارداتی",
  },
  {
    item1: "#Group 358",
    text: "مشاوره معاملات صادراتی",
  },
];
