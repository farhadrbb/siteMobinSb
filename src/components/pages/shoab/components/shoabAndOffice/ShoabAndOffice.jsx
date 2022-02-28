import React from "react";
// import styles from "./style.module.css";
// import style from "../../../account/style.module.css";
// import { getApiShoab } from "../../../../../redux/shoab/shoab/action/getApiShoab";
import ShoabContent from "../shoabContentt/ShoabContent";
import OfficeContent from "../officeContent/OfficeContent";

export const ShoabAndOffice = ({
  apiShoab,
  filterShoab,
  apiOffice,
  CityName,
  CityName1,
}) => {
  // const removeDuplicate = (data) => {
  //     return data = data.filter((value, index) => data.indexOf(value) === index)
  // }

  // const apiMap = apiShoab.map(item => {
  //     return item.body.CityName
  // })
  // const cityShoab = removeDuplicate(apiMap)
  // const filteredCourseTittle = apiShoab.filter((item) =>
  //   item.body.CityName.includes(filterCity)
  // );

  return (
    <>
      {filterShoab === "shoab" ? (
        <ShoabContent
          filterShoab={filterShoab}
          apiShoab={apiShoab}
          CityName={CityName}
          CityName1={CityName1}
        />
      ) : null}
      {filterShoab === "pishkhan" ? (
        <OfficeContent
          filterShoab={filterShoab}
          apiOffice={apiOffice}
          CityName={CityName}
          CityName1={CityName1}
        />
      ) : null}
    </>
  );
};
