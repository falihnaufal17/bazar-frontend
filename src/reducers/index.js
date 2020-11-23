import { combineReducers } from 'redux';
import {ProductsReducer} from './Products'

// CALL FUNCTION REDUCER INSIDE combineReducers OBJECT
const rootReducer = combineReducers({
    ProductsReducer
});

export default rootReducer;