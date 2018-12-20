import { combineReducers } from 'redux';
import agentReducer from '@page/agent/reducers';
import common from '@shared/reducers';

const rootReducer = combineReducers({
  agentReducer,
  common,
});

export default rootReducer;
