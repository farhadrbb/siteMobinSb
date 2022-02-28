
import ApiConfig from './../../../components/common/apiConfig';
import {handleAlertMethodSelect ,handleNoAnswarApi} from './../../../components/method/handleAlertAndSelectApi';


export const faqApi = (data) => {

  return async (dispatch) => {

    let config = { url: "select_request" };

    let _data = {
        table: "faq",
        method_type: "select",
        ...data
    }

    try {

        let response = await ApiConfig(config, _data);
        let isOk = handleAlertMethodSelect(response.data);

        if(!isOk){
                return 
        }

        dispatch({ type: "GET_DATA", payload: response.data.response.data.results })


    } catch (err) {
        handleNoAnswarApi()
    }
  };
};
