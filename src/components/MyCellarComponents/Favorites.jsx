import React, { useEffect, useState } from "react"
import Axios from "axios"
import WineCard from "./WineCard"

export default function Favorites({ favorites, userId }) {
  const [wineDetails, setWineDetails] = useState([])

  useEffect(() => {
    const fetchWinesDetails = async () => {
      if (favorites.length > 0) {
        try {
          const promises = favorites.map((wine) => getWineDetails(wine))
          const details = await Promise.all(promises)
          setWineDetails(details.filter((detail) => detail !== null)) // Filtra eventuali null
        } catch (error) {
          console.error("Errore nel recupero dei dettagli dei vini:", error)
        }
      }
    }

    fetchWinesDetails()
  }, [favorites])

  async function getWineDetails(wineId) {
    try {
      const response = await Axios.get(`http://localhost:3030/wines/details/${wineId}`)
      return response.data // Assumiamo che i dettagli siano nel corpo della risposta
    } catch (error) {
      console.error("Error fetching wine details:", error.response ? error.response.data.message : "Server error")
      return null // Restituisci null in caso di errore, così puoi filtrare i risultati null successivamente
    }
  }

  if (wineDetails.length === 0) {
    return (
      <div id="favorites" className="mb-20 overflow-y-auto">
        <div className="flex justify-center">
          <div className="bg-white min-h-24 w-[70rem] rounded-3xl mt-[4rem] shadow-inner shadow-thema4">
            <div className="flex flex-col items-center gap-4 p-4 mt-2">
              <p className="text-[1.8rem] font-bold text-thema3 ml-4">Favorite products</p>
              <p className="mb-2 text-[1.2rem]">Your favorite list is empty 🥺</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id="favorites" className="mb-20 overflow-y-auto">
        <div className="flex justify-center">
          <div className="bg-white min-h-24 w-[70rem] rounded-3xl mt-[4rem] shadow-inner shadow-thema4">
            <p className="text-[1.8rem] font-bold text-thema3 ml-8 mt-8">Favorite products</p>
            <div className="grid grid-cols-1 gap-5 mx-5 mt-10 mb-10 ml-10 sm:mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {wineDetails.map((wine, index) => (
                <WineCard key={index} wineName={wine.wineName} wineImages={wine.wineImages} wineId={wine._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
