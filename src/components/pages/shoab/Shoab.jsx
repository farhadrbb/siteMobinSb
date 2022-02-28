import React, { useEffect, useState } from "react";
import { TabNav } from "./components/tabNav/TabNav";
import { ShoabAndOffice } from "./components/shoabAndOffice/ShoabAndOffice";
import { ShoabContentSearch } from "./components/shoabContentSearch/ShoabContentSearch";
import { useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";

export const Shoab = () => {
  const [filterShoab, setFilterShoab] = useState("shoab");
  const [filterCity, setFilterCitty] = useState([]);
  const [CityName, setCityName] = useState([]);
  const [CityName1, setCityName1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingOffice, setLoadingOffice] = useState(false);
  const apiShoab = useSelector((state) => state.apiShoab);
  const apiOffice = useSelector((state) => state.apiOffice);

  // const searchFilter = apiShoab.filter(
  //   (itm) =>
  //     itm.body.CityName.includes(CityName) ||
  //     itm.body.Address.includes(CityName)
  // );
  useEffect(() => {
    if (apiShoab.length !== 0) {
      setLoading(false);
    }
  }, [apiShoab]);
  useEffect(() => {
    if (apiOffice.length !== 0) {
      setLoadingOffice(false);
    }
  }, [apiOffice]);

  return (
    <>
      <TabNav
        setFilterShoab={setFilterShoab}
        setLoadingOffice={setLoadingOffice}
      />
      {loading && (
        <LinearProgress
          style={{ backgroundColor: "orange", color: "orange" }}
        />
      )}
      {loadingOffice && (
        <LinearProgress
          style={{ backgroundColor: "orange", color: "orange" }}
        />
      )}

      <ShoabContentSearch
        setState={setFilterCitty}
        apiShoab={apiShoab}
        setCityName={setCityName}
        CityName={CityName}
        setCityName1={setCityName1}
        CityName1={CityName1}
      />
      <ShoabAndOffice
        apiShoab={apiShoab}
        filterShoab={filterShoab}
        filterCity={filterCity}
        CityName={CityName}
        apiOffice={apiOffice}
        CityName1={CityName1}
      />
    </>
  );
};
