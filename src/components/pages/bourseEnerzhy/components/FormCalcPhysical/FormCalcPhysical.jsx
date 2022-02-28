import React from "react";
import { SearchBarPhysical } from "./components/SearchBarPhysical";
import { FormTitle } from "../common/formTitle/FormTitle";
import styles from "../FormCalc/style.module.css";
import { TitleAccordionsPhysical } from "./components/TitleAccordionsPhysical";

export const FormCalcPhysical = ({ filter }) => {
  if (filter.id === 1) {
    return (
      <>
        <div
          className="d-flex  flex-column align-items-center mb-5"
          style={{ minHeight: "100vh" }}
        >
          <FormTitle title={"محاسبه \n" + "کارمزد بازار فیزیکی"} />{//eslint-disable-line no-useless-concat
  }
          <div className={styles.formBox}>
            <SearchBarPhysical />
            <TitleAccordionsPhysical />
          </div>
        </div>
      </>
    );
  }
  return null;
};
