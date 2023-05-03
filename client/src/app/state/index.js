import { combineReducers } from 'redux';

import settingReducer from './setting';

const reducers = combineReducers({
  setting: settingReducer,
});
export default reducers;