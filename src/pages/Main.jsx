import React from "react"
import MyNav from "../components/MyNav"
import Jumbotron from "../components/Jumbotron"
import SellBuyWorld from "../components/SellBuyWorld"
import WineWorldMain from "../components/WineWorldMain"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="z-0 min-h-[100vh] pt-3 bg-gradient-to-t from-thema2 via-thema3 to-thema4">
        <Jumbotron />
        <WineWorldMain />
        <SellBuyWorld />
      </div>
    </>
  )
}
