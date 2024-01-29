import React from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import Jumbotron from "../components/MainPageComponents/Jumbotron"
import SellBuyWorld from "../components/MainPageComponents/SellBuyWorld"
import WineWorldMain from "../components/MainPageComponents/WineWorldMain"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="z-0 min-h-[100vh] pt-3 bg-gradient-to-t from-thema2 via-thema3 to-thema4 2xl:w-[80%] 2xl:mx-auto">
        <div className="">
          <Jumbotron />
          <WineWorldMain />
          <SellBuyWorld />
        </div>
      </div>
    </>
  )
}
