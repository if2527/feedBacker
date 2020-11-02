import React from "react";
import { useDispatch } from "react-redux";
import "./index.scss";
import { hideModal } from "../../redux/actions";
import AddCommentForm from "../AddCommentForm";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <button onClick={() => dispatch(hideModal())} className="close">
            &times;
          </button>
          <AddCommentForm />
        </div>
      </div>
      <div className="modal-overlay" onClick={() => dispatch(hideModal())}></div>
    </>
  );
};

export default Modal;
