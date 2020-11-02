import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { showModal, removeComment, showAlert } from "../../redux/actions";

const Toolbar = () => {
  const dispatch = useDispatch();
  const activeComments = useSelector(
    (state) => state.allCommments.activeComments
  );

  const onRemoveClick = () => {
    dispatch(removeComment(activeComments));
    if (activeComments.length !== 0) {
      dispatch(showAlert("Комментарий успешно удален"));
    }

  };
  return (
    <div className="btn-row">
      <button className="btn btn-primary" onClick={() => dispatch(showModal())}>
        <span className="icon">+</span>Добавить
      </button>
      <button className="btn btn-danger" onClick={onRemoveClick}>
        <span className="icon">&ndash;</span>Удалить
      </button>
    </div>
  );
};
export default Toolbar;
