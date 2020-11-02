import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommentsPage from "./pages/CommentsPage";
import StatPage from "./pages/StatPage";
import NotFoundPage from "./pages/NotFoundPage";
import Sidebar from "./components/SideBar";

const App = () => {
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
