import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useDispatch } from "react-redux";
import CommentsPage from "./pages/CommentsPage";
import StatPage from "./pages/StatPage";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/SideBar";
import { fetchRegions, fetchAllCities, fetchFeedback } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchFeedback());
    dispatch(fetchAllCities());
  })

  return (
    <div>
      <Router>
        <div className="d-flex mh100">
          <Sidebar />
          <div className="content">
            <div className="content-inner">
            <Switch>
              <Route exact path="/" component={CommentsPage} />
              <Route path="/stat" component={StatPage} />
              <Route component={NotFoundPage} />
            </Switch>
            </div>
            <div className="content-footer">
              feedBacker (c) 2017 by Humster Elements Ltd.
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};
export default App;
