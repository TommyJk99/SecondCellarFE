import React from "react";
import { useAuth } from "../auth/AuthContext.js";

export default function Me() {
  // this is the custom hook we created in the AuthContext.js file
  const { isAuthenticated } = useAuth();
  return (
    <div>{isAuthenticated ? <div>You are logged in! This is your private page!</div> : <p>Permission denied</p>}</div>
  );
}
