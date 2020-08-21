import countryActionTypes from "./actionTypes";
const INITIAL_STATE = {
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  todayRecovered: 0,
  active: 0,
  critical: 0,

  country: "worldwide",
  countryInfo: {},
};

export const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countryActionTypes.COUNTRY_CLICKED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
