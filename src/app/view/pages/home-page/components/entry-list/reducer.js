/* eslint-disable no-param-reassign, default-case */
import produce from 'immer';
import {
  FETCH_ENTRY_LIST_SUCCESS,
  FETCH_ENTRY_LIST_FAIL,
  TOGGLE_LOADING,
  SET_ENTRY_VISITED,
  SET_ENTRY_HIDDEN,
  SET_ORIGINAL_LIST,
  HIDDEN_LIST,
  CHANGE_ROWS_PER_PAGE,
  CHANGE_PAGE,
  SET_PAGINATION_DATA,
} from './action';

const defaultState = {
  loading: false,
  list: [],
  originalList: [],
  error: null,
  pagination: {
    count: 50,
    page: 0,
    rowsPerPage: 10,
    after: null,
    before: null,
  },
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
      case SET_ENTRY_VISITED: {
        const visitedEntryIdx = state.list.findIndex(
          (entry) => entry.id === payload.entryId
        );
        draft.list[visitedEntryIdx].visited = true;
        break;
      }
      case SET_ENTRY_HIDDEN: {
        const visitedEntryIdx = state.list.findIndex(
          (entry) => entry.id === payload.entryId
        );
        draft.list[visitedEntryIdx].hidden = true;
        break;
      }
      case SET_ORIGINAL_LIST: {
        draft.originalList = payload.entryList;
        break;
      }
      case HIDDEN_LIST: {
        draft.list = state.list.map((entry) => ({
          ...entry,
          hidden: true,
        }));
        break;
      }
      case CHANGE_ROWS_PER_PAGE: {
        draft.pagination.page = 0;
        draft.pagination.after = null;
        draft.pagination.before = null;
        draft.pagination.rowsPerPage = payload.rowsPerPage;
        break;
      }
      case CHANGE_PAGE: {
        draft.pagination.page = payload.page;
        break;
      }
      case SET_PAGINATION_DATA: {
        draft.pagination.before = payload.pagination.before;
        draft.pagination.after = payload.pagination.after;
        break;
      }
    }
  });

export default entryListReducer;
