import React, { useEffect, useState } from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import JumbotronBottle from "../components/MainPageComponents/JumbotronBottle"
import JumbotronGlobe from "../components/MainPageComponents/JumbotronMap"
import JumbotronSommelier from "../components/MainPageComponents/JumbotronSommelier"
import SellBuyWorld from "../components/MainPageComponents/SellBuyWorld"
import Footer from "../components/GeneralComponents/Footer"
import { checkAuth } from "../auth/AuthService"

export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const authenticate = async () => {
      try {
        const userData = await checkAuth()
        setIsAuthenticated(true)
        setUserDetails(userData) // Salva i dettagli dell'utente se autenticato
      } catch (error) {
        setIsAuthenticated(false)
        setUserDetails(null) // Pulisci i dettagli dell'utente se l'autenticazione fallisce
      }
    }

    authenticate()
  }, [])

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav userDetails={userDetails} />
        <div className="flex flex-col items-center w-full min-h-screen gap-10 justify-evenly font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <JumbotronBottle />
          <JumbotronGlobe />
          <JumbotronSommelier />
          <SellBuyWorld />
        </div>
        <Footer />
      </div>
    </div>
  )
}
