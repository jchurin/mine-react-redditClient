/* eslint-disable no-param-reassign, default-case */
import produce from 'immer';
import {
  FETCH_ENTRY_LIST_SUCCESS,
  FETCH_ENTRY_LIST_FAIL,
  TOGGLE_LOADING,
} from './action';

const defaultState = {
  loading: false,
  list: [],
  error: null,
};

const entryListReducer = (state = defaultState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_ENTRY_LIST_SUCCESS: {
        draft.list = payload.entryList;
        break;
      }
      case FETCH_ENTRY_LIST_FAIL: {
        draft.error = payload.error;
        break;
      }
      case TOGGLE_LOADING: {
        draft.loading = !state.loading;
        break;
      }
    }
  });

export default entryListReducer;
