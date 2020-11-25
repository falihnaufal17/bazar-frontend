export const ProductDetailReducer = (state = {
    result: {
        images: [
            {
                path: ''
            }
        ],
        sizes: [
            {
                price: 0
            }
        ]
    },
    isLoading: true
}, action) => {
    switch(action.type){
        case 'FETCH_PRODUCTDETAIL_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_PRODUCTDETAIL_SUCCESS':
            return{
                ...state,
                result: action.payload.result,
                isLoading: false
            }
        default:
            return state
    }
}