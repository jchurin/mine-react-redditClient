import { put, takeLatest, call } from 'redux-saga/effects';
import api from '@rc-api';
import actions, { FETCH_ENTRY_LIST } from '../action';
import { mapEntryList } from '../../../../../../data/utils';

export function* fetchEntryList() {
  try {
    yield put(actions.toggleLoadingData());
    const entryList = yield call(api.fetchEntryList);
    const mappedList = mapEntryList(entryList.data.children);
    // eslint-disable-next-line no-debugger
    debugger;
    yield put(actions.fetchEntryListSuccess(mappedList));
  } catch (err) {
    yield put(actions.fetchEntryListFail(err));
  } finally {
    yield put(actions.toggleLoadingData());
  }
}

export default function* getEntryList() {
  yield takeLatest(FETCH_ENTRY_LIST, fetchEntryList);
}
