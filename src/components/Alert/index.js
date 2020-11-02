import React from "react";
import {useDispatch} from "react-redux";
import { hideAlert } from "../../redux/actions";
import './index.scss'

const Alert = ({text}) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(hideAlert());
  }, 2000);

  return (
    <div className="alert" role="alert">
      {text}
      <span onClick={()=>{dispatch(hideAlert())}}>&times;</span>
    </div>
  );
};

export default Alert;
