import {
  GET_STREETS,
  STREET_LOADING,
  STREET_ERROR,
  TOGGLE_STREET,
} from "../actions/types";

const initialState = {
  loading: false,
  streets: [],
  selectedStreet: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case STREET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_STREETS:
      return {
        ...state,
        street: null,
        streets: payload
          .map((item) => {
            return {
              id: item.streetId,
              name: item.streetName,
            };
          })
          .filter(
            (v, i, a) =>
              a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
          ),
        loading: false,
      };
    case TOGGLE_STREET:
      return {
        ...state,
        selectedStreet: payload,
      };
    case STREET_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
