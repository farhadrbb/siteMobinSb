import React, { useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAccountApi } from "../../../redux/account/action/getAccountApi";
import { Dash, Plus } from "react-bootstrap-icons";

export const Account = ({ flag, setFlag }) => {

  const dataAccountAll = useSelector((state) => state.dataAccount);
  const dispatch = useDispatch();

  const dataGroup = dataAccountAll.map((item) => {
    return item.Group;
  });


  const handleClick = (ind) => {
    // if (flag !== null) {
    //   return setFlag(null);
    // }
    setFlag(ind);
  };

  const removeDuplicate = (data) => {
    return (data = data.filter(
      (value, index) => data.indexOf(value) === index
    ));
  };
  const filterDataGroup = removeDuplicate(dataGroup);

  let data = {

    data: {
      name: "accounts",
    },
  };

  useEffect(() => {
    dispatch(getAccountApi(data));
    handleClick(0)
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ direction: "rtl" }}>
      <div className="container">
        <Accordion className={style.root} style={{ direction: "rtl" }} defaultActiveKey="0">
          {filterDataGroup.map((card, index) => (
            <Card className={style.cardAccordion} key={index}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey={JSON.stringify(index)}
                className={style.accordionHeader}
                onClick={() => handleClick(index)}
              >
                {flag === index ? <Plus /> : <Dash />}
                {card}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={JSON.stringify(index)}>
                <Card.Body className="table-responsive">
                  <table className={`${style.tableParent + " table"}`}>
                    <tr>
                      <th>بانک</th>
                      <th>نوع حساب</th>
                      <th>شماره حساب</th>
                      <th>شماره شبا</th>
                    </tr>
                    {dataAccountAll
                    .filter(info => info.Group === card)
                    .map((info, ind) => (
                      <tr key={ind}>
                        <td>{info.Bank}</td>
                        <td>{info.Group}</td>
                        <td>{info.Number}</td>
                        <td >{info.Sheba}</td>
                      </tr>
                    ))}
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
