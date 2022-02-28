import React from "react";
import styles from "../../FormCalc/style.module.css";
import {Col, Form, Row} from "react-bootstrap";
export const SearchBarDivision=()=>{
    return(
        <>

            <Form className="text-right">
                <Row className="mb-3">
                    <Col xs={12} md={6}>
                        <p className={styles.label}>حجم کل عرضه</p>
                        <Form.Control className={styles.inputs} />
                    </Col>
                    <Col xs={12} md={6}>
                        <p  className={styles.label}>حجم کل تقاضا</p>
                        <Form.Control   className={styles.inputs}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p className={styles.label}>مقدار تقاضا</p>
                        <Form.Control className={styles.inputs} />
                    </Col>
                    <Col xs={12} md={6}>
                        <p className={styles.label}>ضریب محموله</p>
                        <Form.Control className={styles.inputs} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p className={styles.label}>ضریب محموله</p>
                        <Form.Control className={styles.inputs} />
                    </Col>

                </Row>
                <div className={styles.btnWhy}><a href="/#">محاسبه</a></div>
            </Form>



        </>




    )


}