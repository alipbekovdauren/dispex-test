import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteFlatClient } from "../../actions/flat";

const FlatClientList = ({ flat }) => {
  const dispatch = useDispatch();
  const selectedHouseId = useSelector((state) => state.house.selectedHouse);

  const onClientDelete = (client) => {
    const data = {
      ...client,
      houseId: selectedHouseId,
    };

    dispatch(deleteFlatClient(data));
  };

  return flat.clients.length === 0 ? (
    <p>
      <strong>Жильцов на данной квартире нет</strong>
    </p>
  ) : (
    <ul className="modal_list">
      {flat.clients.map((client) => (
        <li key={client.id}>
          <p>
            <span>{client.name}</span>
            <span>{client.email}</span>
            <span>{client.phone}</span>
          </p>
          <button onClick={() => onClientDelete(client)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default FlatClientList;
