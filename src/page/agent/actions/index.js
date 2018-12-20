/* eslint-disable no-unused-vars */
import * as actionTypes from '@page/agent/consts/actionTypes';
import api from '@page/agent/api';

export function getAgentTableList(data) {
  return dispatch => api.getAgentTableList(data).then((body) => {
    dispatch({
      type: actionTypes.GET_AGENT_TABLE_LIST,
      body,
    });
  });
}
export function deleteSystemCard(data) {
  return dispatch => api.deleteSystemCard(data).then((body) => {
    dispatch(getAgentTableList());
  });
}
export function addSystemCard(data) {
  return dispatch => api.addSystemCard(data).then((body) => {
    dispatch(getAgentTableList());
  });
}
