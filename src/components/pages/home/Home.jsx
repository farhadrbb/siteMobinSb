import React from "react";
import BackgroundHome from "./component/backgroundHome/BackHome";
import { Investment } from "./component/investment/Investment";
import { OpenAnAccount } from "./component/openAnAccount/OpenAnAccount";
import { CardHome } from "./component/cardHome/CardHome";
import { InfoMobin } from "./component/infoMobin/InfoMobin";
// import { NewsMobin } from "./component/newsMobin/NewsMobin";
import { Financial } from "./component/Financial/Financial";
import styles from "./style.module.css";
// import { toFarsiNumber } from "../../common/convertIntEnglishToFarsi/ConvertIntEnglishToFarsi";

export const Home = () => {
  // const int = toFarsiNumber(1579);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center fixed-bottom d-lg-none"
        style={{
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <a href="https://smart.mobinsb.ir" className={styles.btnBackImage}>
          شروع معامله‌گری{" "}
        </a>
        <a href="/#" className={styles.btnBackImageGlass}>
          <span className="ml-2">پشتیبانی 1579</span>{" "}
          <img src={"/asset/images/icons/126509.png"} alt="" />
        </a>
      </div>
      <BackgroundHome />
      <Investment />
      <OpenAnAccount />
      <CardHome />
      <InfoMobin />
      {/*<NewsMobin />*/}
      <div className="mt-5">
        <Financial />
      </div>
    </>
  );
};
