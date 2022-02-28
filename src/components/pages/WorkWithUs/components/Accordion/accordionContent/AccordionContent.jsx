import React from "react";
import styles from "../../../style.module.css";
export const AccordionContent=({item})=>{

    return(
        <>

            <div className="d-flex">
                <div className="d-flex justify-content-center align-items-center">
                    <div className={styles.circleOrange}></div>
                    <div className="d-flex justify-content-center align-items-center"><p className="mb-0 mr-2">{item.text}</p></div>

                </div>
            </div>


        </>



    )


}