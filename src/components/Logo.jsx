import React from "react"
import bottle from "../assets/svg/bottle.svg"

export default function GrapeLogo() {
  return (
    <div className="absolute z-20 right-52 top-8">
      <img className="hover:animate-shake" src={bottle} alt="" />
    </div>
  )
}
