import React from "react"

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div>
      <div className="custom-shape-divider-bottom-1707473748">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 text-center mb-14 gap-y-6 sm-gap-y-20 sm:text-left wrap font-poppins">
        {/* <img src={Logo} alt="logo" className="w-20 h-20 mt-[-8rem] opacity-30" /> */}
        <div className="flex flex-col justify-center">
          <p className="p-3 mb-5 font-bold shadow-inner text-thema4 shadow-thema4 rounded-custom1 bg-thema1">FIND US</p>
          <p>Via Lazzaro 5,</p>
          <p>20124 Milano</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="p-4 mt-8 mb-5 font-bold shadow-inner sm:mt-0 text-thema4 shadow-thema4 rounded-custom3 bg-thema1">CONTACT US </p>
          <p>info@secondcellar.it</p>
          <p>(+39) 029 17 26 304</p>
          <p>Copyright © 2021 </p>
        </div>
        <div className="flex flex-col justify-center mr-20 sm:mr-0">
          <p className="p-3 mb-5 font-bold shadow-inner text-thema4 shadow-thema4 rounded-custom2 bg-thema1">INFO</p>
          <Link to="/privay-policy"> Privacy policy </Link>
          <Link to="/privay-policy"> Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
