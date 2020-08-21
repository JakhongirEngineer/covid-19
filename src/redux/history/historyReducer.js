import historyActionTypes from "../history/historyActionTypes";
const INITIAL_STATE = {
  //country: "worldwide",
  cases: {},
  deaths: {},
  recovered: {},
};

export const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case historyActionTypes.COUNTRY_SELECTED:
      if (action.payload.country === undefined) {
        return { ...state, ...action.payload };
      } else {
        return {
          ...state,
          ...action.payload.timeline,
        };
      }

    default:
      return state;
  }
};
