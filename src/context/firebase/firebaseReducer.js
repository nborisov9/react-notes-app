import { REMOVE_NOTE, SHOW_LOADER, ADD_NOTE, FETCH_NOTES } from '../types';

export const firebaseReducer = (state, action) => {
  if (action.type === SHOW_LOADER) {
    return { ...state, loading: true };
  }
  if (action.type === ADD_NOTE) {
    return { ...state, notes: [...state.notes, action.payload] };
  }
  if (action.type === FETCH_NOTES) {
    return { ...state, notes: action.payload, loading: false };
  }
  if (action.type === REMOVE_NOTE) {
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== action.payload),
    };
  }
  return state;
};
