import React, { useState } from "react"
import Logo from "../../assets/images/logo.png"
import NavSvg from "../../assets/svg/nav.svg"
import CloseSvg from "../../assets/svg/close.svg"
import { Link, useLocation } from "react-router-dom"

export default function MyNav({ userDetails }) {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const navLinks = ["Home", "Buy", "MyCellar", "WineWorld"]

  return (
    <nav className="sticky top-0 z-30 flex flex-col items-center justify-between w-full bg-white shadow-sm shadow-thema3/50 md:pr-8 font-poppins md:flex-row 2xl:w-full 2xl:pr-8">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link to={"/"}>
          <img src={Logo} alt="" className="object-contain w-[14rem]" />
        </Link>

        <button className="relative flex items-center justify-center w-10 h-10 mr-2 md:hidden" onClick={toggleMenu}>
          <img
            src={NavSvg}
            alt="Menu Icon"
            className={`absolute transition-opacity duration-300 ${showMenu ? "opacity-0" : "opacity-100"}`}
            style={{ width: 24, height: 24 }}
          />
          <img
            src={CloseSvg}
            alt="Close Icon"
            className={`absolute transition-opacity duration-300 ${showMenu ? "opacity-100" : "opacity-0"}`}
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>

      {showMenu && (
        <ul className="flex flex-col items-center gap-4 mt-5 mb-5 md:hidden">
          {navLinks.map((text, index) => (
            <li key={index}>
              <Link to={text === "Home" ? "/" : `/${text.toLowerCase()}`} className="hover:text-thema3">
                {text}
              </Link>
            </li>
          ))}
          {!userDetails && location.pathname !== "/sign-in" && (
            <Link to="/sign-in" className="px-4 py-2 rounded-full shadow-md bg-thema2 hover:bg-thema1">
              Sign In
            </Link>
          )}
        </ul>
      )}

      <ul className="items-center hidden gap-10 md:flex">
        {navLinks.map((text, index) => (
          <li key={index}>
            <Link to={text === "Home" ? "/" : `/${text.toLowerCase()}`} className="text-sm hover:text-thema3">
              {text}
            </Link>
          </li>
        ))}
        {!userDetails && location.pathname !== "/sign-in" && (
          <Link to="/sign-in" className="px-4 py-2 text-white rounded-full shadow-md bg-thema2 hover:bg-thema1">
            Sign In
          </Link>
        )}

        {userDetails && userDetails.profilePicture && (
          <Link to="/me/profile">
            <img src={userDetails.profilePicture} alt="Profilo" className="w-10 h-10 rounded-full" />
          </Link>
        )}
      </ul>
    </nav>
  )
}
