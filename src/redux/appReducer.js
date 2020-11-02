import { SHOW_ALERT, HIDE_ALERT, SHOW_MODAL, HIDE_MODAL } from "./types";
const initialState = {
  alert: null,
  modal: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
      case SHOW_MODAL:
      return { ...state, modal: true };
    case HIDE_MODAL:
      return { ...state, modal: false };
    default:
      return state;
  }
};
