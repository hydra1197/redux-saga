import {
  FETCH_TASK_LIST,
  FETCH_TASK_LIST_SUCCESS,
  FETCH_TASK_LIST_FAILED,
  SEARCH_TASK,
  SEARCH_TASK_SUCCESS,
  CREATE_NEW_TASK,
  CREATE_NEW_TASK_SUCCESS,
  CREATE_NEW_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  SET_TASK_EDIT_DATA,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED
} from './../actionTypes/task';

export const fetchTaskList = (params = {}) => ({
  type: FETCH_TASK_LIST,
  payload: { ...params }
});

export const fetchTaskListSuccess = data => ({
  type: FETCH_TASK_LIST_SUCCESS,
  payload: { data },
});

export const fetchTaskListFailed = error => ({
  type: FETCH_TASK_LIST_FAILED,
  payload: { error },
});

export const searchTask = keyword => ({
  type: SEARCH_TASK,
  payload: { keyword }
});

export const searchTaskSuccess = data => ({
  type: SEARCH_TASK_SUCCESS,
  payload: { data }
});

export const createNewTask = data => ({
  type: CREATE_NEW_TASK,
  payload: { ...data }
});

export const createNewTaskSuccess = data => ({
  type: CREATE_NEW_TASK_SUCCESS,
  payload: { data }
});

export const createNewTaskFailed = error => ({
  type: CREATE_NEW_TASK_FAILED,
  payload: { error }
});

export const updateTask = data => ({
  type: UPDATE_TASK,
  payload: { ...data }
});

export const updateTaskSuccess = (taskId, data) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: { taskId, data }
});

export const updateTaskFailed = error => ({
  type: UPDATE_TASK_FAILED,
  payload: { error }
});

export const setTaskEditData = data => ({
  type: SET_TASK_EDIT_DATA,
  payload: { data }
});

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  payload: { taskId }
});

export const deleteTaskSuccess = taskId => ({
  type: DELETE_TASK_SUCCESS,
  payload: { taskId }
});

export const deleteTaskFailed = error => ({
  type: DELETE_TASK_FAILED,
  payload: { error }
});