import React from "react";
import styles from "../../style.module.css";
import { FormResume } from "./components/FormResume";
import { FormRepresentation } from "../formRepresentation/FormRepresentation";
import { TitleForm } from "./components/TitleForm";
import { KeyboardArrowDown } from "@material-ui/icons";

export const Forms = ({ filter }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        {filter === 0 ? (
          <TitleForm title={"فرم رزومه فردی"} />
        ) : (
          <TitleForm title={"فرم اخذ نمایندگی / بازاریابی"} />
        )}
        <div className="mb-3">
          <KeyboardArrowDown />
        </div>
        <div className={styles.formBox}>
          {filter === 0 ? <FormResume /> : null}
          {filter === 1 ? <FormRepresentation /> : null}
        </div>
      </div>
    </>
  );
};
