import React from "react"
import Logo from "../assets/images/Secondcellar_alternative_1_round.png"
import { Link } from "react-router-dom"
import Card from "../components/WineWorldComponents/Card"
import { useScrollToTop } from "../components/MyHooks/scrollToTop"

//remember to add a button to return on top of the page

export default function WineWorld() {
  useScrollToTop()
  return (
    <div className="flex justify-center min-h-screen font-poppins">
      <div className="max-w-[1920px] w-full bg-gradient-to-b from-thema5/70 via-thema2 to-thema1">
        <Link to="/" className="flex items-center justify-center gap-1 mt-2 mb-6 ml-2 sm:mt-6 sm:gap-3 sm:ml-3">
          <img src={Logo} alt="logo" className="w-8 sm:w-12" />
          <p className="sm:text-[1.8rem] text-[1.3rem] font-bold text-thema4">Return to Main Page</p>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <p className="text-[1.8rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.0rem] font-bold text-white">Welcome to Wine World</p>
          <p className="font-bold text-[1rem] sm:text-[1.5rem] text-white">Choose the argument to explore</p>
        </div>
        {/* Usa una grid per allineare i card */}
        <div className="grid grid-cols-1 gap-5 mx-5 mt-10 mb-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center">
          <Card text={"The vine"} />
          <Card text={"The vineyard"} />
          <Card text={"The grape"} />
          <Card text={"The wine"} />
          <Card text={"The sparkling wines"} />
          <Card text={"The dessert wines"} />
          <Card text={"The fortified wines"} />
          <Card text={"Italian wine"} />
          <Card text={"The laws"} />
          <Card text={"The beer"} />
          <Card text={"The spirits"} />
          <Card text={"The liqueurs"} />
          <Card text={"The sommelier"} />
          <Card text={"The service"} />
          <Card text={"At the table"} />
        </div>
      </div>
    </div>
  )
}
