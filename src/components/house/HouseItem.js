import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getFlats } from "../../actions/flat";
import { toggleHouse } from "../../actions/house";

import FlatList from "../flat/FlatList";

const HouseItem = ({ house }) => {
  const dispatch = useDispatch();
  const selectedHouse = useSelector((state) => state.house.selectedHouse);

  const onHouseClickHandler = (house) => {
    let data = {
      houseId: house.id,
    };

    if (selectedHouse === house.id) {
      data = {
        houseId: null,
      };

      dispatch(toggleHouse(data));
    } else {
      dispatch(toggleHouse(data));
      dispatch(getFlats(data));
    }
  };

  return (
    <li key={house.id}>
      <p onClick={() => onHouseClickHandler(house)}>{`Дом ${house.building}${
        house.corpus ? `, корпус ${house.corpus}` : ""
      }`}</p>

      {selectedHouse === house.id && <FlatList />}
    </li>
  );
};

export default HouseItem;
