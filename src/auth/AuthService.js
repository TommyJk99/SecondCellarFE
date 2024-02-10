import Axios from "axios"

//this is the centralized auth service
const axiosInstance = Axios.create({
  baseURL: "http://localhost:3030",
  withCredentials: true,
})

//this function checks if the user is authenticated and returns the user data
const checkAuth = async () => {
  try {
    const response = await axiosInstance.get("/users/me")
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.error("Authentication check failed", error)
    throw error
  }
}

//this function logs the user in
const signIn = async (formData) => {
  try {
    const response = await axiosInstance.post("/sign-in", formData)
    return response.data
  } catch (error) {
    throw error
  }
}

//this function logs the user out
const logout = async () => {
  try {
    await axiosInstance.post("/sign-out")
  } catch (error) {
    console.error("Logout failed", error)
    throw error
  }
}

//this function refreshes the access token using the refresh token
const refreshToken = async () => {
  try {
    const response = await axiosInstance.post("/refresh-token")
    return response.status === 200
  } catch (error) {
    console.error("Token refresh failed", error)
    throw error
  }
}

export { checkAuth, logout, refreshToken, signIn }
