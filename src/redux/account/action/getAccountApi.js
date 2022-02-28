import ApiConfig from './../../../components/common/apiConfig';
import { handleAlertMethodSelect, handleNoAnswarApi } from './../../../components/method/handleAlertAndSelectApi';


export const getAccountApi = (data) => {
  return async (dispatch) => {

    let config = { url: "select_request" };

    let _data = {
      table: "static",
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

      const dataAll = response.data.response.data.results;
      const dataMap = dataAll.map((item) => {
        return JSON.parse(item.body.content);
      });

      if (dataMap.length > 0)
        dispatch({ type: 'DATA_ACCOUNT', payload: dataMap[0] })

    } catch (err) {
      handleNoAnswarApi()
    }

  };
};
