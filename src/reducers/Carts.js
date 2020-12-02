export const CartsReducer = (state = {
    result: [],
    isLoading: true
}, action) => {
    switch(action.type){
        case 'FETCH_CARTS_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_CARTS_SUCCESS':
            return{
                ...state,
                result: action.payload.result,
                isLoading: false
            }
        case 'FETCH_CARTS_FAILED':
            return{
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}