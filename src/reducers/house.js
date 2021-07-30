import {
  GET_HOUSES,
  HOUSE_LOADING,
  HOUSE_ERROR,
  TOGGLE_HOUSE,
} from "../actions/types";

const initialState = {
  loading: false,
  houses: [],
  selectedHouse: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case HOUSE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_HOUSES:
      let obj = new Set();
      const uniqueHouses = payload
        .map((item) => {
          return {
            id: item.houseId,
            building: item.building,
            corpus: item?.corpus,
          };
        })
        .filter((item) => {
          if (obj.has(`${item.building}${item?.corpus}`)) {
            return false;
          }
          obj.add(`${item.building}${item?.corpus}`);
          return true;
        });

      return {
        ...state,
        houses: uniqueHouses,
        loading: false,
      };
    case TOGGLE_HOUSE:
      return {
        ...state,
        selectedHouse: payload,
      };
    case HOUSE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
