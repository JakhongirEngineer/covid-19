import { createStore, combineReducers } from "redux";
import { countryReducer } from "./country/countryReducer";
import { countriesReducer } from "./countries/countriesReducer";
import { activeReducer } from "./active/activeReducer";
import { mapReducer } from "./map/mapReducer";
import { historyReducer } from "./history/historyReducer";
const rootReducer = combineReducers({
  country: countryReducer,
  countries: countriesReducer,
  active: activeReducer,
  map: mapReducer,
  history: historyReducer,
});

const store = createStore(rootReducer);
export default store;
