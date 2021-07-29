import { SET_ALERT } from "./types";

export const setAlert = (message) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: { message },
  });
};
