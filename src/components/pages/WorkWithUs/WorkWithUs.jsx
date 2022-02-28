import React, { useState } from "react";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import { CardImage } from "./components/CardImage";
import { Expectations } from "./components/Expectations";
import { Services } from "../../Services/Services";
import { AccordionResume } from "./components/Accordion/AccordionResume";
import { HowCooperation } from "./components/Cooperation/HowCooperation";
import { Forms } from "./components/forms/Forms";

export const WorkWithUs = () => {
  const [filterForm, setFilterForm] = useState(0);
  const [showForm, setShowForm] = useState(null);
  const [icon, setIcon] = useState(null);

  return (
    <>
      <div className="container">
        <div className="pt-5 p-lg-5">
          <BourseTittle text={text} />
        </div>
        <CardImage />

        <Expectations />
      </div>
      <Services item={srcArr} />
      <div className="container">
        <div className="p-1 p-lg-5">
          <BourseTittle text={text1} />
          {TittleAccordion.map((item, index) => (
            <AccordionResume
              item={item}
              key={index}
              id={index}
              setShow={setShowForm}
              show={showForm}
              icon={icon}
              setIcon={setIcon}
            />
          ))}
          <HowCooperation
            filterForm={filterForm}
            setFilterForm={setFilterForm}
          />
          {filterForm === null ? null : <Forms filter={filterForm} />}
        </div>
      </div>
    </>
  );
};

let text = {
  item: "شرکت کارگزاری مبین‌ سرمایه به عنوان یکی از چهار کارگزار برتر بازار سرمایه ایران، همواره سعی در جذب نیروهای جوان، دانشگاهی، خلاق و علاقه‌مندان به امور سرمایه‌گذاری داشته است. ما در خانواده مبین سرمایه با بیش از 300 نفر نیروی انسانی متخصص در حوزه‌های مختلف و 90 شعبه فعال در سراسر کشور، مشغول خدمت‌رسانی به سرمایه‌گذاران بازار بورس ایران هستیم. ",
  item2: "منتظر شما هستیم...",
};
const srcArr = [
  {
    item1: "#Group 385",
    text: "آموزش و یادگیری",
  },
  {
    item1: "#Group 386",
    text: "پوشش  بیمه ای کامل",
  },
  {
    item1: "#Group 387",
    text: "خدمات رفاهی و ورزشی",
  },
];
let text1 = {
  item:
    " شما بر اساس توانایی‌هایتان می‌توانید در یکی از بخش‌های زیر اطلاعات خود را ثبت کنید تا در صورت احراز شرایط، همکاران ما با\n" +
    ".شما تماس بگیرند",
  item2: "چطور با مبین‌سرمایه همکاری کنیم؟",
};

let TittleAccordion = [
  { title: "طراح سایت" },
  { title: "طراح گرافیک" },
  { title: "طراح سایت" },
];
