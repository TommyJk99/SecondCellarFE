import axios from "axios";

// this is the axios instance that will be used in the app, it is configured to send cookies
const axiosInstance = axios.create({
  withCredentials: true,
});

// this is the interceptor that will intercept any error responses from the server and check if the status code is 401
// if the status code is 401, it will try to refresh the token and then retry the original request
// if the user has a valid refresh token, the server will send back a new access token and the original request will be retried
// if not the user will be redirected to the login page
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axios.post("http://localhost:3030/refresh-token");
        if (refreshResponse.status === 200) {
          return axios(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
