import React, { useEffect, useState } from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import Spinner from "../components/LoadingComponents/Spinner"
import { Link } from "react-router-dom"
import SellFavoritesCart from "../components/MyCellarComponents/SellFavoritesCart"
import { checkAuth, refreshToken } from "../auth/AuthService"

export default function MyCellar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const authenticate = async () => {
      try {
        const authStatus = await checkAuth()
        setIsAuthenticated(authStatus)
        setError("") // Pulisce l'errore se l'autenticazione ha successo
      } catch (error) {
        try {
          const refreshStatus = await refreshToken()
          if (refreshStatus) {
            const authStatus = await checkAuth()
            setIsAuthenticated(authStatus)
            setError("") // Pulisce l'errore se l'autenticazione ha successo dopo il rinnovo del token
          } else {
            setError("Autenticazione fallita. Per favore, prova di nuovo.")
          }
        } catch (refreshError) {
          setError("Autenticazione fallita. Per favore, prova di nuovo.")
        }
      } finally {
        setIsLoading(false)
      }
    }
    authenticate()
  }, [])

  if (isLoading) {
    return (
      <div>
        <MyNav />
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <div
          className={` flex items-center justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}
        >
          <div className="mx-8 text-center text-[20px] rounded-custom1 bg-white p-14">
            ⛔ Errore: {error}
            <p>
              <Link to="/sign-in" className="font-bold text-thema4 hover:text-thema3">
                Clicca qui
              </Link>{" "}
              per tornare alla pagina di login
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div>
        <MyNav />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            ⛔ You are NOT authenticated, please{" "}
            <Link to="/sign-in" className="font-bold text-thema4 hover:text-thema3">
              sign in
            </Link>{" "}
            or{" "}
            <Link to="/sign-up" className="font-bold text-thema4 hover:text-thema3">
              sign up
            </Link>
            .
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav />
        <div className="flex flex-col justify-center w-full min-h-screen font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <SellFavoritesCart />
        </div>
      </div>
    </div>
  )
}
