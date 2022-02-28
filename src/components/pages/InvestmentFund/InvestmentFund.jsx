import React from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
// import { ImportantProduct } from "../bourseEnerzhy/components/importantProdcut/ImportantProduct";
import Advantages from "./components/Advantages";
import { FundInMarket } from "./components/FundInMarket";
import { CommonFund } from "./components/CommonFund";
import { GetCode } from "../bourseEnerzhy/components/GetCode/GetCode";
import { FooterOrange } from "../../common/FooterOrange/FooterOrange";

export default function InvestmentFund() {
  return (
    <>
      <div className="container">
        {" "}
        <BourseTittle text={text} />
        <div className=" p-lg-5">
          {" "}
          <Advantages />
        </div>
      </div>
      <FundInMarket />

      <CommonFund />
      <GetCode items={itemGetCode} tittle={"فرآیند ثبت‌نام و صدور واحد "} />

      <FooterOrange
        btn={"white"}
        text={"ثبت‌نام و صدور واحد سرمایه‌گذاری"}
        color={"#ff5f00"}
        href={"https://fund.mobinsb.ir/"}
      />
    </>
  );
}

let text = {
  item:
    "" +
    "صندوق سرمایه‌گذاری یک نهاد مالی تحت نظارت سازمان بورس و اوراق بهادار است، که بر اساس دانش متخصصان مالی اقدام به تشکیل و مدیریت دارایی در سطح کلان می‌نماید. سرمایه‌گذاری در صندوق‌ها یکی از روش‌های سرمایه‌گذاری غیرمستقیم در بازار سرمایه است. اشخاص حقیقی و حقوقی می‌توانند واحدهای صندوق‌های سرمایه‌گذاری مختلف را خریداری نموده و از مزایای آن بهره‌مند شوند. به طور کلی اگر در صندوق‌های درآمد ثابت سرمایه‌گذاری کنید، حداقل سود سرمایه‌گذاری مشخصی به شما تعلق می‌گیرد؛ اما در صندوق‌هایی که درآمد ثابت ندارند، سرمایه‌گذاران بسته به عملکرد صندوق در سود یا زیان آن شریک می‌شوند.",
  item2: "صندوق‌ سرمایه‌گذاری، راهکاری آگاهانه و نوین ",
};

let itemGetCode = [
  {
    src: "#fund5",
    text: "ثبت‌نام و احراز هویت در سامانه سجام ",
  },
  {
    src: "#fund6",
    text: "مراجعه به وبسایت صندوق ",
  },
  {
    src: "#fund7",
    text: "ایجاد حساب کاربری ",
  },
  {
    src: "#fund8",
    text: "دریافت نام کاربری  و رمز عبور ",
  },
  {
    src: "#fund9",
    text: "مراجعه به بخش  صدور واحد ",
  },
  {
    src: "#fund10",
    text: "پرداخت آنلاین یا ثبت فیش واریز بانکی ",
  },
];
