
// import { getAxiosInstance } from "../../../api/api";
// import { toast } from "react-toastify";

import ApiConfig from './../../../components/common/apiConfig';
import { handleAlertAndSelectApi, handleNoAnswarApi } from './../../../components/method/handleAlertAndSelectApi';


export function workwithus_v1_insert(data) {

    return async () => {
        
        let config = { url: "insert_request" };

        let _data = {
            table: "workwithus",
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