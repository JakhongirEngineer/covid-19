import { historyActionTypes } from "./historyActionTypes";
const INITIAL_STATE = {
  history: {
    labels: [],
    data: [],
  },
};
export const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case historyActionTypes.SET_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
};
