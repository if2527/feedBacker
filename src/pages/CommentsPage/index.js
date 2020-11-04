import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import Comments from "../../components/Comments";
import Toolbar from "../../components/Toolbar";
import Modal from "../../components/Modal";
import Alert from "../../components/Alert";

const CommentsPage = () => {
  const modal = useSelector((state) => state.app.modal);
  const loader = useSelector((state) => state.app.loader);
  const alert = useSelector((state) => state.app.alert);

  return (
    <>
      <div className="content-header">
        <Toolbar />
      </div>
      <div className="content-body">
        {loader ? <p>loading...</p> : <Comments /> }
        {/* <Comments /> */}
      </div>
      {modal && <Modal />}
      {alert && <Alert text={alert} />}
    </>
  );
};

export default CommentsPage;
