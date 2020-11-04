import {
  CREATE_COMMENT,
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_MODAL,
  HIDE_MODAL,
  ADD_ACTIVE_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  FETCH_REGIONS,
  FETCH_CITIES,
  SHOW_LOADER,
  HIDE_LOADER,
  FETCH_FEEDBACK,
  SET_REGION_ID,
  IS_EDITABLE,
} from './types'

export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
  }
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    payload: id,
  }
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    payload: comment,
  }
}
export function isEdit(payload) {
  return {
    type: IS_EDITABLE,
    payload,
  }
}

export function addActiveComment(id) {
  return {
    type: ADD_ACTIVE_COMMENT,
    payload: id,
  }
}

export function fetchRegions() {
  return {
    type: FETCH_REGIONS
  }
}

export function fetchFeedback() {
  return {
    type: FETCH_FEEDBACK
  }
}

export function fetchAllCities() {
  return {
    type: FETCH_CITIES
  }
}

export function updateRegionId(id) {
  return {
    type: SET_REGION_ID,
    payload: id
  }
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}

export function showModal() {
  return {
    type: SHOW_MODAL,
  }
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}
