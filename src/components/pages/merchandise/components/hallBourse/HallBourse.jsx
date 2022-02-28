import React, { useState } from "react";
import styles from "../../style.module.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { NavTab } from "./NavTab";
import LineOrange from "../../../../common/LineOrange/LineOrange";

export const HallBourse = () => {
  const [classname, setClassname] = useState(0);

  return (
    <>
      <div className={styles.sectionHallBourse}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 text-center ">
              <div className="mb-5 text-center my-5">
                <h4>تالارهای معاملاتی بازار فیزیکی بورس کالا</h4>
                <LineOrange />
              </div>
              <div className="mb-5">
                <p style={{ fontSize: "14px", fontWeight: "200" }}>
                  {" "}
                  از زمان راه‌اندازی بورس کالای ایران، گروه‌های کالایی مختلفی در
                  این بازار پذیرش و عرضه شده‌‌اند که هر کدام ماهیت متفاوتی
                  دارند. بر همین اساس چندین تالار (رینگ) معاملاتی شامل صنعتی و
                  معدنی، کشاورزی، صادراتی، .فرعی و حراج یکجا در این بازار ایجاد
                  شده است
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7 mb-5 mb-lg-0">
              <div className={styles.tabParent}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                  <Row>
                    <Col sm={5} md={5}>
                      <Nav className={styles.navParent}>
                        {item.map((item, index) => (
                          <NavTab
                            item={item}
                            key={index}
                            idd={index}
                            classname={classname}
                            setClassname={setClassname}
                          />
                        ))}
                        {/*<Nav.Item>*/}
                        {/*    <Nav.LinkDowload onClick={handleClick}   eventKey="0">*/}
                        {/*        صنعتی و معدنی*/}
                        {/*        <hr className={styles.hr}/>*/}
                        {/*    </Nav.LinkDowload>*/}
                        {/*</Nav.Item>*/}
                        {/*<Nav.Item>*/}
                        {/*    <Nav.LinkDowload eventKey="1">*/}

                        {/*        پتروشیمی و فرآورده‌های نفتی*/}
                        {/*        <hr className={styles.hr}/>*/}
                        {/*    </Nav.LinkDowload>*/}
                        {/*</Nav.Item>*/}
                        {/*<Nav.Item>*/}
                        {/*    <Nav.LinkDowload eventKey="2"> پتروشیمی و فرآورده‌های نفتی*/}
                        {/*        <hr className={styles.hr}/>*/}
                        {/*    </Nav.LinkDowload>*/}
                        {/*</Nav.Item>*/}
                        {/*<Nav.Item>*/}
                        {/*    <Nav.LinkDowload eventKey="3">*/}
                        {/*        پتروشیمی و فرآورده‌های نفتی*/}
                        {/*        <hr className={styles.hr}/>*/}
                        {/*    </Nav.LinkDowload>*/}
                        {/*</Nav.Item>*/}
                        {/*<Nav.Item>*/}
                        {/*    <Nav.LinkDowload eventKey="4">*/}
                        {/*        پتروشیمی و فرآورده‌های نفتی*/}
                        {/*        <hr className={styles.hr}/>*/}
                        {/*    </Nav.LinkDowload>*/}
                        {/*</Nav.Item>*/}
                      </Nav>
                    </Col>
                    <Col
                      sm={7}
                      md={7}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <Tab.Content className="d-flex justify-content-center align-items-center p-3  text-center">
                        {item.map((item, index) => (
                          <Tab.Pane
                            eventKey={index}
                            className={styles.tabContent}
                            key={index}
                          >
                            <p>{item.text}</p>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

let item = [
  {
    text: "این گروه کالایی شامل گروه‌های اصلی فولاد، آلومینیوم، مس، روی، سرب، فلزات گرانبها، صنعتی و معدنی است. زیرگروه‌های اصلی مختلفی در این بخش وجود دارند، که از مهم‌ترین آن‌ها می‌توان به ورق، شمش و اسلب، مقاطع طویل و کنستانتره فلزات گرانبها اشاره نمود.      ",

    title: "صنعتی و معدنی",
  },
  {
    text: "این تالار استراتژیک شامل دو گروه اصلی فرآورده‌های نفتی و پتروشیمی است. در بخش زیرگروه‌های اصلی نیز مواردی نظیر وکیوم باتوم، سلاپس واکس، لوب کات، قیر، روغن، عایق رطوبتی، دوده، پلیمر و شیمیایی گنجانده شده‌اند. ",
    title: "پتروشیمی و فرآورده‌های نفتی",
  },
  {
    text: "با توجه به اهمیت تأمین، قیمت‌گذاری و توزیع کالاهای اساسی کشاورزی در سطح کشور، تالار محصولات کشاورزی از اهمیت به‌سزایی برخوردار است. از زیرگروه‌های اصلی این رینگ معاملاتی می‌توان به ذرت، برنج، جو، گندم و شکر اشاره کرد. ",

    title: "کشاورزی",
  },
  {
    text: "به منظور تسهیل در فرآیند صادرات تولیدات داخلی، یک تالار اختصاصی برای کالاهای صادراتی در بورس کالای ایران ایجاد شده است. به طور کلی انواع قیر، عایق‌های رطوبتی و گوگرد، برای صادرات در این رینگ معاملات کالایی عرضه می‌شوند. ",

    title: "صادراتی",
  },
  {
    text: "فلسفه اصلی ایجاد این تالار معاملاتی، پذیرش محصولات خارج از گونه‌ای است که عرضه آن‌ها مداوم نیست. کالاهای تالار فرعی در چهارچوب گروه‌های اصلی کشاورزی، صنعتی، فلزی، شیمیایی، معدنی، پلیمر، اموال غیرمنقول و ضایعات قرار می‌گیرند.",

    title: "فرعی و حراج یکجا",
  },
];
