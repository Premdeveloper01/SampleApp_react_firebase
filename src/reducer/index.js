import { combineReducers } from 'redux';
import propertyReducer from './property_reducer';

const rootReducer = combineReducers({
    propertyReducer,
})

export default rootReducer;
