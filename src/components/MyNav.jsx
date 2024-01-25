import React, { useState } from "react"
import Logo from "../assets/images/logo.png"
import NavSvg from "../assets/svg/nav.svg"

export default function MyNav() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const navLinks = ["Home", "MyCellar", "Favorite", "Info", "WineWiz"]

  return (
    <nav className="font-poppins flex flex-col md:flex-row justify-between items-center w-[98%] shadow-lg">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={Logo} alt="" className="object-contain  w-[14rem]" />

        <button className="md:hidden" onClick={toggleMenu}>
          <img src={NavSvg} alt="NavSvg" />
        </button>
      </div>

      {showMenu && (
        <ul className="md:hidden flex flex-col items-center gap-4 mb-3">
          {navLinks.map((text, index) => (
            <li key={index}>
              <a href="/" className="hover:text-thema3">
                {text}
              </a>
            </li>
          ))}
          <button className="bg-thema2 rounded-full px-4 py-2 hover:bg-thema1 shadow-md">
            Sign In
          </button>
        </ul>
      )}

      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((text, index) => (
          <li key={index}>
            <a href="/" className="hover:text-thema3 text-sm">
              {text}
            </a>
          </li>
        ))}
        <button className="bg-thema2 rounded-full px-4 py-2 hover:bg-thema1 shadow-md">
          Sign In
        </button>
      </ul>
    </nav>
  )
}
