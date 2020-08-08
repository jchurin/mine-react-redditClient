import { put, takeLatest, select } from 'redux-saga/effects';
import actions, { OPEN_ENTRY_DETAILS } from '../action';
import entryDetailsActions from '../../entry-details/action';

export const getOriginalEntryList = (state) =>
  state.entryList?.originalList || [];

export function* openEntryDetails({ payload: { entryId } }) {
  yield put(actions.setEntryVisited(entryId));
  // Fetch details
  const entryList = yield select(getOriginalEntryList);
  const entryDetails = entryList.find((entry) => entry.data.id === entryId);
  yield put(entryDetailsActions.fetchEntryDetails(entryDetails.data));
}

export default function* getEntryList() {
  yield takeLatest(OPEN_ENTRY_DETAILS, openEntryDetails);
}
