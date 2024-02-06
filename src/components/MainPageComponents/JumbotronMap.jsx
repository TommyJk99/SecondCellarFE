import React from "react"
import Globe from "../../assets/svg/globe.svg"
export default function JumbotronGlobe() {
  return (
    <div
      className="relative pt-10 pb-10 mb-10 shadow-md shadow-thema3 w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema1 rounded-custom2"
      style={{ zIndex: 1 }}
    >
      <div className="relative z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p className="text-[4.5rem] font-black text-white ml-20">EXPLORE the </p>
        <p className=" text-[5rem] font-greatVibes  font-black text-white ml-20">
          <span className="font-greatVibes text-[5rem] ">Wine World</span>
        </p>
      </div>
      <img src={Globe} alt="Wine Bottle" className="absolute z-0 -translate-y-1/2 w-60 left-32 top-1/2" />
      <div className="absolute h-32 shadow-inner w-52 rounded-custom2 shadow-thema4 rounded-custom right-16 bottom-12 bg-gradient-to-t from-thema1 to-thema2"></div>
    </div>
  )
}
