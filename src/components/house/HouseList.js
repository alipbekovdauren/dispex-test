import React from "react";

import { useSelector } from "react-redux";

import HouseItem from "./HouseItem";
import Info from "../Info";

const HouseList = () => {
  const houses = useSelector((state) => state.house.houses);
  const houseLoading = useSelector((state) => state.house.loading);

  return houseLoading ? (
    <Info />
  ) : (
    <ul>
      {houses.map((house) => (
        <HouseItem key={house.id} house={house} />
      ))}
    </ul>
  );
};

export default HouseList;
