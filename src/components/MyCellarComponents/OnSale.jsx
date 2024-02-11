import React, { useEffect, useState } from "react"
import Modal from "../GeneralComponents/Modal" // Assicurati che il percorso sia corretto
import Axios from "axios"
import "./cellar.css"

export default function OnSale() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [winesOnSale, setWinesOnSale] = useState([])

  //this useEffect is used to disable scrolling when the modal is open
  useEffect(() => {
    const body = document.querySelector("body")
    if (isModalOpen) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = "visible"
    }
    return () => {
      body.style.overflow = "visible"
    }
  }, [isModalOpen])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const wineData = Object.fromEntries(formData.entries())

    try {
      const response = await Axios.post("http://localhost:3030/wines/create", wineData, {
        withCredentials: true,
      })
      alert("Wine added successfully!")
      setWinesOnSale([...winesOnSale, response.data.wine])
      setIsModalOpen(false)
    } catch (error) {
      console.error("Failed to add wine", error)
      alert("Failed to add wine.")
    }
  }

  return (
    <div className="overflow-y-auto">
      <div className="flex justify-center">
        <div className="bg-white min-h-24 w-[70rem] rounded-3xl mt-[4rem] shadow-inner shadow-thema4">
          {/* Div per titolo e bottone SELL */}
          <div className="flex items-center gap-4 p-4 mt-2">
            <p className="text-[1.8rem] font-bold text-thema3 ml-4">On sale products</p>
            <button className="p-3 font-bold text-white rounded-full bg-thema2" onClick={() => setIsModalOpen(true)}>
              ➕ SELL
            </button>
          </div>
          {/* Div per visualizzare i vini in vendita */}
          <div className="flex flex-col mb-4 ml-7">
            {winesOnSale.map((wine, index) => (
              <div key={index} className="p-2">
                <p className="text-sm">{wine.wineName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4 overflow-y-auto max-h-[23rem]">
          <p className="mb-3 font-bold">Add your Wine 🍷</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="wineName" placeholder="Wine Name" type="text" required className="input" />
            <select name="typeOfWine" required className="select">
              <option value="">Select Wine Type</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="sparkling">Sparkling</option>
              <option value="rosé">Rosé</option>
              <option value="passito">Passito</option>
            </select>
            <input name="wineProducer" placeholder="Wine Producer" type="text" className="input" />
            <input name="vintage" placeholder="Vintage" type="number" className="input" />
            <input name="wineRegion" placeholder="Wine Region" type="text" className="input" />
            <input name="grapes" placeholder="Grapes" type="text" className="input" />
            <textarea name="wineDescription" placeholder="Wine Description" className="textarea" />
            <input name="winePrice" placeholder="Wine Price" type="number" step="0.01" required className="input" />
            <input name="availableQuantity" placeholder="Available Quantity" type="number" className="input" />
            <input name="publisher" placeholder="Publisher ID" type="text" required className="input" />
            <button type="submit" className="block p-2 text-center text-white rounded-lg shadow-md shadow-thema4 bg-thema3">
              Add Wine
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}
