export const ProductsReducer = (state = {
    page: 1,
    per_page: 20,
    result: [],
    pagination: {},
    isLoading: true,
    hasMore: true,
}, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTS_PENDING':
            return{
                ...state,
                isLoading: true,
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            let {result} = state;
            result = [...result, ...action.payload.result]
            return{
                ...state,
                result: result,
                pagination: {
                    page: action.payload.page,
                    per_page: action.payload.per_page
                },
                isLoading: false,
                hasMore: true
            }
        case 'FETCH_PRODUCTS_FAILED':
            return{
                ...state,
                isLoading: false,
                hasMore: false,
            }
        default:
            return state
    }
}