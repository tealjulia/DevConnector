/*Root reducer; aggregates other reducer files in one place*/
import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
});