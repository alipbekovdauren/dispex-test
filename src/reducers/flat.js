import {
  GET_FLATS,
  FLAT_LOADING,
  FLAT_ERROR,
  DELETE_FLAT_CLIENT,
  TOGGLE_FLAT,
  CREATE_FLAT_CLIENT,
} from "../actions/types";

const initialState = {
  loading: false,
  flats: [],
  selectedFlat: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FLAT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_FLATS:
      return {
        ...state,
        flat: null,
        flats: payload.reduce(function (r, a) {
          r[a.houseId] = r[a.houseId] || [];
          r[a.houseId].push(a);
          return r;
        }, Object.create(null)),
        loading: false,
      };
    case CREATE_FLAT_CLIENT:
      return {
        ...state,
        flats: {
          ...state.flats,
          [payload.houseId]: state.flats[payload.houseId].map((flat) => {
            if (flat.addressId !== payload.addressId) {
              return {
                ...flat,
              };
            }

            return {
              ...flat,
              clients: [...flat.clients, payload.client],
            };
          }),
        },
        loading: false,
      };
    case DELETE_FLAT_CLIENT:
      return {
        ...state,
        flats: {
          ...state.flats,
          [payload.houseId]: state.flats[payload.houseId].map((flat) => ({
            ...flat,
            clients: flat.clients.filter(
              (client) => client.bindId !== payload.bindId
            ),
          })),
        },
        loading: false,
      };
    case TOGGLE_FLAT:
      return {
        ...state,
        selectedFlat: payload,
      };
    case FLAT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
