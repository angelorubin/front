import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Login from "./Login";
import Dashboard from "./Dashboard";
import { PrivateRoute } from "./PrivateRoute";

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
