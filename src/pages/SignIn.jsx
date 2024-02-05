import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import GrapeLogo from "../assets/images/GrapeLogo.png"
import MyNav from "../components/GeneralComponents/MyNav"
import warning from "../assets/svg/warning.svg"
import Axios from "axios"
import Spinner from "../components/LoadingComponents/Spinner"

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      // this will redirect to /me after 1 second
      const timer = setTimeout(() => {
        navigate("/me")
        setSuccess(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [success, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const isEmailValid = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regex.test(email)
    }

    if (!isEmailValid(formData.email)) {
      setError("Please enter a valid email address.")
      return
    }

    try {
      await Axios.post("http://localhost:3030/sign-in", formData, {
        withCredentials: true, // this will ensure that the cookie is captured
      })

      setSuccess(true)
      setError("")
      setFormData({
        name: "",
        password: "",
      })
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
        setError(error.response.data.message)
      } else if (error.request) {
        setError("No response from the server :(")
      } else {
        setError("Something went wrong :(")
      }
    }
  }

  return (
    <div>
      <MyNav />
      <div
        className={` flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}
      >
        <div className={`${success ? "" : "hidden"}`}>
          <Spinner />
        </div>
        <form className={`p-6 bg-white rounded-md shadow-lg w-96 ${success ? "hidden" : ""}`} onSubmit={handleSubmit}>
          <h1 className="block text-3xl font-semibold text-center ">
            Login <img src={GrapeLogo} className="inline w-12 h-12" alt="" />
          </h1>
          <hr className="mt-3" />

          <div className="mt-3">
            <label for="email" className="block mb-2 text-base">
              Email:
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-2 py-1 text-base border rounded-md focus:outline-1 focus:border-thema4"
              placeholder="Enter email..."
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label for="password" className="block mb-2 text-base">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-2 py-1 text-base border rounded-md focus:outline-1 focus:border-thema4"
              placeholder="Enter Password..."
              onChange={handleChange}
            />
          </div>
          {error && (
            <div className="flex justify-center gap-1 mt-5 text-thema3">
              <img src={warning} className="inline w-6" alt="" />
              <div>{error}</div>
            </div>
          )}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <input type="checkbox" className="accent-thema4" />
              <label className="ml-1">Remember Me</label>
            </div>
            <div>
              <Link to={"/"} className="text-indigo-800 hover:text-thema4 hover:bold ">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full py-1 font-semibold transition duration-300 ease-in-out transform border-2 rounded-md hover:bg-thema4 hover:text-white hover:border-black "
            >
              &nbsp;&nbsp;Login
            </button>
            <div className="flex justify-center gap-2 mt-5 text-sm">
              Haven't signed up yet?
              <Link to={"/sign-up"} className="mr-2 font-bold text-thema3 hover:text-thema4 hover:bold">
                Register now!
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
