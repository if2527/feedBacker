import React from "react";
import { useDispatch } from "react-redux";
import "./index.scss";
import { hideModal, isEdit } from "../../redux/actions";
import AddCommentForm from "../AddCommentForm";

const Modal = () => {
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideModal())
    dispatch(isEdit(false))
  }

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose} className="close">
            &times;
          </button>
          <AddCommentForm />
        </div>
      </div>
      <div className="modal-overlay" onClick={onClose}></div>
    </>
  );
};

export default Modal;
