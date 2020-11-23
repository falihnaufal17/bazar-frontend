export const ProductsReducer = (state = {
    page: 1,
    per_page: 20,
    result: [],
    pagination: {},
    isLoading: true
}, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return{
                ...state,
                result: action.payload.result,
                pagination: {
                    page: action.payload.page,
                    per_page: action.payload.per_page
                },
                isLoading: false
            }
        default:
            return state
    }
}