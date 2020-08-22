import { activeTypes } from "./activeTypes";
export const setType = (type = "cases") => {
  return {
    type: activeTypes.SET_TYPE,
    payload: type,
  };
};
