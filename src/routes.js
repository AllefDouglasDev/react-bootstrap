import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthService from "./services/auth.service";
import SignIn from "./pages/auth/sign-in";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      AuthService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
