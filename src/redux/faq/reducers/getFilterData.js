export const getFilterDataReducers = (state =[], action) => {
    switch (action.type) {
        case "GETFILTER_DATA":
            return [...action.payload]
        default:
            return state
    }
}