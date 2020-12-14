import { REMOVE_NOTE, SHOW_LOADER, ADD_NOTE, FETCH_NOTES } from '../types';

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, action) => ({ ...state, notes: [...state.notes, action.payload] }),
  [FETCH_NOTES]: (state, action) => ({ ...state, notes: action.payload, loading: false }),
  [REMOVE_NOTE]: (state, action) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== action.payload),
  }),
};

export const firebaseReducer = (state, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }

  return state;
};
