import countryActionTypes from "./countryActionTypes";

export const selectCountryActionGenerator = (countryData) => {
  return {
    type: countryActionTypes.SELECT_COUNTRY,
    payload: countryData,
  };
};
