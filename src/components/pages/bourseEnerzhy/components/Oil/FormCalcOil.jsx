import React from "react";
import { FormTitle } from "../common/formTitle/FormTitle";
import styles from "../FormCalc/style.module.css";
import { SearchBarOil } from "./components/SearchBarOil";
import { TitleAccordionsOil } from "./components/TitleAccordionsOil";
export const FormCalcOil = ({ filter }) => {
  if (filter.id === 4) {
    return (
      <>
        <div
          className="d-flex  flex-column align-items-center mb-5"
          style={{ minHeight: "100vh" }}
        >
          <FormTitle title={"تبدیل \n" + "واحدهای نفتی"} />{//eslint-disable-line no-useless-concat
  }
          <div className={styles.formBox}>
            <SearchBarOil />
            <TitleAccordionsOil />
          </div>
        </div>
      </>
    );
  }
  return null;
};
