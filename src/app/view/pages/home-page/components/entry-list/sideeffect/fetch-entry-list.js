import { put, takeLatest, call, select } from 'redux-saga/effects';
import api from '@rc-api';
import actions, { FETCH_ENTRY_LIST } from '../action';
import { mapEntryList } from '../../../../../../data/utils';

export const getPagination = (state) => state.entryList?.pagination || [];

export function* fetchEntryList({ payload: { pointer } }) {
  try {
    yield put(actions.toggleLoadingData());
    const paginationData = yield select(getPagination);
    const payload = {
      limit: paginationData.rowsPerPage,
      count: paginationData.rowsPerPage,
      before: pointer === 'before' ? paginationData.before : null,
      after: pointer === 'after' ? paginationData.after : null,
    };
    const {
      data: { children, before, after },
    } = yield call(api.fetchEntryList, payload);
    const mappedList = mapEntryList(children);
    yield put(actions.fetchEntryListSuccess(mappedList));
    yield put(actions.setOriginalList(children));
    yield put(actions.setPaginationData({ before, after }));
  } catch (err) {
    yield put(actions.fetchEntryListFail(err));
  } finally {
    yield put(actions.toggleLoadingData());
  }
}

export default function* getEntryList() {
  yield takeLatest(FETCH_ENTRY_LIST, fetchEntryList);
}
