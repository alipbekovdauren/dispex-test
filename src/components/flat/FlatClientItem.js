import React from "react";

import { useDispatch } from "react-redux";
import { deleteFlatClient } from "../../actions/flat";

const FlatClientItem = ({ client }) => {
  const dispatch = useDispatch();

  const onClientDelete = (client) => {
    const data = {
      ...client,
    };

    dispatch(deleteFlatClient(data));
  };

  return (
    <li key={client.id}>
      <p>
        <span>{client.name}</span>
        <span>{client.email}</span>
        <span>{client.phone}</span>
      </p>
      <button onClick={() => onClientDelete(client)}>Удалить</button>
    </li>
  );
};

export default FlatClientItem;
