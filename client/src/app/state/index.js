import { combineReducers } from 'redux';

import settingReducer from './setting';
import analyticsReducer from './analytics';

const reducers = combineReducers({
  setting: settingReducer,
  analytics: analyticsReducer,
});
export default reducers;