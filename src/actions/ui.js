import { SET_GLOBAL_LOADING_STATUS, SET_MODAL_DATA } from './../actionTypes/ui';

export const setGlobalLoadingStatus = status => ({
  type: SET_GLOBAL_LOADING_STATUS,
  payload: { status },
});

export const setModalData = (status, title, content) => ({
  type: SET_MODAL_DATA,
  payload: { status, title, content }
});