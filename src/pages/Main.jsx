import React from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import JumbotronBottle from "../components/MainPageComponents/JumbotronBottle"
import JumbotronGlobe from "../components/MainPageComponents/JumbotronMap"
import JumbotronSommelier from "../components/MainPageComponents/JumbotronSommelier"
import SellBuyWorld from "../components/MainPageComponents/SellBuyWorld"

export default function Main() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav />
        <div className="flex flex-col items-center w-full min-h-screen font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <JumbotronBottle />
          <JumbotronGlobe />
          <JumbotronSommelier />
          <SellBuyWorld />
        </div>
      </div>
    </div>
  )
}
