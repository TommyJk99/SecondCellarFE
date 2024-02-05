import React from "react"
import WineBottle from "./WineBottle"

export default function Jumbotron() {
  return (
    <div className="relative sm:block mt-10 ml-[5rem] sm:mt-[3rem] sm:ml-[8rem] md:ml-[8rem] lg:mt-20 lg:ml-40 xl:mt-20 xl:ml-40 font-bold font-poppins sm:h-[380px] h-[240px]">
      <div className="absolute z-20 lg:top-0 lg:left-[-4rem]  xl:top-0 xl:left-0  drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.8)]">
        <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[8rem] xl:text-[8rem] bold text-white">
          Buy <span className="text-[3rem] sm:text-[4rem] md:text-[5rem] ">&</span>
        </span>

        <p className="text-[4rem] mt-[-30px] ml-8 sm:text-[6rem] md:text-[8rem] md:mt-[-50px] lg:text-[8rem] bold text-white xl:mt-[-60px] lg:mt-[-60px] xl:ml-10  md:ml-10 sm:ml-10 sm:mt-[-40px]">
          Sell <span className="lg:text-[6rem] md:text-[6rem] xl:text-[6rem] font-greatVibes">Wines</span>
        </p>
      </div>

      <div className="absolute hidden rounded-full lg:block lg:z-10 xl:z-10 xl:top-20 lg:top-20 bg-thema1 w-60 h-60 left-60 border-thema4 "></div>
      <div className="absolute z-10 rounded-full md:top-8 md:left-96 lg:top-0 lg:left-0 w-36 h-36 bg-thema2 border-thema4 "></div>
      <div className="absolute z-10 w-40 h-40 rounded-full sm:w-52 sm:h-52 top-16 right-14 sm:right-16 md:right-16 lg:right-28 xl:right-56 bg-thema1 border-thema4 "></div>
      <WineBottle />
    </div>
  )
}
