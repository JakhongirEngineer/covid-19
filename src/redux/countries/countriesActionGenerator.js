import countriesActionTypes from "./countriesActionTypes";

export const countriesActionGenerator = (countryData) => {
  return {
    type: countriesActionTypes.GET_ALL_COUNTRIES,
    payload: countryData,
  };
};
