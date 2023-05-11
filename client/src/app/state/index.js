import { combineReducers } from 'redux';

import settingReducer from './setting';
import analyticsReducer from './analytics';
import operationReducer from './operation';
import controlReducer from './control';

const reducers = combineReducers({
  setting: settingReducer,
  analytics: analyticsReducer,
  operation: operationReducer,
  control: controlReducer,
});
export default reducers;