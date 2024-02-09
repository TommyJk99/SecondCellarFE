import React from "react"
import { Link } from "react-router-dom"

export default function SellFavoritesCart() {
  return (
    <div className="flex flex-wrap gap-10 mt-10 justify-evenly mb-14">
      <Link
        to="/me/sell"
        className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom3 shadow-md  bg-thema1 border-thema3"
      >
        <p className="text-4xl font-bold text-thema3 font-poppins">Sell</p>
      </Link>

      <Link
        to="/me/favorites"
        className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom1 shadow-md  bg-thema1 border-thema3"
      >
        <p className="text-4xl font-bold text-thema3 font-poppins">Favorites</p>
      </Link>

      <Link
        to="/me/cart"
        className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom2 shadow-md  bg-thema1 border-thema3"
      >
        <p className="text-4xl font-bold text-thema3 font-poppins">Cart</p>
      </Link>
    </div>
  )
}
