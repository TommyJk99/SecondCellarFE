import React from "react"
import WorldMap from "./Map"

export default function Jumbotron() {
  return (
    <div className="relative mt-0 ml-40 font-bold font-poppins h-[380px]">
      {/* Zona del testo con z-index più alto */}
      <div className="absolute top-0 right-32 z-20 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)] ">
        <span className="text-[8rem] bold text-white">
          Explore <span className="text-[4rem]">the</span>
        </span>

        <p className="text-[8rem] bold text-white mt-[-60px] ml-10">
          <span className="text-[6rem] font-greatVibes">Wine World</span>
        </p>
      </div>

      {/* Sfere con z-index inferiore */}
      <div className="absolute top-0 left-0 z-10 rounded-full w-36 h-36 bg-thema2 border-thema4 2xl:left-16 2xl:top-10 2xl:w-52 2xl:h-52 "></div>
      <div className="absolute top-0 z-10 rounded-full w-80 h-80 right-56 bg-thema1 border-thema4"></div>
      <WorldMap />
    </div>
  )
}
