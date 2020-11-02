import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Sidebar = () => (
  <div className="sidebar">
    <h1 className="logo">
      F<span>ee</span>dB<span>ac</span>ker
    </h1>
    <div className="menu">
        <NavLink exact to="/">Отзывы</NavLink>
        <NavLink to="/stat">Отчеты</NavLink>
    </div>
  </div>
);
export default Sidebar;
