import { SHOW_ALERT, HIDE_ALERT } from '../types';

const handlers = {
  [SHOW_ALERT]: (state, action) => ({ ...state, ...action.payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
};

export const alertReducer = (state, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};
