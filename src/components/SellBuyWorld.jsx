import React from "react"
import { Link } from "react-router-dom"

export default function SellBuyWorld() {
  return (
    <div className="mt-6 mb-6">
      <div className="flex flex-wrap gap-6 mx-6 justify-evenly">
        <Link
          to="/buy"
          className="flex shadow-thema3 items-center justify-center w-[300px] h-[100px]  rounded-full shadow-md  bg-thema2 border-thema3"
        >
          <p className="text-3xl text-white font-poppins">Buy</p>
        </Link>

        <Link
          to="/sell"
          className="flex shadow-thema3  items-center justify-center w-[300px] h-[100px]  rounded-full shadow-md bg-thema2 border-thema3"
        >
          <p className="text-3xl text-white font-poppins">Sell</p>
        </Link>

        <Link
          to="/wineworld"
          className="flex shadow-thema3 items-center  justify-center w-[300px] h-[100px]  rounded-full shadow-md bg-thema2 border-thema3"
        >
          <p className="text-3xl text-white font-poppins">WineWorld</p>
        </Link>
      </div>
    </div>
  )
}
