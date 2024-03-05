import { combineReducers } from 'redux';
import valuesReducer from './valuesReducer';

const rootReducer = combineReducers({
  values: valuesReducer
});

export default rootReducer;