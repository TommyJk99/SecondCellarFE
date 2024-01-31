import React from "react"
import { Link } from "react-router-dom"
import GrapeLogo from "../assets/images/GrapeLogo.png"
import MyNav from "../components/GeneralComponents/MyNav"

export default function SignIn() {
  return (
    <div>
      <MyNav />
      <div className="flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3">
        <div className="p-6 bg-white rounded-md shadow-lg w-96">
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
            />
          </div>
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
        </div>
      </div>
    </div>
  )
}
