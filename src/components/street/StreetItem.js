import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "../../actions/house";
import { toggleStreet } from "../../actions/street";

import HouseList from "../house/HouseList";

const StreetItem = ({ street }) => {
  const dispatch = useDispatch();
  const selectedStreet = useSelector((state) => state.street.selectedStreet);

  const onStreetClickHandler = (street) => {
    let data = {
      streetId: street.id,
    };

    if (selectedStreet === street.id) {
      data = {
        streetId: null,
      };

      dispatch(toggleStreet(data));
    } else {
      dispatch(toggleStreet(data));
      dispatch(getHouses(data));
    }
  };

  return (
    <li>
      <p onClick={() => onStreetClickHandler(street)}>Улица {street.name}</p>

      {selectedStreet === street.id && <HouseList />}
    </li>
  );
};

export default StreetItem;
