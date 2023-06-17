import React from "react";
import { Route, Navigate } from "react-router-dom";
// import { permissionGranted } from 'App/Services'

export const PrivateRoute = ({
  component: Component,
  authenticated,
  // permission,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/401",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};
