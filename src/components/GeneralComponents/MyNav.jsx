import React, { useState } from "react"
import Logo from "../../assets/images/logo.png"
import NavSvg from "../../assets/svg/nav.svg"
import { Link, useLocation } from "react-router-dom"

export default function MyNav() {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const navLinks = ["Home", "Buy", "Sell", "WineWorld"]

  return (
    <nav className="flex flex-col items-center justify-between md:w-full  md:pr-8 w-[98%] font-poppins md:flex-row 2xl:w-full 2xl:pr-8">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to={"/"}>
          <img src={Logo} alt="" className="object-contain  w-[14rem]" />
        </Link>

        <button className="md:hidden" onClick={toggleMenu}>
          <img src={NavSvg} alt="NavSvg" />
        </button>
      </div>

      {showMenu && (
        <ul className="flex flex-col items-center gap-4 mb-3 md:hidden">
          {navLinks.map((text, index) => (
            <li key={index}>
              <a href="/" className="hover:text-thema3">
                {text}
              </a>
            </li>
          ))}
          {location.pathname !== "/sign-in" && (
            <Link to="/sign-in" className="px-4 py-2 rounded-full shadow-md bg-thema2 hover:bg-thema1">
              Sign In
            </Link>
          )}
        </ul>
      )}

      <ul className="items-center hidden gap-10 md:flex">
        {navLinks.map((text, index) => (
          <li key={index}>
            <a href="/" className="text-sm hover:text-thema3">
              {text}
            </a>
          </li>
        ))}
        {location.pathname !== "/sign-in" && (
          <Link to="/sign-in" className="px-4 py-2 rounded-full shadow-md bg-thema2 hover:bg-thema1">
            Sign In
          </Link>
        )}
      </ul>
    </nav>
  )
}
