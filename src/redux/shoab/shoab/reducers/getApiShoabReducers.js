import { dataShoab } from "../../../actionType/actionType";

let initState = [];
export const getApiShoabReducer = (state = initState, action) => {
  switch (action.type) {
    case dataShoab:
      return [...action.payload];
    default:
      return state;
  }
};
