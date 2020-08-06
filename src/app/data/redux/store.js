import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

const staticReducers = {};
let store = null;

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

export default function configureStore(initialState) {
  store =
    store ||
    createStore(createReducer(), initialState, applyMiddleware(logger));
  store.asyncReducers = {};
  return store;
}
