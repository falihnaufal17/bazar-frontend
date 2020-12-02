export const DeliveryMethodReducer = (state = {
    result: [],
    isLoading: true
}, action) => {
    switch(action.type){
        case 'FETCH_DELIVERYMETHOD_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_DELIVERYMETHOD_SUCCESS':
            return{
                ...state,
                result: action.payload.result,
                isLoading: false
            }
        case 'FETCH_DELIVERYMETHOD_FAILED':
            return{
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}