import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosConfig"; // this is the instance we created in the axiosConfig.js file
import LoadingScreen from "../components/LoadingScreen";

export default function Authentication() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // if the user has a valid token, we redirect them to the /me page
  // if the access token is invalid or expired (error 401), we redirect them to the / page
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const meResponse = await axios.get("http://localhost:3030/users/me");
        if (meResponse.status === 200) {
          navigate("/me");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        navigate("/");
      } finally {
        setIsLoading(false);
      }
    };

    authenticateUser();
  }, [navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return null;
}
