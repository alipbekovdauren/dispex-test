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
      return {
        ...state,
        house: null,
        houses: payload
          .map((item) => {
            return {
              id: item.houseId,
              building: item.building,
              corpus: item?.corpus,
            };
          })
          .filter(
            (v, i, a) =>
              a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
          ),
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
/* payload.reduce((objectsByKeyValue, obj) => {
  const value = obj["streetId"];
  objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(
    obj
  );
  return objectsByKeyValue;
}, {}), */

/* payload.forEach(function (item) {
  var i = resArr.findIndex((x) => x.name == item.name);
  if (i <= -1) {
    resArr.push({ id: item.id, name: item.name });
  }
}), */

/* streets: [
  ...new Map(
    payload
      .map((item) => [item["streetId"], item["streetName"]])
      .values()
  ),
],
buildings: [
  ...new Map(
    payload.map((item) => [item["houseId"], item["building"]]).values()
  ),
],
flats: [...new Map(payload.map((item) => [item["houseId"]]).values())], */
