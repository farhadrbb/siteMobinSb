import React from "react";
import styles from "./style.module.css"


export const UlItem = ({items}) => {

    return (
        <>
                    <li className={styles.listItem}>
                        <img src={"/asset/images/Path 80.png"} width="20" className="ml-4 ml-lg-1" alt=""/>
                        {items}
                    </li>
        </>


    )


}