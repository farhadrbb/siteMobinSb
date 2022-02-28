import React from "react";
import styles from "../../style.module.css";
import { Accordion, Card } from "react-bootstrap";
import { AccordionContent } from "./accordionContent/AccordionContent";
import { FormResume } from "../forms/components/FormResume";
import { Plus } from "react-bootstrap-icons";

export const AccordionResume = ({ item, id, setShow, show, icon, setIcon }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    if (show !== null) {
      setShow(null);
      return;
    }
    setShow(id);
  };
  const handleClickIcon = (e, id) => {
    // (id);
    if (icon !== null) {
      setIcon(null);
      return;
    }
    setIcon(id);
  };
  return (
    <>
      <Accordion className="text-right ">
        <Card className={styles.cardStyle}>
          <Accordion.Toggle
            className="d-flex justify-content-between"
            as={Card.Header}
            eventKey="0"
            onClick={(e) => handleClickIcon(e, id)}
          >
            {item.title}
            <div
              className={icon === id ? styles.plusIconActive : styles.plusIcon}
              onClick={(e) => handleClickIcon(e, id)}
            >
              <Plus />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {/*<div dangerouslySetInnerHTML={{__html: data.body.answer}} />*/}
              {item1.map((item, index) => (
                <AccordionContent item={item} id={index} key={index} />
              ))}
              <div
                className={styles.btnWhy}
                onClick={(e) => handleClick(e, id)}
              >
                <a href="/#">ثبت رزومه</a>
              </div>
              {show === id ? <FormResume /> : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

let item1 = [
  { text: "جنسیت: آقا، خانم\n" },
  { text: "نوع همکاری: تمام وقت، پاره وقت، پروژه‌ای\n" },
  { text: "تسلط کامل به طراحی وبسایت ورد پرس\n" },
  { text: "آشنا به طراحی گرافیکی همچون کاتالوگ سربرگ لوگو و قالب سایت\n" },
  { text: "ساعت کاری: 10 الی 18.30" },
];
