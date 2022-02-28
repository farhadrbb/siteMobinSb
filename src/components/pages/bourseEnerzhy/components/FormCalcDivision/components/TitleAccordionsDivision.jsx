import React from "react";
import {TitleAccodionDivision} from "./TitleAccodionDivision";

export const TitleAccordionsDivison = () => {

    return (
        <>

            <div className="row w-100">
                {items.map(((item, index) => (
                    <div className="col-6">
                        < TitleAccodionDivision item={item} key={index}/>
                    </div>
                )))}
            </div>


        </>


    )

}
let items = [
    {title: "مقداری که به ما می رسد (ناخالص)\n", price: "1", unit: "ریال"},
    {title: "مقداری که باید وارد شویم (ناخالص)\n", price: "135", unit: "ریال"},
    {title: "مقداری که به ما بر اساس ضریب می رسد\n", price: "34", unit: "ریال"},
    {title: "مقدار (خالص)\n", price: "34", unit: "ریال"},
    {title: "تعداد محموله\n", price: "1", unit: "ریال"},
    {title: "تعداد محموله\n", price: "2", unit: "ریال"},
]