import React from "react";
import styles from "../../FormCalc/style.module.css";

export const TitleAccodionDivision=({item})=>{
    return(
        <>
            <div className={styles.sectionAccordion}>
                    <div className="d-flex align-items-center flex-column w-100">
                        <div className="mt-5 text-right w-100"><span style={{fontSize:"14px" ,fontWeight:"100"}}>{item.title}</span></div>
                        <div className={styles.titleAccordion}>
                            <div><span>{item.price}</span></div>
                            <div><span>{item.unit}</span></div>
                        </div>
                    </div>

            </div>


        </>


    )


}