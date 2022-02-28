
import ApiConfig from './../../../components/common/apiConfig';
import { handleAlertAndSelectApi, handleNoAnswarApi } from './../../../components/method/handleAlertAndSelectApi';

export function workwithus_v1_insert_fromRepresentation(data) {

    return async () => {
 
        let config = { url: "insert_request" };

        let _data = {
            table: "marketer",
            method_type: "insert",
          ...data
        }
    
        try {
    
          let response = await ApiConfig(config, _data);
          handleAlertAndSelectApi(response.data);
    
        } catch (err) {
          handleNoAnswarApi()
        }
    };

}