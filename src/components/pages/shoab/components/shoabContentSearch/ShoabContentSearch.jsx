import React, { useState } from "react";
import styles from "./style.module.css";

export const ShoabContentSearch = ({
  setState,
  apiShoab,
  setCityName,
  CityName,
  setCityName1,
  CityName1,
}) => {
  const [classState, setClassState] = useState();
  const [classState1, setClassState1] = useState();
  const handleBtnTeh = (e) => {
    e.preventDefault();
    setClassState(true);
    setClassState1(false);

    setCityName1("تهران");
    setCityName([]);
  };
  const handlebtnOthetCity = (e) => {
    e.preventDefault();
    setClassState(false);
    // const city = apiShoab.map(item => {
    //     return item.body.CityName
    // })
    setClassState1(true);
    setCityName1([]);
  };
  const handeChange = (e) => {
    setCityName(e.target.value);
    setCityName1([]);
    setClassState(false);
  };

  return (
    <>
      <div className={styles.sectionContentSearch}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center  flex-column-reverse flex-md-row mt-5 mt-md-0 pr-3">
            <div className={styles.searchBox}>
              <input
                value={CityName}
                type="text"
                className={styles.inputSearchShoab}
                placeholder="عبارت مورد نظر خود را جستجو  کنید"
                onChange={(e) => handeChange(e)}
              />
              <button type="submit" className={styles.btnInputShoab}>
                <img src={"/asset/images/Path 101.png"} alt="" />
              </button>
            </div>
            <div>
              <div className={styles.btnsShoab}>
                <div
                  onClick={handleBtnTeh}
                  className={
                    classState ? `${styles.btnShoab2}` : styles.btnShoab1
                  }
                >
                  <a
                    href="/#"
                    className={classState ? styles.btnShoab1A : null}
                  >
                    استان تهران
                  </a>
                </div>
                <div
                  onClick={handlebtnOthetCity}
                  className={
                    !classState ? `${styles.btnShoab2}` : styles.btnShoab1
                  }
                >
                  <a
                    href="/#"
                    className={classState1 ? styles.btnShoab2A : null}
                  >
                    سایر استان ها
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
