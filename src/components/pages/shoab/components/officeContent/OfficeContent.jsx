import React, { useEffect } from "react";
import styles from "../shoabAndOffice/style.module.css";
import style from "../../../account/style.module.css";
// import { getApiShoab } from "../../../../../redux/shoab/shoab/action/getApiShoab";
import { useDispatch } from "react-redux";
import { getApiOffice } from "../../../../../redux/shoab/office/action/getApiOffice";

function OfficeContent({ filterShoab, apiOffice, CityName, CityName1 }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterShoab === "pishkhan") {
      dispatch(getApiOffice());
    }
  }, [filterShoab]); //eslint-disable-line react-hooks/exhaustive-deps

  // let searchFilter = apiOffice.filter(
  //   (itm) =>
  //     itm.body.ProvinceName.includes(CityName) ||
  //     itm.body.Address.includes(CityName) ||
  //     itm.body.PhoneNumber.includes(CityName) ||
  //     itm.body.OfficeId.includes(CityName) ||
  //     itm.body.ProvinceName.includes(CityName1)
  //
  //   // itm.body.ProvinceName.includes(CityName1) ||
  //   // itm.body.Address.includes(CityName1)
  // );
  let searchFilter = apiOffice?.filter(
    (itm) =>
      CityName1.length !== 0
        ? itm.body.ProvinceName.includes(CityName1)
        : CityName?.length !== 0
        ? itm.body.OfficeId.includes(CityName) ||
          itm.body.Address.includes(CityName) ||
          itm.body.PhoneNumber.includes(CityName) ||
          itm.body.ProvinceName.includes(CityName)
        : !itm.body.ProvinceName.includes("تهران")

    // itm.body.Address.includes(CityName1)
  );

  // useEffect(() => {
  //   searchFilter = apiOffice.filter(
  //     (itm) =>
  //       itm.body.ProvinceName.includes(CityName1) ||
  //       itm.body.Address.includes(CityName1)
  //   );
  // }, [CityName1]);

  return (
    <>
      <div className={styles.sectionContent}>
        <div className="container text-right">
          <div className="table-responsive mb-5">
            <table className={`${style.tableParent + " table"}`}>
              <tr>
                <th>استان</th>
                <th>کد دفتر</th>
                <th>آدرس</th>
                <th>تلفن</th>
              </tr>
              {searchFilter?.map((item, index) => (
                <tr key={index}>
                  <td>{item.body.ProvinceName}</td>
                  <td>{item.body.OfficeId}</td>
                  <td>
                    <p style={{ width: "500px" }}>{item.body.Address}</p>
                  </td>
                  <td>{item.body.PhoneNumber}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficeContent;
