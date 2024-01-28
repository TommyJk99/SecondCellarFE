import React from "react"
import { Link } from "react-router-dom"

export default function SellBuyWorld() {
  return (
    <div className="relative z-10 pb-6 mt-3">
      <div className="z-20 flex flex-wrap gap-6 mx-6 justify-evenly">
        <Link
          to="/buy"
          className="flex shadow-thema3 items-center justify-center w-[300px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-full shadow-md  bg-thema1 border-thema3"
        >
          <p className="text-4xl font-bold text-thema3 font-poppins">Buy</p>
        </Link>

        <Link
          to="/sell"
          className="flex shadow-thema3 items-center justify-center w-[300px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-full shadow-md  bg-thema1 border-thema3"
        >
          <p className="text-4xl font-bold text-thema3 font-poppins">Sell</p>
        </Link>

        <Link
          to="/wineworld"
          className="flex shadow-thema3 items-center justify-center w-[300px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-full shadow-md  bg-thema1 border-thema3"
        >
          <p className="text-4xl font-bold text-thema3 font-poppins">WineWorld</p>
        </Link>
      </div>
    </div>
  )
}
