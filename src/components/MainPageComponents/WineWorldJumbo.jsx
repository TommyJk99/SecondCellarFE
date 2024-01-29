import React from "react"
import WorldMap from "./Map"

export default function WineWorldMain() {
  return (
    <div className="relative mt-0 md:ml-28 lg:ml-40 font-bold font-poppins h-[380px]">
      {/* Zona del testo con z-index più alto */}
      <div className="absolute top-0 lg:right-12 z-20 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)] ">
        <span className="text-[8rem] bold text-white">
          Explore <span className="text-[4rem]">the</span>
        </span>

        <p className="text-[8rem] bold text-white mt-[-60px] ml-10">
          <span className="text-[6rem] font-greatVibes">Wine World</span>
        </p>
      </div>

      {/* Sfere con z-index inferiore */}
      <div className="absolute z-10 rounded-full bg-thema2 border-thema4 left-12 top-10 w-52 h-52 lg:left-32"></div>
      <div className="absolute top-0 z-10 rounded-full w-80 h-80 right-56 bg-thema1 border-thema4"></div>
      <WorldMap />
    </div>
  )
}
