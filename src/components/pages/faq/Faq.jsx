import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { faqApi } from "../../../redux/faq/action/GetData";
import styles from "./component/faqHeader/style.module.css";
import { Link } from "react-router-dom";
import { faqApFilter } from "../../../redux/faq/action/getFilterData";
import { Plus } from "react-bootstrap-icons";

export const Faq = (prop) => {
  const [flag, setFlag] = useState(false);

  const pathName = prop.location.pathname;

  const filterPathname = pathName.replace("/", "");
  const data = useSelector((state) => state.data);

  // const [category, setCategory] = useState("بورس انرژی");
  const [filterData, setFilterData] = useState("بورس انرژی");
  const [filterSearch, setFilterSearch] = useState();
  const [submitSearch, setSubmitSearch] = useState();

  const dispatch = useDispatch();

  let far = {
    table: filterPathname,
    data: {},
  };

  let getDataFilter = {
    table: filterPathname,
    data: {
      category: filterData,
      // question:filterSearch?filterSearch:null,
      // answer:filterSearch?filterSearch:null,
    },
  };

  let getDataSearch = {
    table: filterPathname,
    data: {
      // category: filterData,
      question: filterSearch ? filterSearch : null,
      answer: filterSearch ? filterSearch : null,
    },
  };

  useEffect(() => {
    dispatch(faqApi(far));
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const cat = data.map((item) => {
    return item.body.category;
  });
  const removeDuplicate = (data) => {
    return (data = data.filter(
      (value, index) => data.indexOf(value) === index
    ));
  };
  const dataBtn = removeDuplicate(cat);

  useEffect(() => {
    dispatch(faqApFilter(getDataFilter));
  }, [filterData]); //eslint-disable-line react-hooks/exhaustive-deps

  const filterDataa = useSelector((state) => state.filterData);

  const filterTittlethiri = filterDataa.map((item) => {
    return item.body.category;
  });

  const removeDuplicateTittleFilter = (data) => {
    return (data = data.filter(
      (value, index) => data.indexOf(value) === index
    ));
  };

  const DataFilterTittle = removeDuplicateTittleFilter(filterTittlethiri);

  const handleFilterData = (e) => {
    setFilterData(e.target.innerText);
    setSubmitSearch("");
    setFilterSearch("");
  };

  const handleFlag = () => {
    setFlag(!flag);
  };

  const handleSearch = (e) => {
    // (e.target.value);

    setFilterSearch(e.target.value);
  };

  const sumbitSearch = (e) => {
    e.preventDefault();

    setSubmitSearch(filterSearch);
    setFilterData("");
    dispatch(faqApFilter(getDataSearch));
  };

  return (
    <>
      <div className={styles.sectionFaqHeader}>
        <div className="container d-flex justify-content-center ">
          <div className="row w-100">
            <div className="col-12 mt-5 p-0">
              <div className={styles.searchBox}>
                <form
                  action=""
                  style={{ width: "100%", display: "flex", height: "60px" }}
                  onSubmit={(e) => sumbitSearch(e)}
                >
                  <input
                    type="text"
                    className={styles.inputSearch}
                    onChange={(e) => handleSearch(e)}
                    placeholder="عبارت مورد نظر خود را سرچ کنید"
                    value={filterSearch}
                  />
                  <button type="submit" className={styles.btnInput}>
                    <img src={"/asset/images/Path 101.png"} alt="" />
                  </button>
                </form>
              </div>
              <div className={styles.divider}>عنوان ها</div>
            </div>
            <div className="col-12 p-0 ">
              <ul className="row justify-content-center  list-unstyled p-0 m-0">
                {dataBtn.map((item, index) =>
                  index < 7 ? (
                    <li
                      className="col-4 col-lg  mb-3   text-center "
                      key={index}
                    >
                      <Link
                        className={
                          filterData === item
                            ? `${styles.btnFaqHeaderActive}`
                            : `${styles.btnFaqHeader}`
                        }
                        onClick={(e) => handleFilterData(e)}
                      >
                        {" "}
                        {item}
                      </Link>
                    </li>
                  ) : null
                )}

                {dataBtn.map((item, index) =>
                  index > 7 && flag ? (
                    <li
                      className="col-4 col-lg mb-3   text-center "
                      key={index}
                    >
                      <Link
                        className={
                          filterData === item
                            ? `${styles.btnFaqHeaderActive}`
                            : `${styles.btnFaqHeader}`
                        }
                        onClick={(e) => handleFilterData(e)}
                      >
                        {" "}
                        {item}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>

              <div
                className="col-12 d-flex justify-content-center "
                onClick={handleFlag}
              >
                <p className={styles.btnMore} onClick={handleFlag}>
                  نمایش عناوین بیشتر{" "}
                </p>
                <span className={flag ? styles.plusActive : styles.plus}>
                  <Plus />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ direction: "rtl" }}>
        <div className="container">
          <Accordion
            defaultActiveKey="0"
            className={style.root}
            style={{ direction: "rtl" }}
          >
            <Card className={style.cardAccordion}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className={style.accordionHeader}
              >
                {submitSearch ? "جستجو در : " : null}
                {submitSearch ? submitSearch : DataFilterTittle}
              </Accordion.Toggle>
              {filterDataa.map((data) => (
                <Accordion.Collapse eventKey="0" key={data.id}>
                  <Card.Body className="p-0">
                    <Accordion>
                      <Card className={style.cardStyle}>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {data.body.question}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.body.answer,
                              }}
                            />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Card.Body>
                </Accordion.Collapse>
              ))}
            </Card>
          </Accordion>
        </div>
      </div>
    </>
  );
};
