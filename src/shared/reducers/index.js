// import { combineReducers } from 'redux';
// import credit from './credit';
// import stage from './stage';
// import personCenter from './personCenter';
// import messageCenter from './messageCenter';
// import dashboard from './dashboard';

// export default combineReducers({
//   credit,
//   stage,
//   personCenter,
//   messageCenter,
//   dashboard,
// });

import { fromJS } from 'immutable';
import * as actionTypes from '@page/agent/consts/actionTypes';
import { createReducer } from '@shared/utils/commonUtil';

const initialState = fromJS({
  menuItem: [
    {
      name: 'DASHBOARD',
      iconClass: 'icon-dashboard',
    },
    {
      name: 'AGENT',
      iconClass: 'icon-sitemap',
    },
    {
      name: 'MY CRUISE',
      iconClass: 'icon-boat',
    },
    {
      name: 'HELP',
      iconClass: 'icon-life-bouy',
    },
  ],
  history: [
    {
      action: 'create',
    },
    {
      action: 'delete',
    },
    {
      action: 'replace',
    },
  ],
});


const handlers = {
  [actionTypes.GET_AGENT_TABLE_LIST](state) {
    return state;
    // return customResultParserUpdate(
    //   state,
    //   { payload, error, meta },
    //   (state, data) => {
    //     if (payload.body) {
    //       state.withMutations(item => {
    //         item.setIn(['data', 'saleGoal'], fromJS(payload.body));
    //       });
    //     } else {
    //       return state;
    //     }
    //   }
    // );
  },
};

export default createReducer(initialState, handlers);
