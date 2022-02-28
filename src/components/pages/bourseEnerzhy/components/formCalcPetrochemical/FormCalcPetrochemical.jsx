import React from "react";
import { FormTitle } from "../common/formTitle/FormTitle";
import styles from "../FormCalc/style.module.css";
import { TitleAccordionsPhysical } from "../FormCalcPhysical/components/TitleAccordionsPhysical";
import { SearchBarPetrochemical } from "./components/SearchBarPetrochemical";

export const FormCalcPetrochemical = ({ filter }) => {
  if (filter.id === 2) {
    return (
      <>
        <div
          className="d-flex  flex-column align-items-center mb-5"
          style={{ minHeight: "100vh" }}
        >
          <FormTitle title={"محاسبه\n" + "کارمزد بازار پتروشیمی"} /> {//eslint-disable-line no-useless-concat
          }
          <div className={styles.formBox}>
            <SearchBarPetrochemical />
            <TitleAccordionsPhysical />
          </div>
        </div>
      </>
    );
  }
  return null;
};
