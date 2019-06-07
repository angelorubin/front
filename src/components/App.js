import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Login from "./login";
import Dashboard from "./dashboard";
import PrivateRoute from "./privateRoute";

export const App = () => {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Router>
    </div>
  );
};
