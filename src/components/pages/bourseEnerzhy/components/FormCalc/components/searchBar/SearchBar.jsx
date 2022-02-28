import React from "react";
import styles from "../../style.module.css";
import {Col, Form, Row} from "react-bootstrap";
export const SearchBar=()=>{
    return(
        <>

                <Form className="text-right">
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <p className={styles.label}>مقدار</p>
                            <Form.Control className={styles.inputs} />
                        </Col>
                        <Col xs={12} md={6}>
                            <p  className={styles.label}>هزینه خدمات توزیع</p>
                            <Form.Control   className={styles.inputs}/>
                        </Col>
                    </Row>
                      <Row>
                        <Col xs={12} md={6}>
                            <p className={styles.label}>قیمت</p>
                            <Form.Control className={styles.inputs} />
                        </Col>
                        <Col xs={12} md={6}>
                            <p  className={styles.label}>نوع بار</p>
                            <Form.Control className={styles.inputs} as="select" defaultValue="Choose...">
                                <option>انتخاب کنید...</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <div className={styles.btnWhy}><a href="/#">محاسبه</a></div>
                </Form>



        </>




    )


}