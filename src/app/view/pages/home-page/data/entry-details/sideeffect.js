import { put, takeLatest, call } from 'redux-saga/effects';
import { sendMessageToHost, waitMessageAction } from '@elliemae/pui-app-sdk';
import { ToastType, toast, ToastPosition } from '@elliemae/ds-basic/Toast';
import actions, { SAVE_CONDITION_BLANK } from '../../action';
import conditionApi from '../../../../api';

// worker saga
export function* saveCondition({ payload: { data, loanId } }) {
  try {
    yield put(waitMessageAction.open());
    const conditionBlank = yield call(conditionApi.addCondition, {
      payload: [data],
      loanId,
    });
    yield put(actions.saveConditionBlankSuccess(conditionBlank[0]));
    sendMessageToHost(
      { guestAppId: 'conditions', message: 'refresh_loan' },
      document.referrer
    );
    toast({
      messageTitle: 'Condition added successfully',
      type: ToastType.SUCCESS,
      position: ToastPosition.TOP_RIGHT,
    });
  } catch (err) {
    yield put(actions.saveConditionBlankFailure(err));
    toast({
      messageTitle: `The condition couldn't be added`,
      type: ToastType.ERROR,
      position: ToastPosition.TOP_RIGHT,
    });
  } finally {
    yield put(waitMessageAction.close());
  }
}
// watcher saga
export default function* saveConditionBlank() {
  yield takeLatest(SAVE_CONDITION_BLANK, saveCondition);
}
