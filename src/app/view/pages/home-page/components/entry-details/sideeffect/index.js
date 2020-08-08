import { all, fork } from 'redux-saga/effects';
import saga1 from './fetch-entry-details';

// Allowed to combine more than one saga at the same time
const combinedSagas = [fork(saga1)];

export default function* rootSaga() {
  yield all(combinedSagas);
}
