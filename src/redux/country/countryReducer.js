import countryActionTypes from "./countryActionTypes";
import { countryUtil } from "./countryUtils";
const INITIAL_STATE = {
  country: "",
  todayCases: 0,
  cases: 0,
  todayRecovered: 0,
  recovered: 0,
  todayDeaths: 0,
  deaths: 0,
  population: 0,
};

export const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countryActionTypes.SELECT_COUNTRY:
      return { ...state, ...countryUtil(action.payload) };
    default:
      return state;
  }
};
