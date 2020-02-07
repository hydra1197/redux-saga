import {
  FETCH_TASK_LIST,
  FETCH_TASK_LIST_SUCCESS,
  FETCH_TASK_LIST_FAILED,
  SEARCH_TASK,
  SEARCH_TASK_SUCCESS,
  CREATE_NEW_TASK,
  CREATE_NEW_TASK_SUCCESS,
  CREATE_NEW_TASK_FAILED,
  SET_TASK_EDIT_DATA,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  DELETE_TASK, DELETE_TASK_SUCCESS
} from './../actionTypes/task';

const initialState = {
  list: [],
  dataEdited: {},
};

const task = (state = initialState, actions) => {
  const newList = [...state.list];
  let index = -1;

  switch (actions.type) {
    case FETCH_TASK_LIST:
      return {
        ...state,
        list: []
      };
    case FETCH_TASK_LIST_SUCCESS:
      return {
        ...state,
        list: actions.payload.data.reverse()
      };
    case FETCH_TASK_LIST_FAILED:
      return {
        ...state
      };
    case SEARCH_TASK:
      return {
        ...state,
      };
    case SEARCH_TASK_SUCCESS:
      return {
        ...state,
        list: actions.payload.data
      };
    case CREATE_NEW_TASK:
      return {
        ...state,
      };
    case CREATE_NEW_TASK_SUCCESS:
      return {
        ...state,
        list: [actions.payload.data].concat(state.list)
      };
    case CREATE_NEW_TASK_FAILED:
      return {
        ...state
      };
    case SET_TASK_EDIT_DATA:
      return {
        ...state,
        dataEdited: actions.payload.data
      };
    case UPDATE_TASK:
      return {
        ...state,
      };
    case UPDATE_TASK_SUCCESS:
      index = newList.findIndex(item => item.id === actions.payload.taskId);
      newList[index] = actions.payload.data;

      return {
        ...state,
        list: newList
      };
    case DELETE_TASK:
      return {
        ...state,
      };
    case DELETE_TASK_SUCCESS:
      console.log(actions.payload.taskId);
      index = newList.findIndex(item => item.id === actions.payload.taskId);
      newList.splice(index, 1);

      return {
        ...state,
        list: newList
      };
    default:
      return state;
  }
};

export default task;