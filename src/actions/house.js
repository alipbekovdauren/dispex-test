import { url } from "./api";
import {
  GET_HOUSES,
  HOUSE_LOADING,
  TOGGLE_HOUSE,
  SET_ALERT,
  HOUSE_ERROR,
} from "./types";

export const getHouses = (data) => async (dispatch) => {
  try {
    dispatch({
      type: HOUSE_LOADING,
    });

    const response = await fetch(
      `${url}/HousingStock?companyId=${data.companyId}&streetId=${data.streetId}`
    );
    const houses = await response.json();

    dispatch({
      type: GET_HOUSES,
      payload: houses,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        text: "Произошла ошибка",
      },
    });
  }
};

export const toggleHouse = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_HOUSE,
      payload: data.houseId,
    });
  } catch (error) {
    dispatch({
      type: HOUSE_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        text: "Произошла ошибка",
      },
    });
  }
};
