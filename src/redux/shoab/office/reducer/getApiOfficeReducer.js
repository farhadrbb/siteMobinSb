import { dataOffice } from "../../../actionType/actionType";

let initState = [];
export const getApiOfficeReducer = (state = initState, action) => {
  switch (action.type) {
    case dataOffice:
      return [...action.payload];
    default:
      return state;
  }
};
