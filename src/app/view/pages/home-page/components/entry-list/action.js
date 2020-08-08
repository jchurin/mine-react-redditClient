export const FETCH_ENTRY_LIST = 'entryList/fetch-entry-list';
export const FETCH_ENTRY_LIST_SUCCESS = 'entryList/fetch-entry-list-success';
export const FETCH_ENTRY_LIST_FAIL = 'entryList/fetch-entry-list-fail';
export const TOGGLE_LOADING = 'entryList/toggle-loading';

export default {
  fetchEntryList: () => ({
    type: FETCH_ENTRY_LIST,
  }),
  fetchEntryListSuccess: (entryList) => ({
    type: FETCH_ENTRY_LIST_SUCCESS,
    payload: { entryList },
  }),
  fetchEntryListFail: (error) => ({
    type: FETCH_ENTRY_LIST_FAIL,
    payload: { error },
  }),
  toggleLoadingData: () => ({
    type: TOGGLE_LOADING,
  }),
};
