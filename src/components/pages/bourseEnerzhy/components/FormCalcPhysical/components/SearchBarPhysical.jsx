import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import styles from "../../FormCalc/style.module.css";

export const SearchBarPhysical = () => {
    return (
        <>
            <Form className="text-right">
                <Row className="mb-3">
                    <Col xs={12} md={6}>
                        <p className={styles.label}>مقدار</p>
                        <Form.Control className={styles.inputs}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className={styles.label}>واحد پولی</p>
                        <Form.Control className={styles.inputs} as="select" defaultValue="Choose...">
                            <option>انتخاب کنید...</option>
                            <option>...</option>
                        </Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p className={styles.label}>قیمت واحد</p>
                        <Form.Control className={styles.inputs}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <p className={styles.label}>هزینه حمل و سایر هزینه‌ها</p>
                        <Form.Control className={styles.inputs}/>
                    </Col>
                </Row>
                <div className={styles.btnWhy}><a href="/#">محاسبه</a></div>
            </Form>
        </>


    )


}