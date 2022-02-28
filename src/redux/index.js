import { combineReducers } from "redux";
import { getDataReducers } from "./faq/reducers/GetData";
import { getFilterDataReducers } from "./faq/reducers/getFilterData";
import { getApiAccountReducer } from "./account/reducers/getApiAccountReducer";
import { getApiShoabReducer } from "./shoab/shoab/reducers/getApiShoabReducers";
import { getApiContactUsReducers } from "./contactUs/reducers/getApiContactUsReducers";
import { getApiOfficeReducer } from "./shoab/office/reducer/getApiOfficeReducer";

export const reducers = combineReducers({
  data: getDataReducers,
  filterData: getFilterDataReducers,
  dataAccount: getApiAccountReducer,
  apiShoab: getApiShoabReducer,
  apiContact: getApiContactUsReducers,
  apiOffice: getApiOfficeReducer,
});
