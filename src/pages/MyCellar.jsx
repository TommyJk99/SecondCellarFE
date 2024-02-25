import React, { useEffect, useState } from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import Spinner from "../components/LoadingComponents/Spinner"
import { Link } from "react-router-dom"
import SellFavoritesCart from "../components/MyCellarComponents/SellFavoritesCart"
import { checkAuth, refreshToken } from "../auth/AuthService"
import OnSale from "../components/MyCellarComponents/OnSale"
import { useScrollToTop } from "../components/MyHooks/scrollToTop"
import Favorites from "../components/MyCellarComponents/Favorites"

export default function MyCellar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [userDetails, setUserDetails] = useState(null)
  const [error, setError] = useState("")

  useScrollToTop()

  useEffect(() => {
    const authenticate = async () => {
      setIsLoading(true)
      try {
        const userData = await checkAuth()
        setIsAuthenticated(true)
        setUserDetails(userData) // the user details are saved if authenticated
        setError("")
      } catch (error) {
        try {
          const refreshSuccess = await refreshToken()
          if (refreshSuccess) {
            const userData = await checkAuth() // if the refresh token is valid, get the user data
            setIsAuthenticated(true)
            setUserDetails(userData)
            setError("")
          } else {
            setIsAuthenticated(false)
            setError("Per favore, effettua il login.")
          }
        } catch (refreshError) {
          console.error("Token refresh failed", refreshError)
          setIsAuthenticated(false)
          setError("Autenticazione fallita.")
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
        <div className="flex items-center justify-center h-screen bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <Spinner />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <div className={` flex items-center justify-center h-screen font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}>
          <div className="mx-8 text-center text-[20px] rounded-custom1 bg-white p-14 shadow-inner shadow-thema4">
            ⛔ Errore Autenticazione: {error}
            <p>
              <Link to="/sign-in" className="font-bold text-thema4 hover:text-thema3">
                Clicca qui
              </Link>{" "}
              per effettuare il login
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div>
        <div className={` flex items-center justify-center h-screen font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}>
          <div className="mx-8 text-center text-[20px] rounded-custom1 bg-white p-14 shadow-inner shadow-thema4">
            ⛔ Errore Autenticazione: {error}
            <p>
              <Link to="/sign-in" className="font-bold text-thema4 hover:text-thema3">
                Clicca qui
              </Link>{" "}
              per effettuare il login
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    // this will provide: favorite wines, selled wines, cart
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav userDetails={userDetails} />
        <div className="flex flex-col justify-center w-full min-h-screen font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <SellFavoritesCart />
          <OnSale onSale={userDetails.onSale} userId={userDetails._id} />
          <Favorites favorites={userDetails.favorites} userId={userDetails._id} />
        </div>
      </div>
    </div>
  )
}
