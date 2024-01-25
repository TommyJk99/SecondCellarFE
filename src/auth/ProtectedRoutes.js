import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuth } = useAuth();

  return (
    <Route
      //rest is an object that contains all the props passed to the component
      {...rest}
      //render is a function that returns a React element: if the user is authenticated, it returns the children prop, otherwise it redirects the user to the sign-in page
      render={({ location }) => (isAuth ? children : <Navigate to="/sign-in" state={{ from: location }} />)}
    />
  );
};

export default ProtectedRoute;
