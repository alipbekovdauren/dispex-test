import { url, config } from "./api";
import {
  GET_FLATS,
  FLAT_LOADING,
  DELETE_FLAT_CLIENT,
  TOGGLE_FLAT,
  CREATE_FLAT_CLIENT,
  SET_ALERT,
  FLAT_ERROR,
} from "./types";

export const getFlats = (data) => async (dispatch) => {
  try {
    dispatch({
      type: FLAT_LOADING,
    });

    const response = await fetch(
      `${url}/HousingStock?companyId=${data.companyId}&streetId=${data.streetId}&houseId=${data.houseId}`
    );
    const flats = await response.json();

    dispatch({
      type: GET_FLATS,
      payload: flats,
    });
  } catch (error) {
    dispatch({
      type: FLAT_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Произошла ошибка",
      },
    });
  }
};

export const createFlatClient = (data) => async (dispatch) => {
  try {
    let response = await fetch(`${url}/HousingStock/client`, {
      method: "POST",
      body: JSON.stringify(data),
      ...config,
    });

    let result = await response.json();

    await fetch(`${url}/HousingStock/bind_client`, {
      method: "PUT",
      body: JSON.stringify({
        AddressId: data.addressId,
        ClientId: result.id,
      }),
      ...config,
    });

    response = await fetch(`${url}/HousingStock/client?phone=${data.Phone}`);

    result = await response.json();

    const payloadData = {
      houseId: data.houseId,
      addressId: data.addressId,
      client: result,
    };

    dispatch({
      type: CREATE_FLAT_CLIENT,
      payload: payloadData,
    });
  } catch (err) {
    dispatch({
      type: FLAT_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Произошла ошибка при добавлении жильца",
      },
    });
  }
};

export const deleteFlatClient = (data) => async (dispatch) => {
  try {
    await fetch(`${url}/HousingStock/bind_client/${data.bindId}`, {
      method: "DELETE",
      ...config,
    });

    dispatch({
      type: DELETE_FLAT_CLIENT,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FLAT_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Произошла ошибка при удалении жильца",
      },
    });
  }
};

export const toggleFlat = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_FLAT,
      payload: data.addressId,
    });
  } catch (error) {
    dispatch({
      type: FLAT_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Произошла ошибка",
      },
    });
  }
};
