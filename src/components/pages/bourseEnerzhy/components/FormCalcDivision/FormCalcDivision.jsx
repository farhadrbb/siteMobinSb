import React from "react";
import styles from "../FormCalc/style.module.css";
import { FormTitle } from "../common/formTitle/FormTitle";
import { SearchBarDivision } from "./components/SearchBarDivision";
import { TitleAccordionsDivison } from "./components/TitleAccordionsDivision";

export const FormCalcDivision = ({ filter }) => {
  if (filter.id === 3) {
    return (
      <>
        <div
          className="d-flex  flex-column align-items-center mb-5"
          style={{ minHeight: "100vh" }}
        >
          <FormTitle title={"محاسبه‌گر \n" + "تقسیم به نسبت کالا"} />{//eslint-disable-line no-useless-concat
  }
          <div className={styles.formBox}>
            <SearchBarDivision />
            <TitleAccordionsDivison />
          </div>
        </div>
      </>
    );
  }
  return null;
};
