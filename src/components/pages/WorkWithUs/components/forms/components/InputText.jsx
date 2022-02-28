import React from "react";
import { Form } from "react-bootstrap";
import styles from "../../../style.module.css";

export const InputText = ({ value , setValues }) => {
    return (
        <>
            <Form.Control
             value={value} 
             onChange={(event)=>setValues(event.target.value)}
              className={styles.inputs} />
        </>
    )
}