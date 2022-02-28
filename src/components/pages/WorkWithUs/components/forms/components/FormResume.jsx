import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { HeaderForm } from "./HeaderForm";
import styles from "../../../style.module.css";
import { InputText } from "./InputText";
import { ResumeButton } from "./ResumeButton";
import { useDispatch } from 'react-redux'
import { workwithus_v1_insert } from '../../../../../../redux/workwithus/workwithus_v1_insert/action';
import { toast } from "react-toastify";




export const FormResume = ({ filter, id }) => {

  const dispatch = useDispatch()

  const [value, setValue] = useState({ file_name: "" });

  const [state, setstate] = useState({
    sender_full_name: "",
    sender_email: "",
    sender_phone: "",
    job_position: "",
    sender_cv: ""
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

    if (!Object.keys(obj).length) {
      toast.error("لطفا فیلد های مورد نظر را پر نمایید");
      return
    }

    let res = {
      data: {
        ..._data
      },
    };

    dispatch(workwithus_v1_insert(res))


    setValue({ file_name: "" })
    setstate({
      sender_full_name: "",
      sender_email: "",
      sender_phone: "",
      job_position: "",
      sender_cv: ""
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


  // const [data, setData] = useState([{ id: 1 }]);
  // const [flag, setFlag] = useState([{ id: 1 }]);
  // const [flag1, setFlag1] = useState([{ id: 1 }]);

  // const addedItem = () => {
  //   setData((prev) => [...prev, { id: data.length + 1 }]);
  // };

  // const deleteItem = () => {
  //   let res = data.filter((item, ind) => ind + 1 !== data.length);
  //   setData(res);
  // };

  // const addedItemL1 = () => {
  //   setFlag((prev) => [...prev, { id: data.length + 1 }]);
  // };
  // const deleteItemL1 = () => {
  //   let res = flag.filter((item, ind) => ind + 1 !== data.length);
  //   setFlag(res);
  // };
  // const addedItem2 = () => {
  //   setFlag1((prev) => [...prev, { id: data.length + 1 }]);
  // };
  // const deleteItem2 = () => {
  //   let res = flag1.filter((item, ind) => ind + 1 !== data.length);
  //   setFlag1(res);
  // };

  // const handleClick = () => {
  //   // let int = {};
  //   // setFlag((prevState) => {
  //   //   return [...prevState, int];
  //   // });
  //   //
  //   const items = [...flag];
  //   const item = {
  //     id: flag.length + 1,
  //   };
  //   items.push(item);
  //   setFlag(items);
  // };
  //
  // const handleClick1 = () => {
  //   const items = [...flag];
  //   const filterData = items.filter((itm) => itm.id);
  //   (filterData);
  //   setFlag(filterData);
  //   (flag);
  // };

  return (
    <>

      <Form className="text-right p-lg-3">
        <HeaderForm title={"مشخصات فردی"} />
        <Row>
          <Col xs={12} className="mb-3">
            <p className={styles.label}> عنوان شغلی</p>

            <InputText value={state.job_position} setValues={(data) => handelChange("job_position", data)} />
          </Col>
          <Col xs={12} className="mb-3">
            <p className={styles.label}>نام و نام خانوادگی</p>

            <InputText value={state.sender_full_name} setValues={(data) => handelChange("sender_full_name", data)} />
          </Col>
          <Col xs={12} className="mb-3">
            <p className={styles.label}>تلفن همراه</p>
            <InputText value={state.sender_phone} setValues={(data) => handelChange("sender_phone", data)} />
          </Col>

          <Col>
            {/* <Row className="text-right mb-4 ">
              <Col xs={12}>
                <p className={styles.label}>تاریخ تولد</p>
              </Col>

              <Col>
                <SelectInput />
              </Col>

              <Col>
                <SelectInput />
              </Col>

              <Col>
                <SelectInput />
              </Col>
            </Row> */}
          </Col>
        </Row>

        {/* <Row>
          <Col xs={12} className="mb-3">
            <p className={styles.label}>وضعیت تأهل</p>
            <SelectInput />
          </Col>
          <Col xs={12} className="mb-3">
            <p className={styles.label}>وضعیت نظام وظیفه</p>
            <SelectInput />
          </Col>
        </Row> */}

        <Row>
          {/* <Col xs={12} className="mb-3">
            <p className={styles.label}>تلفن همراه</p>
            <InputText setValues={(data)=>handelChange("",data)} />
          </Col> */}
          <Col xs={12} className="mb-3">
            <p className={styles.label}>پست الکترونیک</p>
            <InputText value={state.sender_email} setValues={(data) => handelChange("sender_email", data)} />
          </Col>
        </Row>

        {/* <Row>
          <Col xs={12} className="mb-3">
            <p className={styles.label}>استان محل سکونت </p>
            <SelectInput />
          </Col>
          <Col xs={12} className="mb-3">
            <p className={styles.label}>شهر محل سکونت </p>
            <SelectInput />
          </Col>
        </Row>
        <HeaderForm title={"سوابق تحصیلی "} />
        {flag.map((itm, ind) => (
          <Row key={ind}>
            <Col xs={6} lg className="mb-3">
              <p className={styles.label}>مدرک تحصیلی </p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-3">
              <p className={styles.label}>رشته تحصیلی</p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-3">
              <p className={styles.label}>تاریخ شروع </p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-4">
              <p className={styles.label}>نام مرکز آموزشی</p>
              <InputText />
            </Col>
          </Row>
        ))}

        <p
          style={{ fontSize: "13px", cursor: "pointer" }}
          onClick={addedItemL1}
        >
          + جدید
        </p>
        {flag.length > 1 ? (
          <p
            style={{ fontSize: "13px", cursor: "pointer" }}
            onClick={deleteItemL1}
          >
            - حذف
          </p>
        ) : null}
        <HeaderForm title={"سوابق شغلی "} /> */}

        {/* {data.map((itm, ind) => (
          <Row className="mb-3" key={ind}>
            <Col xs={6} lg className="mb-4 mb-lg-3">
              <p className={styles.label}>نام سازمان یا شرکت </p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-3">
              <p className={styles.label}>سمت</p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-3">
              <p className={styles.label}>شغل </p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-4 mb-lg-3">
              <p className={styles.label}>تاریخ شروع </p>
              <InputText />
            </Col>
            <Col xs={6} lg className="mb-4 mb-lg-3">
              <p className={styles.label}>تاریخ پایان </p>
              <InputText />
            </Col>
          </Row>
        ))}
        <p style={{ fontSize: "13px", cursor: "pointer" }} onClick={addedItem}>
          + جدید
        </p>
        {data.length > 1 ? (
          <p
            style={{ fontSize: "13px", cursor: "pointer" }}
            onClick={() => deleteItem()}
          >
            - حذف
          </p>
        ) : null}

        <HeaderForm title={"گواهینامه‌ها، دوره‌های آموزشی و تدریس "} /> */}
        {/* {flag1.map((itm, ind) => (
          <Row className="mb-4">
            <Col xs={6}>
              <InputText />
            </Col>
            <Col xs={6}>
              <InputText />
            </Col>
          </Row>
        ))}
        <p style={{ fontSize: "13px", cursor: "pointer" }} onClick={addedItem2}>
          + جدید
        </p>
        {flag1.length > 1 ? (
          <p
            style={{ fontSize: "13px", cursor: "pointer" }}
            onClick={deleteItem2}
          >
            - حذف
          </p>
        ) : null}

        <HeaderForm title={"زبان انگلیسی"} /> */}
        {/* <Row className="mb-4">
          <Col className="mb-4" xs={6}>
            <p className={styles.label}>خواندن</p>
            <SelectInput />
          </Col>
          <Col xs={6}>
            <p className={styles.label}>نوشتن</p>
            <SelectInput />
          </Col>
          <Col xs={6}>
            <p className={styles.label}>مکالمه</p>
            <SelectInput />
          </Col>
        </Row> */}

        {/* <HeaderForm title={"نرم‌افزار"} />
        <Row className="mb-4">
          <Col xs={6}>
            <p className={styles.label}>نام نرم افزار</p>
            <InputText />
          </Col>
          <Col xs={6}>
            <p className={styles.label}>میزان تسلط</p>
            <SelectInput />
          </Col>
        </Row>
        <HeaderForm />
        <Row className="mb-4">
          <Col xs={6}>
            <p className={styles.label}>نحوه همکاری</p>
            <SelectInput />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12}>
            <p className={styles.label}>
              در صورت تمایل به کار پاره‌ وقت یا دورکاری، لطفاً روزها و ساعات
              کاری پیشنهادی خود را مشخص کنید.
            </p>
            <InputText />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <p className={styles.label}>توضیحات</p>
            <Form.Control as="textarea" rows={5} />
          </Col>
        </Row> */}
        <ResumeButton apiSubmit={apiSubmit} value={value} setValue={UploadFile} />
      </Form>
    </>
  );
};
