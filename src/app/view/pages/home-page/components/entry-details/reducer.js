/* eslint-disable default-case, no-param-reassign */
import produce from 'immer';
import {
  FETCH_ENTRY_DETAILS_SUCCESS,
  FETCH_ENTRY_DETAILS_FAIL,
  TOGGLE_LOADING,
  REMOVE_DETAILS,
} from './action';

const defaultState = {
  loading: false,
  details: null,
  error: null,
};

const entryDetailsReducer = (state = defaultState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_ENTRY_DETAILS_SUCCESS: {
        draft.details = payload.entryDetails;
        break;
      }
      case FETCH_ENTRY_DETAILS_FAIL: {
        draft.error = payload.error;
        break;
      }
      case TOGGLE_LOADING: {
        draft.loading = !state.loading;
        break;
      }
      case REMOVE_DETAILS: {
        draft.details = null;
        break;
      }
    }
  });

export default entryDetailsReducer;
