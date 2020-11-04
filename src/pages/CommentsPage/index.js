import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import Comments from "../../components/Comments";
import Toolbar from "../../components/Toolbar";
import Modal from "../../components/Modal";
import Alert from "../../components/Alert";
import { fetchRegions, fetchAllCities, fetchFeedback } from "../../redux/actions";
import Loader from "../../components/Loader";

const CommentsPage = () => {
  const modal = useSelector((state) => state.app.modal);
  const loader = useSelector((state) => state.app.loader);
  const alert = useSelector((state) => state.app.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchRegions());
    dispatch(fetchFeedback());
    // dispatch(fetchAllCities());
  })

  return (
    <>
      <div className="content-header">
        <Toolbar />
      </div>
      <div className="content-body">
        {/* {!loader ? <Comments /> : <Loader />} */}
        <Comments />
      </div>
      {modal && <Modal />}
      {alert && <Alert text={alert} />}
    </>
  );
};

export default CommentsPage;
