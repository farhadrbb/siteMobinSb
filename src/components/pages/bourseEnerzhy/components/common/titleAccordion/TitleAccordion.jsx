import React from "react";
import {Accordion, Card} from "react-bootstrap";
import styles from "../../FormCalc/style.module.css";

export const TitleAccordion=({item})=>{

    return(
        <>
            <div className={styles.sectionAccordion}>

            {item.title==="کارمزد معاملات"?(
                <Accordion defaultActiveKey="0" className={styles.accordion}>

                    <Card className="border-0 p-0">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className={styles.toggleAccordion}  >
                         <div className="d-flex justify-content-between align-items-center mt-5">
                             <div className="w-100 text-right">
                                 <span style={{fontSize:'14px',fontWeight:"100"}}>{item.title}</span>
                             </div>
                             <div>
                                 <span style={{fontSize:'12px',fontWeight:'50',whiteSpace:"nowrap"}}>نمایش جزییات </span>
                             </div>
                         </div>
                       <div className={styles.Wage}>
                           <div><span>{item.price}</span></div>
                           <div><span>{item.unit}</span></div>
                       </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <table className="table text-right">
                                    <thead>
                                    <tr>
                                        <th scope="col">عنوان </th>
                                        <th scope="col">خرید</th>
                                        <th scope="col">فروش</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>

                                        <td>کارمزد شرکت بورس انرژی</td>
                                        <td>120</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>

                                        <td>کارمزد شرکت سپرده گذاری</td>
                                        <td>120</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>

                                        <td>کارمزد شرکت فناوری</td>
                                        <td>120</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>

                                        <td>کارمزد سازمان بورس</td>
                                        <td>120</td>
                                        <td>120</td>
                                    </tr>
                                    <tr>

                                        <td>جمع کارمزد</td>
                                        <td>120</td>
                                        <td>120</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>

            ):(
                <div className={styles.parentCard}>

                    <div className="mt-5 text-right w-100"><span style={{fontSize:"14px" ,fontWeight:"100"}}>{item.title}</span></div>
                    <div className={styles.titleAccordion}>
                        <div><span>{item.price}</span></div>
                        <div><span>{item.unit}</span></div>
                    </div>
                </div>
            )}



            </div>

        </>



    )

}