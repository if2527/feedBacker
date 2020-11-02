import {
  CREATE_COMMENT,
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_ACTIVE_COMMENTS,
  REMOVE_COMMENT,
} from "./types";

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  };
}

export function removeComment(comments) {
  return {
    type: REMOVE_COMMENT,
    payload: comments,
  };
}

export function addActiveComments(id) {
  return {
    type: ADD_ACTIVE_COMMENTS,
    payload: id,
  };
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function showModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
