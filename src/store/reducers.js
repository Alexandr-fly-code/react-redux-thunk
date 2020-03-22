import { combineReducers } from 'redux';

import { dataReducer } from './fetchButton/reducers';

export default combineReducers({
  data: dataReducer
});