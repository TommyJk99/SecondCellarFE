import React, { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function SellFavoritesCart() {
  const [hoveredButton, setHoveredButton] = useState(null)

  // Mappatura dei bottoni ai loro testi quando l'hover è attivo
  const buttonHoverText = {
    sell: "💵",
    favorites: "⭐",
    cart: "🛒",
  }

  const buttonRoundedClasses = {
    sell: "rounded-custom1",
    favorites: "rounded-custom2",
    cart: "rounded-custom3",
  }

  return (
    <div className="flex flex-wrap gap-10 mt-10 justify-evenly mb-14">
      {Object.keys(buttonHoverText).map((button) => (
        <AnchorLink
          href={`#${button}`} //this is the ref for the AnchorLink, rember to add the other ids
          key={button}
          onMouseEnter={() => setHoveredButton(button)}
          onMouseLeave={() => setHoveredButton(null)}
          className={`flex shadow-thema4/70  items-center justify-center w-[280px] h-[100px] transform transition-all duration-500  hover:shadow-inner hover:shadow-thema4 hover:bg-white ${buttonRoundedClasses[button]} shadow-lg bg-thema1 border-thema3 cursor-pointer`}
          style={{ width: hoveredButton === button ? "280px" : "280px" }} // Esempio di animazione semplice
        >
          <p
            className={` font-bold text-center transition-all duration-400 text-thema3 font-poppins ${
              hoveredButton === button ? "text-[3rem]" : "text-[2rem]"
            }`}
          >
            {hoveredButton === button ? buttonHoverText[button] : button.charAt(0).toUpperCase() + button.slice(1)}
          </p>
        </AnchorLink>
      ))}
    </div>
  )
}
