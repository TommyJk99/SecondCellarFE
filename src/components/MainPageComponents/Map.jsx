import React from "react"
import worldmap from "../../assets/svg/worldmap.svg"

export default function WorldMap() {
  return (
    <div className="absolute left-0 z-20 top-8 ">
      <img className="w-72 hover:animate-shake" src={worldmap} alt="" />
    </div>
  )
}
