import React from "react"
import { Link } from "react-router-dom"

export default function CustomShadowComponent({ text }) {
  // const urlText = text.toLowerCase().replace(/\s+/g, "-")
  return (
    // <Link to={`/wineworld/${urlText}`}> remember to change the link to the correct path!!
    <Link to={`/wineworld/the-vine`}>
      <div className="relative flex items-center justify-center h-[5rem] text-black bg-white w-[16rem] rounded-3xl shadow-lg hover:shadow-inner hover:shadow-thema4">
        <div className="absolute w-full h-full opacity-50 -z-10 rounded-3xl filter blur-lg" style={{ background: "inherit" }}></div>
        <p className="text-[1.2rem] font-bold text-thema3">{text}</p>
      </div>
    </Link>
  )
}
