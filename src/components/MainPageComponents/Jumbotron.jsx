import React from "react"
import WineBottle from "./WineBottle"

export default function Jumbotron() {
  return (
    <div className="relative md:ml-[8rem] lg:mt-20 lg:ml-40 xl:mt-20 xl:ml-40 font-bold font-poppins h-[380px] ">
      {/* Zona del testo con z-index più alto */}
      <div className="absolute z-20 lg:top-0 lg:left-[-4rem]  xl:top-0 xl:left-0  drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)]">
        <span className="md:text-[8rem] lg:text-[8rem] xl:text-[8rem] bold text-white">
          Buy <span className="md:text-[4rem] lg:text-[4rem] xl:text-[4rem]">&</span>
        </span>

        <p className="md:text-[8rem] md:mt-[-50px] lg:text-[8rem] bold text-white xl:mt-[-60px] lg:mt-[-60px] xl:ml-10  md:ml-10">
          Sell <span className="lg:text-[6rem] md:text-[6rem] xl:text-[6rem] font-greatVibes">Wines</span>
        </p>
      </div>

      {/* Sfere con z-index inferiore */}
      <div className="absolute hidden rounded-full lg:block lg:z-10 xl:z-10 xl:top-20 lg:top-20 bg-thema3 w-60 h-60 left-60 border-thema4 "></div>
      <div className="absolute z-10 rounded-full md:top-8 md:left-96 lg:top-0 lg:left-0 w-36 h-36 bg-thema2 border-thema4 "></div>
      <div className="absolute z-10 rounded-full w-52 h-52 top-16 md:right-16 lg:right-28 xl:right-56 bg-thema1 border-thema4 "></div>
      <WineBottle />
    </div>
  )
}
