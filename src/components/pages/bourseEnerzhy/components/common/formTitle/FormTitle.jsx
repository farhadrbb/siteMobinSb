import React from "react";
import {ArrowDown} from "react-bootstrap-icons";

export const FormTitle = ({title}) => {


    return (
        <>
            <div className="text-center">
                <h3>{title}</h3>
                <ArrowDown/>
            </div>



        </>


    )
}