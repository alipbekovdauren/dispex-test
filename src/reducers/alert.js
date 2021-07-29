import { SET_ALERT } from "../actions/types";

const initialState = {
  alerts: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, payload],
      };
    default:
      return state;
  }
}
