import React from "react";
import {TitleAccordion} from "../../common/titleAccordion/TitleAccordion";
export const TitleAccordionsPhysical=()=>{
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
    {title:"ارزش کل با کارمزد و مالیات\n",price:"5600000",unit:"ریال"},
    {title:"کارمزد معاملات",price:"135",unit:"ریال"},
    {title:"مبلغ دریافتی بابت خدمات توزیع",price:"76000000",unit:"ریال"},
    {title:"ارزش کل",price:"350000000",unit:"ریال"},
    {title:"قیمت واحد با کارمزد و مالیات",price:"350000000",unit:"ریال"},
    {title:"مالیات ارزش افزوده",price:"350000000",unit:"ریال"},
    {title:"ارزش کل با احتساب کارمزد",price:"350000000",unit:"ریال"},
    {title:"ارزش کل با کارمزد و مالیات و سایر هزینه‌ها",price:"350000000",unit:"ریال"},
    {title:"قیمت واحد با احتساب کارمزد\n",price:"350000000",unit:"ریال"},
    {title:"قیمت واحد با کارمزد و مالیات و سایر هزینه‌ها\n",price:"350000000",unit:"ریال"},


]