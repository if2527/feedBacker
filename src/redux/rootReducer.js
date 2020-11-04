import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  allComments: commentsReducer,
  app: appReducer,
});
