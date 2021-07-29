import {
  GET_COMPANIES,
  COMPANY_LOADING,
  COMPANY_ERROR,
  TOGGLE_COMPANY,
} from "../actions/types";

const initialState = {
  loading: false,
  companies: [],
  selectedCompany: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case COMPANY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COMPANIES:
      return {
        ...state,
        company: null,
        companies: payload,
        loading: false,
      };
    case TOGGLE_COMPANY:
      return {
        ...state,
        selectedCompany: payload,
      };
    case COMPANY_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
