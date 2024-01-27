import React from "react"
import MyNav from "../components/MyNav"
import Jumbotron from "../components/Jumbotron"
import SellBuyWorld from "../components/SellBuyWorld"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="h-[500px] pt-3 pb-0 bg-gradient-to-t from-thema2 via-thema3 to-thema4">
        <Jumbotron />
      </div>
      <SellBuyWorld />
    </>
  )
}
