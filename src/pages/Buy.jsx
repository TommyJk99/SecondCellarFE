import React from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import Searchbar from "../components/BuyComponents/SearchBar"

export default function Buy() {
  return (
    <div>
      <MyNav />
      <div className={` flex justify-center h-screen shadow-md font-poppins shadow-thema4 bg-gradient-to-t from-thema1 via-thema2 to-thema3 `}>
        <Searchbar />
      </div>
    </div>
  )
}
