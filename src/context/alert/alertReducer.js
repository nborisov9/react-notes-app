import { SHOW_ALERT, HIDE_ALERT } from '../types';

export const alertReducer = (state, action) => {
  if (action.type === SHOW_ALERT) {
    return { ...state, ...action.payload, visible: true };
  }
  if (action.type === HIDE_ALERT) {
    return { ...state, visible: false };
  }
  return state;
};
