import { put, takeLatest } from 'redux-saga/effects';
import actions, { FETCH_ENTRY_DETAILS } from '../action';

export const getOriginalEntryList = (state) =>
  state.entryList?.originalList || [];

export function* fetchEntryDetails({ payload: { entryDetails } }) {
  try {
    yield put(actions.toggleLoadingData());
    yield put(actions.fetchEntryDetailsSuccess(entryDetails));
  } catch (err) {
    yield put(actions.fetchEntryDetailsFail(err));
  } finally {
    yield put(actions.toggleLoadingData());
  }
}

export default function* getEntryDetails() {
  yield takeLatest(FETCH_ENTRY_DETAILS, fetchEntryDetails);
}
