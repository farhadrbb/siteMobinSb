import React from "react";
import { ToolTip } from "./components/tooltip/ToolTip";
import { BourseTittle } from "../../common/bourseTittle/BourseTittle";
import { Video } from "./components/Video";
import { InfoIcons } from "./components/infoIcon/InfoIcons";
import { Services } from "../../Services/Services";

export const About = () => {
  return (
    <>
      <ToolTip />
      <div className="container ">
        <BourseTittle text={text} />
        <Video />
        <div className="px-5 mt-5">
          <BourseTittle text={text1} />
        </div>
        <div className="mb-5">
          <InfoIcons />
        </div>
      </div>
      <Services item={srcArr} />
    </>
  );
};

let text = {
  item: "شرکت کارگزاری مبین سرمایه با کسب مجوز از سازمان بورس و اوراق بهادار در سال 1388، وارد بازار بورس کالای ایران شد و پس از مدت کوتاهی به سبب کمیت و کیفیت خدمات ارائه شده، به جایگاه برترین کارگزار فعال در بورس کالا رسیدیم. در ادامه مسیر با چشم‌انداز رشد و توسعه فعالیت در بازار سرمایه ایران، وارد بازار اوراق بهادار و انرژی شدیم. در حال حاضر نیز با بیش از 90 شعبه در سراسر کشور و خدمات گسترده مالی در حوزه بازار سرمایه، مفتخر به ارائه خدمات با کیفیت به سرمایه‌گذاران بورس ایران هستیم.",
  item2: "مبین سرمایه برای زندگی، برای آینده",
};
let text1 = {
  item: "ما در خانواده مبین سرمایه همواره در تلاش هستیم که مجموعه خدمات کامل، متنوع و با کیفیتی به فعالان بازار سرمایه ارائه دهیم.",
  item2: "و امروز به همراهی شما افتخار می‌کنیم",
};
const srcArr = [
  { item1: "#Group 507", text: "بورس و فرابورس" },
  { item1: "#Group 370", text: " بورس کالا" },
  {
    item1: "#Group 399",
    text: "پذیرش و عرضه بورس انرژی",
  },
  { item1: "#Group 500", text: "بازار مشتقه" },

  { item1: "#Group 501", text: " آموزش" },

  { item1: "#Group 502", text: " تخفیف کارمزد" },

  { item1: "#Group 503", text: "اعتبار معاملاتی" },

  { item1: "#Group 504", text: " سامانه‌های معاملاتی پرسرعت" },

  { item1: "#Group 505", text: " باشگاه مشتریان" },

  { item1: "#Group 506", text: " شعب متعدد در  سراسر کشور " },
];
