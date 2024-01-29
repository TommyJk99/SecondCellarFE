import React from "react"
import worldmap from "../../assets/svg/worldmap.svg"

export default function WorldMap() {
  return (
    <div className="absolute z-20 hidden lg:block lg:top-5 lg:left-[-5rem] xl:left-0 xl:top-8 ">
      <img className="w-72 hover:animate-shake" src={worldmap} alt="" />
    </div>
  )
}
