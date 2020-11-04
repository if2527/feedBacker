import {
  ADD_ACTIVE_COMMENT,
  GET_REGIONS,
  GET_CITIES,
  GET_FEEDBACK,
  SET_REGION_ID,
  IS_EDITABLE,
  UPDATE_COMMENT,
  FILTER_COMMENT,
  RECEIVED_COMMENT,
} from './types'

const initialstate = {
  activeComment: null,
  regions: [],
  cities: [],
  feedback: [],
  regionId: null,
  isEditable: false,
}

export const commentsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_ACTIVE_COMMENT:
      return {
        ...state,
        activeComment: action.payload,
      }
    case GET_REGIONS:
      return { ...state, regions: action.payload }
    case FILTER_COMMENT: {
      const newFeedback = state.feedback.filter((i) => String(i.feedback_id) !== action.payload)
      return { ...state, feedback: [...newFeedback] }
    }
    case RECEIVED_COMMENT: {
      const {
        city_id,
        comment,
        email,
        firstname,
        lastname,
        midname,
        phone,
      } = action.payload.data
      const newComment = {
        feedback_id: action.payload.id,
        city_id,
        feedback_comment: comment,
        feedback_email: email,
        feedback_firstname: firstname,
        feedback_lastname: lastname,
        feedback_midname: midname,
        feedback_phone: phone,
      }
      return { ...state, feedback: [...state.feedback, newComment] }
    }
    case GET_FEEDBACK:
      return { ...state, feedback: action.payload }
    case UPDATE_COMMENT: {
      const {
        city_id,
        comment,
        email,
        firstname,
        lastname,
        midname,
        phone,
        id,
      } = action.payload
      const editedComment = {
        feedback_id: id,
        city_id,
        feedback_comment: comment,
        feedback_email: email,
        feedback_firstname: firstname,
        feedback_lastname: lastname,
        feedback_midname: midname,
        feedback_phone: phone,
      }
      const index = state.feedback.findIndex(
        (i) => i.feedback_id == editedComment.feedback_id
      )
      const newFeedback = [...state.feedback]
      newFeedback[index] = editedComment
      return { ...state, feedback: [...newFeedback] }
    }
    case GET_CITIES:
      return { ...state, cities: action.payload }
    case SET_REGION_ID:
      return { ...state, regionId: action.payload }
    case IS_EDITABLE:
      return { ...state, isEditable: action.payload }
    default:
      return state
  }
}
