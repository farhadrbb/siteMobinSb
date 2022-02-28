import React from "react";
import styles from "../style.module.css";
import { Plus } from "react-bootstrap-icons";

export const CalcBox = ({ src, text, text2, setFilter, id, filter }) => {
  const handleClick = (id) => {
    if (filter.id === id) {
      setFilter({});
    } else {
      setFilter({ id: id });
    }
  };

  return (
    <>
      <div className={styles.parent}>
        <div
          className={filter.id === id ? styles.calcBoxActive : styles.calcBox}
          onClick={(e) => handleClick(id)}
        >
          <div className="mb-2">
            {/*<img src={`/asset/images/iconBourse/${src}` } className="img-fluid mb-1" alt=""/>*/}
            <svg
              className="icon ml-2 img-fluid"
              style={{ width: "70px", height: "55px" }}
            >
              <use xlinkHref={`/sprite.svg${src}`}></use>
            </svg>
          </div>
          <div className="text-right pr-3">
            <p className="mb-0" style={{ fontSize: "13px" }}>
              {text}
            </p>
            <p className="mb-3" style={{ fontSize: "13px" }}>
              {text2}
            </p>
          </div>
          <div className="text-left d-flex justify-content-end mr-auto">
            <div
              className={
                filter.id === id ? styles.plusIconActive : styles.plusIcon
              }
            >
              <Plus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
