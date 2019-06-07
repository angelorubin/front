import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../utils";

const PrivateRoute = ({ component: Dashboard, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Dashboard {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
