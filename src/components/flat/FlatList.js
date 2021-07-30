import React from "react";

import { useSelector } from "react-redux";

import FlatItem from "./FlatItem";
import Info from "../Info";

const FlatList = () => {
  const flats = useSelector((state) => state.flat.flats);
  const flatLoading = useSelector((state) => state.flat.loading);

  return flatLoading ? (
    <Info />
  ) : (
    <ul>
      {flats.map((flat) => (
        <FlatItem key={flat.addressId} flat={flat} />
      ))}
    </ul>
  );
};

export default FlatList;
