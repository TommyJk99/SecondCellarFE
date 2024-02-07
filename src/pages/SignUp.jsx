import React, { useState } from "react"
import { Link } from "react-router-dom"
import GrapeLogo from "../assets/images/GrapeLogo.png"
import MyNav from "../components/GeneralComponents/MyNav"
import warning from "../assets/svg/warning.svg"
import Axios from "axios"

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

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
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return
    } else if (formData.name === "" || formData.email === "" || formData.password === "" || formData.confirmPassword === "") {
      setError("Please fill in all the fields.")
      return
    }
    try {
      await Axios.post("http://localhost:3030/sign-up", formData, {
        withCredentials: true,
      })

      setSuccess(true)
      setError("")
      setFormData({
        ...formData,
        password: "",
        confirmPassword: "",
      })
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message)
        setError(error.response.data.message)
      } else if (error.request) {
        setError("No response from the server :(")
      } else {
        setError("Error sending request, retry later.")
      }
    }
  }
  if (success) {
    return (
      <div className="flex justify-center min-h-screen">
        <div className="max-w-[1920px] w-full">
          <MyNav />
          <div className="flex items-center justify-center h-screen bg-thema4 font-poppins">
            <div className="flex flex-col items-center justify-center px-10 py-10 shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px] rounded-xl bg-thema1">
              <p className="font-bold text-thema4">REGISTRATION SUCCESSFUL!</p>
              <br />
              <div>
                Welcome <span className="font-bold">{formData.name}!</span>
              </div>{" "}
              <p>
                You can click{" "}
                <Link to={"/me"} className="font-bold text-thema4 hover:text-thema3">
                  here
                </Link>{" "}
                to access your dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else
    return (
      <div className="flex justify-center min-h-screen">
        <div className="max-w-[1920px] w-full">
          <MyNav />
          <div className="flex items-center justify-center h-full pt-16 font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
            <form className="p-6 bg-white rounded-md shadow-lg w-96" onSubmit={handleSubmit}>
              <h1 className="block text-3xl font-semibold text-center ">
                SignUp <img src={GrapeLogo} className="inline w-12 h-12" alt="Grape Logo" />
              </h1>
              <hr className="mt-3" />

              {/* Form Name */}
              <div className="mt-3">
                <label htmlFor="name" className="block mb-2 text-base">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-1 text-base border rounded-md focus:outline-1 focus:border-thema4"
                  placeholder="Enter name..."
                  onChange={handleChange}
                />
              </div>

              {/* Form Email */}
              <div className="mt-3">
                <label htmlFor="email" className="block mb-2 text-base">
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

              {/* Form Password */}
              <div className="mt-3">
                <label htmlFor="password" className="block mb-2 text-base">
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

              {/* Form Confirm Password */}
              <div className="mt-3">
                <label htmlFor="confirmPassword" className="block mb-2 text-base">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-2 py-1 text-base border rounded-md focus:outline-1 focus:border-thema4"
                  placeholder="Confirm Password..."
                  onChange={handleChange}
                />
              </div>
              {/* It deals with the errors*/}
              {error && (
                <div className="flex justify-center gap-1 mt-5 text-thema3">
                  <img src={warning} className="inline w-6" alt="" />
                  <div className="">{error}</div>
                </div>
              )}

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full py-1 font-semibold transition duration-300 ease-in-out transform border-2 rounded-md hover:bg-thema4 hover:text-white hover:border-black"
                >
                  Sign up
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-5 text-sm">
                Registered already?
                <Link to={"/sign-in"} className="font-bold text-thema3 hover:text-thema4">
                  Log in here!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
