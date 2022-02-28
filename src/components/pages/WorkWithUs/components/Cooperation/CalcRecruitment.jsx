import React from "react";
import styles from "../../style.module.css";
import classNames from "classnames";

export const CalcRecruitment = ({ item, setFilterForm, id, filterForm }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    setFilterForm(id);
  };

  return (
    <>
      <div className={styles.parent}>
        <div
          className={classNames(
            id === filterForm ? styles.calcBoxClick : styles.calcBox
          )}
        >
          <div className="mb-2">
            {/*<img src={`/asset/images/iconBourse/${item.src}`} className="img-fluid" width="60" alt=""/>*/}
            <svg
              className="icon  img-fluid px-2"
              style={{ width: "100px", height: "55px" }}
            >
              <use xlinkHref={`/sprite.svg${item.src}`}></use>
            </svg>
          </div>
          <div className="text-right ">
            <p style={{ fontSize: "12px" }} className="mb-0">
              {item.text2}
            </p>
          </div>
          <div className="text-left d-flex justify-content-end w-100 mt-3 ">
            <div className={styles.btnWhy} onClick={(e) => handleClick(e, id)}>
              <div href="/#">{item.btn}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
