import countryActionTypes from "./actionTypes";

export const countryClicked = (country) => {
  return {
    type: countryActionTypes.COUNTRY_CLICKED,
    payload: country,
  };
};
