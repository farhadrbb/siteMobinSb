import React from "react";
import {NavBox} from "./NavBox";
import styles from "../style.module.css"
import classNames from "classnames";

export const NavBoxs = ({itemAll}) => {


    return (
        <>
            {itemAll.map((item, index) => (
                <>
                    <div className={classNames(styles.divider, "col")}>
                        <NavBox item={item} key={index}/>
                    </div>
                </>

            ))}


        </>


    )

}
