import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { HeaderForm } from "../forms/components/HeaderForm";
import styles from "../../style.module.css";
import { InputText } from "../forms/components/InputText";
import { SelectInput } from "../forms/components/SelectInput";
import { ResumeButton } from "../forms/components/ResumeButton";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'

import { workwithus_v1_insert_fromRepresentation } from './../../../../../redux/workwithus/workwithus_v1_insert_fromRepresentation/action'

export const FormRepresentation = ({ filter }) => {

  const dispatch = useDispatch()

  const [value, setValue] = useState({ file_name: "" });

  const [state, setstate] = useState({
    sender_full_name: "",
    sender_email: "",
    sender_phone: "",
    sender_cv: "",
    monthly_turnover: items[0].text,
    duration_activity: "",
    request_reasons: "",
    management_experiences: ""
  })


  const apiSubmit = (data) => {

    const { file } = data

    let _data = {
      ...state,
      sender_cv: file ? file : '',
    }

    let obj = {};

    Object.keys(_data).forEach((element) => {
      if (_data[element]) {
        obj[element] = _data[element];
      }
    });

    if (Object.keys(obj).length <= 1) {
      toast.error("لطفا فیلد های مورد نظر را پر نمایید");
      return
    }

    let res = {
      data: {
        ..._data
      },
    };

    dispatch(workwithus_v1_insert_fromRepresentation(res))

    setValue({ file_name: "" })
    setstate({
      sender_full_name: "",
      sender_email: "",
      sender_phone: "",
      sender_cv: "",
      monthly_turnover: items[0].text,
      duration_activity: "",
      request_reasons: "",
      management_experiences: ""
    })

  }

  const handelChange = (type, value) => {
    setstate(prev => ({
      ...prev,
      [type]: value
    }))
  }

  const UploadFile = (data) => {
    if (
      data.file_type === 'jpeg'||
      data.file_type === 'pdf' ||
      data.file_type === 'jpg' ||
      data.file_type === 'png'
    ) {
      setValue(data)
    } else {
      toast.error("لطفا فایل را با فرمت های مشخص شده وارد بفرمایید ( jpeg , pdf , jpg , png )");
    }
  }

  return (
    <>
      <Form className="text-right p-lg-3">
        <HeaderForm title={"مشخصات فردی"} />
        <Row className="mb-4">
          <Col xs={6}>
            <p className={styles.label}>نام و نام خانوادگی</p>
            <InputText
              value={state.sender_full_name}
              setValues={(data) => handelChange("sender_full_name", data)}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={6}>
            <p className={styles.label}>تلفن همراه</p>
            <InputText
              value={state.sender_phone}
              setValues={(data) => handelChange("sender_phone", data)}
            />
          </Col>
          <Col xs={6}>
            <p className={styles.label}>پست الکترونیک</p>
            <InputText
              value={state.sender_email}
              setValues={(data) => handelChange("sender_email", data)}
            />
          </Col>
        </Row>
        <HeaderForm title={"اطلاعات مالی"} />
        <Row className="mb-4">
          <Col xs={6}>
            <p className={styles.label}>
              متوسط گردش مالی ماهیانه (میلیارد تومان)
            </p>
            <SelectInput
              value={state.monthly_turnover}
              setValues={(data) => handelChange("monthly_turnover", data)}
              items={items}
            />
          </Col>
          <Col xs={6}>
            <p className={styles.label}>مدت زمان فعالیت در بازار سرمایه </p>
            <InputText
              value={state.duration_activity}
              setValues={(data) => handelChange("duration_activity", data)}
            />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={6}>
            <p className={styles.label}>دلایل درخواست شعبه </p>
            <InputText
              value={state.request_reasons}
              setValues={(data) => handelChange("request_reasons", data)}
            />
          </Col>
          <Col xs={6}>
            <p className={styles.label}>سوابق مدیریتی </p>
            <InputText
              value={state.management_experiences}
              setValues={(data) => handelChange("management_experiences", data)}
            />
          </Col>
        </Row>
        <ResumeButton apiSubmit={(data) => apiSubmit(data)} value={value} setValue={UploadFile} />
      </Form>
    </>
  );
};

let items = [
  { text: "کمتر از 1 میلیارد تومان" },
  { text: "بین 1 تا 5 میلیارد تومان" },
  { text: "بین 5 تا 50 میلیارد تومان" },
  { text: "بین 50 تا 200 میلیارد تومان" },
  { text: "بیش از 200 میلیارد تومان" },
];
