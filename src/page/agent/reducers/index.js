
import { fromJS } from 'immutable';
import * as actionTypes from '@page/agent/consts/actionTypes';
import { createReducer } from '@shared/utils/commonUtil';
import windows from '@assets/img/windows.png';
import debian from '@assets/img/debin.png';
import suse from '@assets/img/suse.png';
import centos from '@assets/img/cent_os.png';
import ubuntu from '@assets/img/ubuntu.png';

const img = {
  windows,
  debian,
  suse,
  centos,
  ubuntu,
};

function translateImg(list) {
  return list.map(item => ({
    ...item,
    os: img[item.os],
  }));
}

const initialState = fromJS({
  tabItem: ['ALL', 'Physical'],
  tableList: [],
});


const handlers = {
  [actionTypes.GET_AGENT_TABLE_LIST](state, payload) {
    if (payload) {
      return state.withMutations((item) => {
        item.set('tableList', fromJS(translateImg(payload.body)));
      });
    }
    return state;
  },
};

export default createReducer(initialState, handlers);
