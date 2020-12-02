import { combineReducers } from 'redux';
import {ProductsReducer} from './Products';
import {ProductDetailReducer} from './ProductDetail';
import {UserReducer} from './Users';
import {CartsReducer} from './Carts';
import {DeliveryMethodReducer} from './DeliveryMethod';

// CALL FUNCTION REDUCER INSIDE combineReducers OBJECT
const rootReducer = combineReducers({
    ProductsReducer,
    ProductDetailReducer,
    UserReducer,
    CartsReducer,
    DeliveryMethodReducer
});

export default rootReducer;