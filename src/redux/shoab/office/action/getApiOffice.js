
import { dataOffice } from "../../../actionType/actionType";
import ApiConfig from './../../../../components/common/apiConfig';
import { handleAlertMethodSelect, handleNoAnswarApi } from './../../../../components/method/handleAlertAndSelectApi';


export const getApiOffice = (data) => {

  return async (dispatch) => {

    let config = { url: "select_request" };

    let _data = {
      table: "pishkhan",
      method_type: "select",
      from: 0,
      size: 5000,
      data: data?.data ? data.data : {},
        ...data
    }

    try {

      let response = await ApiConfig(config, _data);
      let isOk = handleAlertMethodSelect(response.data);

      if (!isOk) {
        return
      }

      dispatch({ type: dataOffice, payload: response.data.response.data.results })

    } catch (err) {
      handleNoAnswarApi()
    }

  };
};
