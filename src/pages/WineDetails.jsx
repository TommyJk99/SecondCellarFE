import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import MyNav from "../components/GeneralComponents/MyNav"
import Carousel from "../components/BuyComponents/Carousel"

export default function WineDetails() {
  const { wineName, publisher } = useParams()
  const [wineDetails, setWineDetails] = useState(null)

  useEffect(() => {
    const fetchWineDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/wines/details/${encodeURIComponent(wineName)}/${publisher}`)
        setWineDetails(response.data)
      } catch (error) {
        console.error("Errore nel recupero dei dettagli del vino:", error)
      }
    }

    fetchWineDetails()
  }, [wineName, publisher])

  if (!wineDetails) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <MyNav />
      <div className="flex flex-col items-center justify-center h-screen font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
        <p className="text-[3rem] font-semibold text-center text-white ">{wineDetails.wineName}</p>
        <div className="w-[80%] sm:w-[60%] xl:w-[40%] bg-thema1 mt-5 mb-10 rounded-xl shadow-md pt-10 pb-10">
          <Carousel images={wineDetails.wineImages} />
        </div>
      </div>
    </div>
  )
}
