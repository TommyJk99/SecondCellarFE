import React from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import JumbotronBottle from "../components/MainPageComponents/JumbotronBottle"
import SellBuyWorld from "../components/MainPageComponents/SellBuyWorld"
import JumbotronGlobe from "../components/MainPageComponents/JumbotronMap"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="flex flex-col items-center h-full font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
        <JumbotronBottle />
        <JumbotronGlobe />
        <SellBuyWorld />
      </div>
    </>
  )
}
