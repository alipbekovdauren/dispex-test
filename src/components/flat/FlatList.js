import React from "react";

import { useSelector } from "react-redux";

import FlatItem from "./FlatItem";
import Info from "../Info";

const FlatList = () => {
  const flats = useSelector((state) => state.flat.flats);
  const flatLoading = useSelector((state) => state.flat.loading);
  const selectedHouse = useSelector((state) => state.house.selectedHouse);

  return flatLoading ? (
    <Info />
  ) : (
    <ul>
      {flats[`${selectedHouse}`].map((flat) => (
        <FlatItem key={flat.addressId} flat={flat} />
      ))}
    </ul>
  );
};

export default FlatList;
