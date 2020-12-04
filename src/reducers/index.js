import formVisibleReducer from './form-visible-reducer';
import brewListReducer from './brew-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterListOfBrews: brewListReducer
});

export default rootReducer;