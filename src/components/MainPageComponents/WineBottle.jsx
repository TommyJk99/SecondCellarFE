import React from "react"
import bottle from "../../assets/svg/bottle.svg"

export default function WineBottle() {
  return (
    <div className="absolute z-20 hidden lg:block lg:right-20 lg:top-8 xl:right-52 xl:top-8">
      <img className="hover:animate-shake" src={bottle} alt="" />
    </div>
  )
}
