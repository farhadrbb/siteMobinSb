import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "./style.module.css";
import { getApiContact } from "../../../redux/contactUs/action/getApiContact";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import ReCAPTCHA from "./../../common/recaptcha";
import "./ReactToastify.css";

export const ContactUs = (props) => {
  props.location.pathname.replace("/", "");

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);

  useEffect(() => { }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptcha) {
      toast.error("لطفا گزینه من ربات نیستم را انتخاب کنید");
      return
    }

    if (
      fullName === "" ||
      phoneNumber === "" ||
      email === "" ||
      title === "" ||
      content === "" ||
      fullName === " " ||
      phoneNumber === " " ||
      email === " " ||
      title === " " ||
      content === " "
    ) {
      toast.error("فیلد ها را با دقت پر کنید");
      return;
    }

    let data = {
      data: {
        sender_email: email,
        sender_full_name: fullName,
        sender_phone: phoneNumber,
        title: title,
        content: content,
        submit_date: null,
        status: null,
        response: null,
        response_date: null,
        response_source: null,
        responder_id: null,
        responder_first_name: null,
        responder_last_name: null,
      },
    };
    
    dispatch(getApiContact(data));

    setContent("");
    setTitle("");
    setEmail("");
    setPhoneNumber("");
    setFullName("");
  };

  const recaptchLoaded = (flag) => {
    setRecaptcha(flag);
  };
  // window.recaptchLoaded = recaptchLoaded;

  return (
    <>
      <div className={styles.sectionContact}>
        <div className="container">
          <div className="row text-center text-md-right mb-5 flex-column-reverse flex-md-row ">
            <div className="col-12 col-md-6">
              <div className="my-5 mt-md-0">
                <h3>فرم تماس باما</h3>
              </div>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="mb-3 text-right">
                  <Col xs="12" md="6" className={styles.inputContact}>
                    <p>نام ونام خانوادگی</p>
                    <Form.Control
                      type="text"
                      className={styles.input}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Col>
                  <Col xs="12" md="6" className={styles.inputContact}>
                    <p>تلفن همراه</p>
                    <Form.Control
                      type="number"
                      className={styles.input}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mb-3 text-right">
                  <Col xs="12" md="6" className={styles.inputContact}>
                    <p>پست الکترونیک</p>
                    <Form.Control
                      type="email"
                      className={styles.input}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col xs="12" md="6" className={styles.inputContact}>
                    <p>موضوع پیام</p>
                    <Form.Control
                      type="text"
                      className={styles.input}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs="12">
                    <p>متن پیام</p>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={6}
                      className={styles.inputTextarea}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </Col>
                </Row>

                <ReCAPTCHA
                  handelChange={() => recaptchLoaded(true)}
                  onExpired={() => recaptchLoaded(false)}
                />

                <div className={styles.btnWhy}>

                      <button
                        type="submit"
                        className={recaptcha  ? styles['btnSubmit'] : styles["disableButtom"]}
                        disabled={recaptcha ? "" : "disabled"}
                      >
                        ارسال پیام
                      </button>
                      
                </div>

              </Form>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="mb-5">
                <h3>دفتر مرکزی</h3>
              </div>
              <div className="mapouter">
                <div className="gmap_canvas">
                  {/* <iframe
                    className={styles.iframeTag}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe> */}
                  <iframe
                    className={styles.iframeTag}
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.1474653142618!2d51.4180215563776!3d35.72705094118586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01cbc1b52619%3A0xeae9d5d07b6434b8!2sMobin%20Sarmayeh%20Brokerage!5e0!3m2!1sen!2s!4v1624681621336!5m2!1sen!2s&quot"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title="11111"
                  ></iframe>
                  {/* 

<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1145.1474653142618!2d51.4180215563776!3d35.72705094118586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01cbc1b52619%3A0xeae9d5d07b6434b8!2sMobin%20Sarmayeh%20Brokerage!5e0!3m2!1sen!2s!4v1624681621336!5m2!1sen!2s&quot" 
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">

</iframe> */}
                  {/* <a href="https://123movies-to.org" /> //eslint-disable-line jsx-a11y/anchor-has-content */}
                  <br />
                </div>
              </div>
              <ul className={styles.listAdress}>
                <li className={styles.itemAdrees}>
                  <img
                    src={"/asset/images/Path 68.png"}
                    alt=""
                    className="ml-1"
                  />
                  تهران، خیابان قائم مقام فراهانی، خیابان هشتم، پلاک 19
                </li>
                <li className={styles.itemAdrees}>
                  <img
                    src={"/asset/images/Path 67.png"}
                    alt=""
                    className="ml-1"
                  />
                  1579
                </li>
                <li className={styles.itemAdrees}>
                  <img
                    src={"/asset/images/Group 81.png"}
                    alt=""
                    className="ml-1"
                  />
                  info@mobinsb.com
                </li>
                <li className={styles.itemAdrees}>
                  <div className="row">
                    <div className="col">
                      <a href="https://t.me/mobinsb" className="ml-1">
                        <img src={"/asset/images/Path 8.png"} alt="" />
                      </a>
                      <a
                        href="http://instagram.com/mobinsarmayeh/"
                        className="ml-1"
                      >
                        <img
                          src={"/asset/images/instagram-seeklogo.com.png"}
                          alt=""
                        />
                      </a>
                      <a href="https://www.aparat.com/Mobinsb" className="ml-1">
                        <img
                          src={"/asset/images/icon--color-black.png"}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 6Le0jlwbAAAAAJk7_ouGjsB-UtQT2DwHKSJMTsSt */}
      {/* 6Le0jlwbAAAAAJ8MAlmzp_djM5sTCfFRePipU27D */}

      <ToastContainer />
    </>
  );
};
