export const FETCH_ENTRY_DETAILS = 'entryDetails/fetch-entry-details';
export const FETCH_ENTRY_DETAILS_SUCCESS =
  'entryDetails/fetch-entry-details-success';
export const FETCH_ENTRY_DETAILS_FAIL = 'entryDetails/fetch-entry-details-fail';
export const TOGGLE_LOADING = 'entryDetails/toggle-loading';

export default {
  fetchEntryDetails: (entryDetails) => ({
    type: FETCH_ENTRY_DETAILS,
    payload: { entryDetails },
  }),
  fetchEntryDetailsSuccess: (entryDetails) => ({
    type: FETCH_ENTRY_DETAILS_SUCCESS,
    payload: { entryDetails },
  }),
  fetchEntryDetailsFail: (error) => ({
    type: FETCH_ENTRY_DETAILS_FAIL,
    payload: { error },
  }),
  toggleLoadingData: () => ({
    type: TOGGLE_LOADING,
  }),
};
