import React, { useEffect, useState } from "react"
import Axios from "axios"
import MyNav from "../components/GeneralComponents/MyNav"
import Spinner from "../components/LoadingComponents/Spinner"
import { Link } from "react-router-dom"

//maybe later we can use this function in a separate file
const checkAuth = async () => {
  try {
    const res = await Axios.get("http://localhost:3030/users/me", { withCredentials: true })
    return res.status === 200
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default function Me() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const authenticate = async () => {
      try {
        const isAuthenticated = await checkAuth()
        setIsAuthenticated(isAuthenticated)
      } catch (error) {
        setError("Autenticazione fallita. Per favore, prova di nuovo.")
      } finally {
        setIsLoading(false)
      }
    }
    authenticate()
  }, [])

  // if (isLoading) return <div>Caricamento...</div>
  // if (error) return <div>Errore: {error}</div>
  if (error) {
    return (
      <div>
        <MyNav />
        <div
          className={` flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}
        >
          <div className="mx-8 text-center text-[20px]">⛔ Errore: {error}</div>
        </div>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div>
        <MyNav />
        <div
          className={` flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}
        >
          <Spinner />
        </div>
      </div>
    )
  } else if (!isAuthenticated) {
    return (
      <div>
        <MyNav />
        <div
          className={` flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}
        >
          <div className="mx-8 text-center text-[20px]">
            ⛔ You are <span className="font-bold">NOT</span> authenticated, please{" "}
            <Link to="/sign-in" className="mr-2 font-bold text-thema4 hover:text-thema3 hover:bold">
              sign in
            </Link>{" "}
            or{" "}
            <Link to="/sign-up" className="mr-2 font-bold text-thema4 hover:text-thema3 hover:bold">
              sign up
            </Link>
          </div>
        </div>
      </div>
    )
  } else
    return (
      <div className="flex justify-center min-h-screen">
        <div className="max-w-[1920px] w-full">
          <MyNav />
          <div
            className={` flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}
          >
            <div>This is your private page, here you can do a bunch of stuff</div>
          </div>
        </div>
      </div>
    )
}
