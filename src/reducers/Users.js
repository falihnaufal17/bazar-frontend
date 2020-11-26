export const UserReducer = (state = {
    result: {},
    isLoading: true
}, action) => {
    switch(action.type){
        case 'FETCH_PROFILE_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_PROFILE_SUCCESS':
            return{
                ...state,
                result: action.payload.result,
                isLoading: false
            }
        default:
            return state
    }
}