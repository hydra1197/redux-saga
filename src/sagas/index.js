import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import { CREATE_NEW_TASK, DELETE_TASK, FETCH_TASK_LIST, SEARCH_TASK, UPDATE_TASK } from '../actionTypes/task';
import {
  fetchTaskListSuccess,
  fetchTaskListFailed,
  createNewTaskSuccess,
  createNewTaskFailed, fetchTaskList, updateTaskSuccess, updateTaskFailed, deleteTaskSuccess, deleteTaskFailed
} from '../actions/task';
import { setGlobalLoadingStatus, setModalData } from '../actions/ui';
import { createOne, getAll, updateOne, deleteOne } from '../apis/task';
import Toastify from '../commons/Toastify';
import { STATUS_CODES, STATUSES } from '../constants';

function* fetchTaskListAction({ payload }) {
  yield put(setGlobalLoadingStatus(true));

  const response = yield call(getAll, { ...payload });

  if (response.status === STATUS_CODES.SUCCESS) {
    yield put(fetchTaskListSuccess(response.data));
  } else {
    yield put(fetchTaskListFailed(response));
  }

  yield delay(1000);
  yield put(setGlobalLoadingStatus(false));
}

function* searchTaskAction({ payload }) {
  yield delay(500);
  yield put(fetchTaskList({ q: payload.keyword }));
}

function* createNewTaskAction({ payload }) {
  yield put(setGlobalLoadingStatus(true));

  const response = yield call(createOne, {
    title: payload.title,
    description: payload.description,
    status: STATUSES[0].value,
  });

  if (response.status === STATUS_CODES.CREATED) {
    yield put(createNewTaskSuccess(response.data));
    yield put(setModalData(false, null, null));

    Toastify.success('Thêm công việc thành công');
  } else {
    yield put(createNewTaskFailed(response));
  }

  yield delay(1000);
  yield put(setGlobalLoadingStatus(false));
}

function* updateTaskAction({ payload }) {
  yield put(setGlobalLoadingStatus(true));

  const response = yield call(updateOne, payload.id, { ...payload });

  if (response.status === STATUS_CODES.SUCCESS) {
    yield put(updateTaskSuccess(payload.id, response.data));
    yield put(setModalData(false, null, null));

    Toastify.success('Cập nhật công việc thành công');
  } else {
    yield put(updateTaskFailed(response));
  }

  yield delay(1000);
  yield put(setGlobalLoadingStatus(false));
}

function* deleteTaskAction({ payload }) {
  yield put(setGlobalLoadingStatus(true));

  const response = yield call(deleteOne, payload.taskId);

  if (response.status === STATUS_CODES.SUCCESS) {
    yield put(deleteTaskSuccess(payload.taskId));

    Toastify.success('Xóa công việc thành công');
  } else {
    yield put(deleteTaskFailed(response));
  }

  yield delay(1000);
  yield put(setGlobalLoadingStatus(false));
}

function* rootSaga() {
  yield takeEvery(FETCH_TASK_LIST, fetchTaskListAction);
  yield takeLatest(SEARCH_TASK, searchTaskAction);
  yield takeEvery(CREATE_NEW_TASK, createNewTaskAction);
  yield takeEvery(UPDATE_TASK, updateTaskAction);
  yield takeEvery(DELETE_TASK, deleteTaskAction);
}

export default rootSaga;