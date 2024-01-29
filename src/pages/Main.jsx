import React from "react"
import MyNav from "../components/GeneralComponents/MyNav"
import Jumbotron from "../components/MainPageComponents/Jumbotron"
import SellBuyWorld from "../components/MainPageComponents/SellBuyWorld"
import WineWorldJumbo from "../components/MainPageComponents/WineWorldJumbo"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="z-0 min-h-[100vh] pt-3 bg-gradient-to-t from-thema2 via-thema3 to-thema4 2xl:w-[80%] 2xl:mx-auto">
        <div>
          <Jumbotron />
          <WineWorldJumbo />
          <SellBuyWorld />
        </div>
      </div>
    </>
  )
}
