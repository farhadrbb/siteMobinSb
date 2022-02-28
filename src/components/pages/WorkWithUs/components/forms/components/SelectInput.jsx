import React from "react";
import styles from "../../../style.module.css";
import { Form } from "react-bootstrap";
// import { MenuItem } from "@material-ui/core";
export const SelectInput = ({ items , value , setValues }) => {
  // value={state.sender_email} setValues={(data) => handelChange("sender_email", data)}
  return (
    <>
      <Form.Control
        as="select"
        value={value}
        defaultValue={value}
        className={styles.inputs}
        onChange={()=>console.log()}
      >
        {items
          ? items.map((itm, ind) => (
              <option value={itm.text} key={ind} onClick={()=>setValues(itm.text)}>
                {itm.text}
              </option>
            ))
          : null}
      </Form.Control>
    </>
  );
};
