export const getApiAccountReducer=(state=[],action)=>{
    switch (action.type){
        case "DATA_ACCOUNT":
            return [...action.payload]
        default:
            return state
    }



}