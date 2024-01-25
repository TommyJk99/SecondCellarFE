import React from "react"
import MyNav from "../components/MyNav"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="min-h-screen bg-gradient-to-t from-thema2 via-thema3 to-thema4">
        <div className="text-white pt-2 pl-2">Questa è la mia pagina principale</div>
      </div>
    </>
  )
}
