import React from "react";

import FlatClientItem from "./FlatClientItem";

const FlatClientList = ({ flat }) => {
  return flat.clients.length === 0 ? (
    <p>
      <strong>Жильцов на данной квартире нет</strong>
    </p>
  ) : (
    <ul className="modal_list">
      {flat.clients.map((client) => (
        <FlatClientItem client={client} />
      ))}
    </ul>
  );
};

export default FlatClientList;
