import React from "react";
import {TitleAccordion} from "../../../common/titleAccordion/TitleAccordion";
export const TitleAccordionsPower=()=>{

    return(
        <>
            {items.map(((item,index)=>(
                < TitleAccordion item={item} key={index}/>
            )))}

        </>



    )

}
let items=[
    {title:"ارزش معامله",price:"5600000",unit:"ریال"},
    {title:"کارمزد معاملات",price:"135",unit:"ریال"},
    {title:"مبلغ دریافتی بابت خدمات توزیع",price:"76000000",unit:"ریال"},
    {title:"ارزش کل",price:"350000000",unit:"ریال"},


]