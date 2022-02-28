import React from "react";
import {TitleAccordion} from "../../common/titleAccordion/TitleAccordion";
export const  TitleAccordionsOil=()=>{
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
]