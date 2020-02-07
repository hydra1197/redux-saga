import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
  : compose;

const saga = createSagaMiddleware();

const storeConfigure = () => {
  const middleWares = [thunk, saga, logger];
  const enhancers = [applyMiddleware(...middleWares)];

  const store =  createStore(rootReducer, composeEnhancers(...enhancers));
  saga.run(rootSaga);

  return store;
};

export default storeConfigure;