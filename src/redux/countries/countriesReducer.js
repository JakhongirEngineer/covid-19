import countriesActionTypes from "./countriesActionTypes";

const INITIAL_STATE = {};

export const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countriesActionTypes.GET_ALL_COUNTRIES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
