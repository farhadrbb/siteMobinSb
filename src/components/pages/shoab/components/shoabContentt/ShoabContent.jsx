import React, { useEffect } from "react";
import styles from "../shoabAndOffice/style.module.css";
import style from "../../../account/style.module.css";
import { getApiShoab } from "../../../../../redux/shoab/shoab/action/getApiShoab";
import { useDispatch } from "react-redux";

const ShoabContent = ({ filterShoab, apiShoab, CityName, CityName1 }) => {
  const dispatch = useDispatch();
  console.log("city", CityName1);

  let searchFilter = apiShoab.filter(
    (itm) =>
      CityName1.length !== 0
        ? itm.body.CityName.includes(CityName1)
        : CityName?.length !== 0
        ? itm.body.CityName.includes(CityName) ||
          itm.body.CityCodePhoneNumber.includes(CityName) ||
          itm.body.PhoneNumber.includes(CityName) ||
          itm.body.ProvinceName.includes(CityName)
        : !itm.body.ProvinceName.includes("تهران")

    // itm.body.Address.includes(CityName1)
  );

  // useEffect(() => {
  //   searchFilter = apiOffice.filter(
  //     (itm) =>
  //       itm.body.CityName.includes(CityName1) ||
  //       itm.body.Address.includes(CityName1)
  //   );
  // }, [CityName1]);

  useEffect(() => {
    if (filterShoab === "shoab") {
      dispatch(getApiShoab());
    }
  }, [filterShoab]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className={styles.sectionContent}>
        <div className="container text-right">
          <div className="table-responsive mb-5">
            <table className={`${style.tableParent + " table"}`}>
              <tr>
                <th>استان</th>
                <th>شهر</th>
                <th>مسئول</th>
                <th>آدرس</th>
                <th>تلفن</th>
                <th>پیش شماره</th>
              </tr>
              {searchFilter.map((item, index) => (
                <tr key={index}>
                  <td>{item.body.ProvinceName}</td>
                  <td>{item.body.CityName}</td>
                  <td>{item.body.DirectorName}</td>
                  <td>
                    <p style={{ width: "500px" }}>{item.body.Address}</p>
                  </td>
                  <td>{item.body.PhoneNumber}</td>
                  <td>{item.body.CityCodePhoneNumber}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoabContent;
