import { CREATE_COMMENT, ADD_ACTIVE_COMMENTS, REMOVE_COMMENT } from "./types";

const initialstate = {
  activeComments: [],
  comments: [
    {
      id: '1',
      firstName: "Иван",
      secondName: "Иванович",
      surname: "Иванов",
      tel: "(098)333-33-33",
      email: "ivan@gmail.com",
      comment: "Иван",
    },
    {
      id: '2',
      comment: "какой-то комментарий",
      email: "sidorov@admin.ua",
      firstName: "Артем",
      id: "1604255888539",
      secondName: "Игоревич",
      surname: "Сидоров",
      tel: "666214534",
    },
  ],
};

export const commentsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { ...state, comments: state.comments.concat([action.payload]) };
    case REMOVE_COMMENT:
        return { ...state, comments: state.comments.filter((comment) => !action.payload.includes(comment.id))};
    case ADD_ACTIVE_COMMENTS:
      return { ...state, activeComments: [...state.activeComments, action.payload]};
    default:
      return state;
  }
};
