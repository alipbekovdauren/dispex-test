import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleFlat } from "../../actions/flat";

import CreateFlatClientForm from "./CreateFlatClientForm";
import FlatClientList from "./FlatClientList";

const FlatItem = ({ flat }) => {
  const dispatch = useDispatch();
  const selectedFlat = useSelector((state) => state.flat.selectedFlat);
  const [openModal, setOpenModal] = useState(false);
  const [clientAdd, setClientAdd] = useState(false);

  const onFlatClickHandler = () => {
    const data = {
      addressId: flat.addressId,
    };

    dispatch(toggleFlat(data));
    setOpenModal(true);
  };

  const onModalClose = () => {
    setOpenModal(false);
  };

  const onClientAdd = () => {
    setClientAdd(true);
  };

  return (
    <Fragment>
      <li>
        <p onClick={() => onFlatClickHandler()}>Квартира {flat.flat}</p>
      </li>

      {openModal && selectedFlat === flat.addressId && (
        <div className="modal">
          <div className="modal_header">
            <h2>
              Список жильцов квартиры {flat.flat}, дома {flat.building}, улицы{" "}
              {flat.streetName}
            </h2>

            <button onClick={() => onModalClose()}>Закрыть</button>
          </div>
          <button onClick={() => onClientAdd()}>Добавить жильца</button>

          {clientAdd && <CreateFlatClientForm flat={flat} />}

          <FlatClientList flat={flat} />
        </div>
      )}
    </Fragment>
  );
};

export default FlatItem;
