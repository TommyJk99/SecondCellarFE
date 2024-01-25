import React from "react"
import Logo from "../assets/logo.png"
import NavSvg from "../assets/svg/nav.svg"

export default function MyNav() {
  return (
    <nav className="font-poppins flex justify-between items-center w-[98%]">
      <div>
        <img src={Logo} alt="" className="object-contain h-18 w-60" />
      </div>
      <div>
        <div className="md:hidden">
          <img src={NavSvg} alt="NavSvg" />
        </div>

        <ul className="hidden md:flex items-center gap-10 ">
          {["Home", "MyCellar", "Favorite", "Info"].map((text, index) => (
            <li key={index}>
              <a href="/" className="hover:text-thema3">
                {text}
              </a>
            </li>
          ))}
          <button className="bg-thema2 rounded-full px-4 py-2 hover:bg-thema1 ">Sign In</button>
        </ul>
      </div>
    </nav>
  )
}
