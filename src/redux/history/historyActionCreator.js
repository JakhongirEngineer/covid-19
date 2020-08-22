import { historyActionTypes } from "./historyActionTypes";
export const setHistoryActionGenerator = (history) => {
  return {
    type: historyActionTypes.SET_HISTORY,
    payload: history,
  };
};
