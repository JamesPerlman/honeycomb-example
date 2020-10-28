import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import items from './items';
import options from './options';

export const rootReducer = combineReducers({
  form,
  items,
  options,
});
