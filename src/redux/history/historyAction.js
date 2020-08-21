import historyActionTypes from "./historyActionTypes";

export const historyAction = (data) => {
  return {
    type: historyActionTypes.COUNTRY_SELECTED,
    payload: data,
  };
};
