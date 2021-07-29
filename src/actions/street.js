import { url } from "./api";
import {
  GET_STREETS,
  STREET_LOADING,
  TOGGLE_STREET,
  SET_ALERT,
  STREET_ERROR,
} from "./types";

export const getStreets = (data) => async (dispatch) => {
  try {
    dispatch({
      type: STREET_LOADING,
    });

    const response = await fetch(
      `${url}/HousingStock?companyId=${data.companyId}`
    );
    const streets = await response.json();

    dispatch({
      type: GET_STREETS,
      payload: streets,
    });
  } catch (error) {
    dispatch({
      type: STREET_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        text: "Произошла ошибка",
      },
    });
  }
};

export const toggleStreet = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_STREET,
      payload: data.streetId,
    });
  } catch (error) {
    dispatch({
      type: STREET_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        text: "Произошла ошибка",
      },
    });
  }
};
