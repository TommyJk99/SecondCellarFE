import React from "react"
import MyNav from "../components/MyNav"
import Jumbotron from "../components/Jumbotron"

export default function Main() {
  return (
    <>
      <MyNav />
      <div className="min-h-screen bg-gradient-to-t from-thema2 via-thema3 to-thema4 pt-3">
        <Jumbotron />
      </div>
    </>
  )
}
