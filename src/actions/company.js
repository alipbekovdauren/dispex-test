import { url } from "./api";
import {
  GET_COMPANIES,
  COMPANY_LOADING,
  TOGGLE_COMPANY,
  SET_ALERT,
  COMPANY_ERROR,
} from "./types";

export const getCompanies = () => async (dispatch) => {
  try {
    dispatch({
      type: COMPANY_LOADING,
    });

    const response = await fetch(`${url}/Request/companies`);
    const companies = await response.json();

    dispatch({
      type: GET_COMPANIES,
      payload: companies,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Произошла ошибка",
      },
    });
  }
};

export const toggleCompany = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TOGGLE_COMPANY,
      payload: data.companyId,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_ERROR,
    });

    dispatch({
      type: SET_ALERT,
      payload: {
        message: "Произошла ошибка",
      },
    });
  }
};
