import { combineReducers } from 'redux';
import {ProductsReducer} from './Products';
import {ProductDetailReducer} from './ProductDetail';

// CALL FUNCTION REDUCER INSIDE combineReducers OBJECT
const rootReducer = combineReducers({
    ProductsReducer,
    ProductDetailReducer
});

export default rootReducer;