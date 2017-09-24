import { combineReducers } from 'redux';
import calendar from './calendar';
import players from './players';
import {items, itemsHasErrored, itemsIsLoading} from './users';

const reducer =  combineReducers({
  calendar,
  items,
  itemsHasErrored,
  itemsIsLoading,
  players
})

export default reducer;
