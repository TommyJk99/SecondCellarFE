import React from "react"
import WorldMap from "./Map"

export default function WineWorldMain() {
  return (
    <div className="relative mt-0 ml-11 sm:ml-28 md:ml-28 lg:ml-40 font-bold font-poppins sm:h-[380px] h-[250px]">
      <div className="absolute top-0 lg:right-12 z-20 drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)] ">
        <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] bold text-white">
          Explore <span className="hidden sm:inline text-[4rem]">the</span>
        </span>

        <p className="text-[8rem] sm:text-[6rem] md:text-[8rem]  text-white mt-[-90px] sm:mt-[-60px] ml-4 sm:ml-10">
          <span className=" text-[4rem] sm:text-[6rem] font-greatVibes">Wine World</span>
        </p>
      </div>

      <div className="absolute top-0 z-10 rounded-full bg-thema2 border-thema4 left-12 sm:top-10 w-52 h-52 lg:left-32"></div>
      <div className="absolute top-0 z-10 hidden rounded-full sm:block sm:w-64 sm:h-64 sm:right-32 md:right-56 bg-thema1 border-thema4"></div>
      <WorldMap />
    </div>
  )
}
