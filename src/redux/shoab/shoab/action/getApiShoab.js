
import { dataShoab } from "../../../actionType/actionType";
import ApiConfig from './../../../../components/common/apiConfig';
import { handleAlertMethodSelect, handleNoAnswarApi } from './../../../../components/method/handleAlertAndSelectApi';


export const getApiShoab = (data) => {

  return async (dispatch) => {

    let config = { url: "select_request" };

    let _data = {
      table: "shoab",
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

      dispatch({ type: dataShoab, payload: response.data.response.data.results })

    } catch (err) {
      handleNoAnswarApi()
    }
  };
};
