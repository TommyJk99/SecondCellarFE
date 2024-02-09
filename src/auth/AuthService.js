import Axios from "axios"

//this is the centralized auth service
const axiosInstance = Axios.create({
  baseURL: "http://localhost:3030",
  withCredentials: true,
})

const checkAuth = async () => {
  try {
    const response = await axiosInstance.get("/users/me")
    return response.status === 200
  } catch (error) {
    console.error("Authentication check failed", error)
    throw error
  }
}

const signIn = async (formData) => {
  try {
    const response = await axiosInstance.post("/sign-in", formData)
    return response.data
  } catch (error) {
    throw error
  }
}

const logout = async () => {
  try {
    await axiosInstance.post("/sign-out")
  } catch (error) {
    console.error("Logout failed", error)
    throw error
  }
}

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
