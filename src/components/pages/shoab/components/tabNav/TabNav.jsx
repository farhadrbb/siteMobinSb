import React, { useState } from "react";
import styles from "./style.module.css";

export const TabNav = ({ setFilterShoab, setLoadingOffice }) => {
  const [classState, setClassState] = useState(true);

  const handleClickShoab = (e) => {
    e.preventDefault();
    setClassState(true);
    setFilterShoab("shoab");
  };
  const handleClickBooks = (e) => {
    setLoadingOffice(true);
    e.preventDefault();
    setClassState(false);
    setFilterShoab("pishkhan");
  };

  return (
    <>
      <div className={styles.sectionTabShoab}>
        <div className="container">
          {/*        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">*/}
          {/*            <Tab eventKey="home"   title="شعب کارگزاری مبین سرمایه"  tabClassName={styles.tabBtn} >*/}

          {/*            </Tab>*/}
          {/*            <Tab  eventKey="profile" title="دفاتر پیشخوان" tabClassName={styles.tabBtn}>*/}
          {/*            </Tab>*/}
          {/*        </Tabs>*/}

          <div className="d-flex  align-content-center">
            <div
              className={
                classState ? `${styles.btnTabsActive}` : styles.btnTabs
              }
            >
              <a href="/#" onClick={handleClickShoab}>
                شعب کارگزاری مبین سرمایه
              </a>
            </div>
            <div
              className={
                !classState ? `${styles.btnTabsActive}` : styles.btnTabs
              }
            >
              <a href="/#" onClick={handleClickBooks}>
                دفاتر پیشخوان
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
