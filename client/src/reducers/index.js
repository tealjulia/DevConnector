/*Root reducer; aggregates other reducer files in one place*/
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
});