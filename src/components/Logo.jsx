import React from "react"
import bottle from "../assets/svg/bottle.svg"

export default function GrapeLogo() {
  return (
    <div className="absolute right-52 top-10">
      <img className="hover:animate-shake" src={bottle} alt="" />
    </div>
  )
}
