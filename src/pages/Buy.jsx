import React, { useEffect, useState } from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import Searchbar from "../components/BuyComponents/SearchBar"
import { useScrollToTop } from "../components/MyHooks/scrollToTop"
import { checkAuth } from "../auth/AuthService"

export default function Buy() {
  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    const authenticate = async () => {
      try {
        const userData = await checkAuth()
        setUserDetails(userData)
      } catch (error) {
        setUserDetails(null)
      }
    }
    authenticate()
  }, [])

  useScrollToTop()

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav userDetails={userDetails} />
        <div className={` flex justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}>
          <Searchbar />
        </div>
      </div>
    </div>
  )
}
