import { takeEvery, put, call, select } from 'redux-saga/effects'
import {
  GET_REGIONS,
  FETCH_REGIONS,
  GET_FEEDBACK,
  FETCH_FEEDBACK,
  GET_CITIES,
  FETCH_CITIES,
  CREATE_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
} from './types'
import { hideModal, showAlert } from './actions'
import { getRegionId, getActiveCommentId } from './selectors'
import { API_URLS } from './constants'

export function* sagaWatcher() {
  yield takeEvery(FETCH_REGIONS, fetchRegions)
  yield takeEvery(FETCH_FEEDBACK, fetchFeedback)
  yield takeEvery(FETCH_CITIES, fetchCities)
  yield takeEvery(CREATE_COMMENT, createComment)
  yield takeEvery(REMOVE_COMMENT, removeComment)
  yield takeEvery(EDIT_COMMENT, editComment)
}

function* createComment(action) {
  try {
    const payload = yield call(fetchNewFeedback, { ...action.payload })
    if (payload.error) {
      yield put(showAlert('Что-то пошло не так'))
    } else {
      yield put(hideModal())
      yield put(showAlert('Комментарий успешно создан'))
    }
  } catch (e) {
    yield put(hideModal())
    yield put(showAlert('Что-то пошло не так'))
  }
}

function* editComment(action) {
  try {
    const activeCommentId = yield select(getActiveCommentId)
    const payload = yield call(fetchEditComment, {
      ...action.payload,
      activeCommentId,
    })
    if (payload.error) {
      yield put(showAlert('Что-то пошло не так'))
    } else {
      yield put(hideModal())
      yield put(showAlert('Комментарий успешно отредактирован'))
    }
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
  }
}

function* removeComment(action) {
  try {
    const payload = yield call(fetchRemoveComment, action.payload)
    if (payload.error) {
      yield put(showAlert('Что-то пошло не так'))
    } else {
      yield put(showAlert('Комментарий успешно удален'))
    }
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
  }
}

function* fetchRegions() {
  try {
    const payload = yield call(fetchData, [API_URLS.REGIONS])
    yield put({ type: GET_REGIONS, payload })
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
  }
}

function* fetchFeedback() {
  try {
    const payload = yield call(fetchData, [API_URLS.FEEDBACK])
    yield put({ type: GET_FEEDBACK, payload })
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
  }
}

function* fetchCities() {
  try {
    const regionId = yield select(getRegionId)
    if (!regionId) {
      const payload = yield call(fetchData, [API_URLS.CITIES])
      yield put({ type: GET_CITIES, payload })
    } else {
      const payload = yield call(fetchData, [
        `${API_URLS.FILTERED_CITIES}/${regionId}`,
      ])
      yield put({ type: GET_CITIES, payload })
    }
  } catch (e) {
    yield put(showAlert('Что-то пошло не так'))
  }
}

async function fetchData(...payload) {
  const url = payload[0]
  const response = await fetch(url)
  const json = await response.json()
  return json.data
}

async function fetchEditComment(...payload) {
  const data = payload[0]
  const body = {
    firstname: data.firstname,
    lastname: data.lastname,
    midname: data.midname,
    city_id: data.city_id,
    phone: data.phone,
    email: data.email,
    comment: data.comment,
  }
  const response = await fetch(`${API_URLS.FEEDBACK}/${data.activeCommentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const json = await response.json()
  return json
}

async function fetchRemoveComment(...payload) {
  const id = payload[0]
  const response = await fetch(`${API_URLS.FEEDBACK}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await response.json()
  return json
}

async function fetchNewFeedback(...payload) {
  const data = payload[0]
  const body = {
    firstname: data.firstname,
    lastname: data.lastname,
    midname: data.midname,
    city_id: data.city_id,
    phone: data.phone,
    email: data.email,
    comment: data.comment,
  }

  const response = await fetch(API_URLS.FEEDBACK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const json = await response.json()
  return json
}
