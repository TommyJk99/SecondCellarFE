import React from "react"
import GrapeLogo from "./Logo"

export default function Jumbotron() {
  return (
    <div className="relative mt-20 ml-40 font-bold font-poppins h-[380px]">
      {/* Zona del testo con z-index più alto */}
      <div className="absolute top-0 left-0 z-20 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)]">
        <span className="text-[8rem] bold text-white">
          BUY <span className="text-[4rem]">&</span>
        </span>

        <p className="text-[8rem] bold text-white mt-[-60px] ml-10">
          SELL <span className="text-[6rem] font-greatVibes">Wines</span>
        </p>
      </div>

      {/* Sfere con z-index inferiore */}
      <div className="absolute z-10 rounded-full top-20 bg-thema2 w-60 h-60 left-60 border-thema4 "></div>
      <div className="absolute top-0 left-0 z-10 rounded-full w-36 h-36 bg-thema2 border-thema4 "></div>
      <div className="absolute z-10 rounded-full shadow-lg w-52 h-52 top-16 right-56 bg-thema1 border-thema4 shadow-thema4"></div>
      <GrapeLogo />
    </div>
  )
}
