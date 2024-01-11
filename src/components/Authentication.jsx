import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

// THIS COMPONENT is used to authenticate the user when the app starts
export default function Authentication() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        // axios.defaults.withCredentials = true is needed to send the cookie with the request
        axios.defaults.withCredentials = true;

        // this is the call to the /me endpoint on the server
        const meResponse = await axios.get("http://localhost:3030/me");

        // if the token is valid, the server will respond with a 200 status code and the user data
        // if the token is not valid, we need to call the /refresh-token endpoint that will return a new access token if the refresh token is valid
        if (meResponse.status === 200) {
          history.push("/me");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          try {
            const refreshResponse = await axios.post("http://localhost:3030/refresh-token");

            // if the refresh token is valid the server will respond with a 200 status code and the user data
            // the user is now authenticated and we can redirect him to the /me page
            if (refreshResponse.status === 200) {
              history.push("/me");
            }
          } catch (refreshError) {
            // if the refresh token is not valid, the server will respond with a 401 status code and we need to redirect the user to the main page
            history.push("/");
          }
        } else {
          // if other errors occur, we need to redirect the user to the main page
          console.error("First authentication error:", error);
          history.push("/");
        }
        // finally is always executed, even if there is an error, this is because we need to set isLoading to false to hide the loading screen
      } finally {
        setIsLoading(false);
      }
    };

    authenticateUser();
  }, [history]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return null;
}
