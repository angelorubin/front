import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../utils";

export const PrivateRoute = ({ component: Dashboard, ...rest }) => (
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
