import {dataContact} from "../../actionType/actionType";

export const getApiContactUsReducers=(state=[],action)=>{
    switch (action.type){
        case dataContact:
            return [...action.payload]
        default:
            return state
    }
}