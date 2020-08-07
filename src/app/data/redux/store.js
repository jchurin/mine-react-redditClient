import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';

const staticReducers = {};
let store = null;

const sagaMiddleware = createSagaMiddleware();
const injectedSagas = new Map();

const createReducer = (asyncReducers) => {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
};

export const injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export const injectSaga = (key, saga) => {
  if (injectedSagas.has(key)) return;
  // Sagas return task when they executed, which can be used
  // to cancel them
  const task = sagaMiddleware.run(saga);
  // Save the task if we want to cancel it in the future
  injectedSagas.set(key, task);
};

// eslint-disable-next-line require-yield
function* exampleSaga() {
  console.log('Example saga reached');
}

export default function configureStore(initialState) {
  store =
    store ||
    createStore(
      createReducer(),
      initialState,
      applyMiddleware(logger, sagaMiddleware)
    );
  store.asyncReducers = {};
  injectSaga('root', exampleSaga);
  return store;
}
