import React from "react";

import { useSelector } from "react-redux";

import StreetItem from "./StreetItem";
import Info from "../Info";

const StreetList = () => {
  const streets = useSelector((state) => state.street.streets);
  const streetsLoading = useSelector((state) => state.street.loading);

  return streetsLoading ? (
    <Info />
  ) : (
    <ul>
      {streets.length > 0 ? (
        streets.map((street) => <StreetItem key={street.id} street={street} />)
      ) : (
        <p>Нет данных</p>
      )}
    </ul>
  );
};

export default StreetList;
