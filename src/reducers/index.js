import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import task from './task';
import ui from './ui';

const rootReducer = combineReducers({
  task,
  ui,
  form: formReducer,
});

export default rootReducer;