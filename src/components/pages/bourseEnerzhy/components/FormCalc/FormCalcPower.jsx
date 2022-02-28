import React from "react";
import { SearchBar } from "./components/searchBar/SearchBar";
import styles from "./style.module.css";
import { TitleAccordionsPower } from "./components/TitleAccordions/TitleAccordionsPower";
import { FormTitle } from "../common/formTitle/FormTitle";

export const FormCalcPower = ({ filter }) => {
  if (filter.id === 0) {
    return (
      <>
        <div
          className="d-flex  flex-column align-items-center mb-5"
          style={{ minHeight: "100vh" }}
        >
          <FormTitle title={"محاسبه\n" + "کارمزد بازار برق"} />{//eslint-disable-line no-useless-concat
  }
          <div className={styles.formBox}>
            <SearchBar />
            <TitleAccordionsPower />
          </div>
        </div>
      </>
    );
  }
  return null;
};
