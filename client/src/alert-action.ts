import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './actions';
import { Dispatch } from 'redux';

export const setAlert = (
  msg: string,
  alertType: string,
  timeout: number = 4000
) => (dispatch: Dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id, timeout },
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT,
      payload: id,
    });
  }, timeout);
};
