import { createStore } from "redux";
import { combineReducers } from "redux";

import { countryReducer } from "../redux/country/countryReducer";
import { historyReducer } from "../redux/history/historyReducer";

const rootReducer = combineReducers({
  country: countryReducer,
  history: historyReducer,
});

const store = createStore(rootReducer);
export default store;
