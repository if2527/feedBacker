import {
  ADD_ACTIVE_COMMENT,
  GET_REGIONS,
  GET_CITIES,
  GET_FEEDBACK,
  SET_REGION_ID,
  IS_EDITABLE,
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
    case GET_FEEDBACK:
      return { ...state, feedback: action.payload }
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
