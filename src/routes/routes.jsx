import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefualtLayout from "../layout/defualtLayout";

import HomePage from "../pages/index";
import NotePage from "../pages/[note]";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DefualtLayout>
            <HomePage />
          </DefualtLayout>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/note/:id">
          <DefualtLayout>
            <NotePage />
          </DefualtLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
