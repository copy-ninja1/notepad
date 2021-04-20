import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefualtLayout from "../layout/defualtLayout";

import HomePage from "../pages/index";
import NotePage from "../pages/[note]";
import NewNotePage from "../pages/writer";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DefualtLayout>
            <HomePage />
          </DefualtLayout>
        </Route>
        <Route exact path="/note/new">
          <DefualtLayout>
            <NewNotePage />
          </DefualtLayout>
        </Route>
        <Route exact path="/note/:id">
          <DefualtLayout>
            <NotePage />
          </DefualtLayout>
        </Route>
        <Route exact path="/note/:id/edit">
          <DefualtLayout>
            <NewNotePage />
          </DefualtLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
