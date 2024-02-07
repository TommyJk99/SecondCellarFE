import React from "react"
import { Link } from "react-router-dom"

export default function SellBuyWorld() {
  return (
    <div className="flex flex-wrap gap-10 mx-6 mt-5  mb-14 justify-evenly">
      <Link
        to="/buy"
        className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom3 shadow-md  bg-thema1 border-thema3"
      >
        <p className="text-4xl font-bold text-thema3 font-poppins">Buy</p>
      </Link>

      <Link
        to="/sell"
        className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom1 shadow-md  bg-thema1 border-thema3"
      >
        <p className="text-4xl font-bold text-thema3 font-poppins">Sell</p>
      </Link>

      <Link
        to="/wineworld"
        className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom2 shadow-md  bg-thema1 border-thema3"
      >
        <p className="text-4xl font-bold text-thema3 font-poppins">WineWorld</p>
      </Link>
    </div>
  )
}
