import { combineReducers } from 'redux';
import {ProductsReducer} from './Products';
import {ProductDetailReducer} from './ProductDetail';
import {UserReducer} from './Users';

// CALL FUNCTION REDUCER INSIDE combineReducers OBJECT
const rootReducer = combineReducers({
    ProductsReducer,
    ProductDetailReducer,
    UserReducer
});

export default rootReducer;