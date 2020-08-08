export const FETCH_ENTRY_LIST = 'entryList/fetch-entry-list';
export const FETCH_ENTRY_LIST_SUCCESS = 'entryList/fetch-entry-list-success';
export const FETCH_ENTRY_LIST_FAIL = 'entryList/fetch-entry-list-fail';
export const TOGGLE_LOADING = 'entryList/toggle-loading';
export const OPEN_ENTRY_DETAILS = 'entryList/open-entry-details';
export const SET_ENTRY_VISITED = 'entryList/set-entry-visited';
export const SET_ENTRY_HIDDEN = 'entryList/set-entry-hidden';
export const SET_ORIGINAL_LIST = 'entryList/set-original-list';
export const HIDDEN_LIST = 'entryList/hidden-list';
export const CHANGE_ROWS_PER_PAGE = 'entryList/change-rows-per-page';
export const CHANGE_PAGE = 'entryList/change-page';
export const SET_PAGINATION_DATA = 'entryList/set-pagination-data';
export const TOGGLE_IMAGE_GALLERY = 'entryList/toggle-image-gallery';
export const SET_IMAGE_GALLERY = 'entryList/set-image-gallery';

export default {
  fetchEntryList: (pointer) => ({
    type: FETCH_ENTRY_LIST,
    payload: { pointer },
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
  openEntryDetails: (entryId) => ({
    type: OPEN_ENTRY_DETAILS,
    payload: { entryId },
  }),
  setEntryVisited: (entryId) => ({
    type: SET_ENTRY_VISITED,
    payload: { entryId },
  }),
  setEntryHidden: (entryId) => ({
    type: SET_ENTRY_HIDDEN,
    payload: { entryId },
  }),
  setOriginalList: (entryList) => ({
    type: SET_ORIGINAL_LIST,
    payload: { entryList },
  }),
  hiddenList: () => ({
    type: HIDDEN_LIST,
  }),
  changeRowsPerPage: (rowsPerPage) => ({
    type: CHANGE_ROWS_PER_PAGE,
    payload: { rowsPerPage },
  }),
  changePage: (page) => ({
    type: CHANGE_PAGE,
    payload: { page },
  }),
  setPaginationData: (pagination) => ({
    type: SET_PAGINATION_DATA,
    payload: { pagination },
  }),
  setImageGallery: (image) => ({
    type: SET_IMAGE_GALLERY,
    payload: { image },
  }),
  toggleImageGallery: () => ({
    type: TOGGLE_IMAGE_GALLERY,
  }),
};
