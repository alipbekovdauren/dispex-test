import { combineReducers } from "redux";

import company from "./company";
import house from "./house";
import street from "./street";
import flat from "./flat";
import alert from "./alert";

export default combineReducers({
  company,
  house,
  street,
  flat,
  alert,
});
