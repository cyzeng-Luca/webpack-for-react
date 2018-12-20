import { createAPI } from '@shared/utils/commonUtil';
import * as urlTypes from '../consts/urlType';

export default {
  getAgentTableList: data => createAPI(urlTypes.GET_AGENT_TABLE_LIST, 'GET', data),
  deleteSystemCard: data => createAPI(urlTypes.DELETE_SYSTEM_CARD, 'PATCH', data),
  addSystemCard: data => createAPI(urlTypes.ADD_SYSTEM_CARD, 'PATCH', data),
};
