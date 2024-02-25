import React, { useEffect, useState } from "react"
import Modal from "../GeneralComponents/Modal"
import Axios from "axios"
import "./cellar.css"
import WineCard from "./WineCard"
import Swal from "sweetalert2"
import Spinner from "../LoadingComponents/Spinner"

export default function OnSale({ onSale, userId }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [wineDetails, setWineDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const currentYear = new Date().getFullYear()

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

  // this function is used to remove a wine from the list of wines
  const removeWineFromList = (wineId) => {
    setWineDetails(wineDetails.filter((wine) => wine._id !== wineId))
  }

  useEffect(() => {
    const fetchWinesDetails = async () => {
      try {
        const promises = onSale.map((wineId) => Axios.get(`http://localhost:3030/wines/details/${wineId}`))
        const results = await Promise.all(promises)
        const details = results.map((res) => res.data)
        setWineDetails(details)
      } catch (error) {
        console.error("Errore nel recupero dei dettagli dei vini:", error)
      }
    }

    if (onSale.length > 0) {
      fetchWinesDetails()
    }
  }, [onSale])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    const formData = new FormData(event.target)

    try {
      const response = await Axios.post("http://localhost:3030/wines/create", formData, {
        withCredentials: true,
      })

      const newWine = response.data.wine

      setWineDetails([...wineDetails, newWine]) //this will re-render the component with the new wine added

      Swal.fire({
        title: "Success!",
        text: "Wine added successfully!",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#C2479B",
        customClass: {
          popup: "custom-swal-popup",
        },
      })
      setIsModalOpen(false)
    } catch (error) {
      console.error("Failed to add wine.", error)
      Swal.fire({
        title: "Error!",
        text: "Failed to add wine🤕. Please check the fields and try again.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#C2479B",
        customClass: {
          popup: "custom-swal-popup",
        },
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="sell" className="mb-20 overflow-y-auto">
      <div className="flex justify-center">
        <div className="bg-white min-h-24 w-[70rem] rounded-3xl mt-[4rem] shadow-inner shadow-thema4">
          <div className="flex items-center gap-4 p-4 mt-2">
            <p className="text-[1.8rem] font-bold text-thema3 ml-4">On sale products</p>
            <button className="p-3 font-bold text-white rounded-full shadow-md bg-thema2" onClick={() => setIsModalOpen(true)}>
              ➕ SELL
            </button>
          </div>
          <div className="grid grid-cols-1 gap-5 mx-5 mt-10 mb-10 ml-10 sm:mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
            {wineDetails.map((wine, index) => (
              <div key={index} className="">
                <div className="flex items-center gap-3">
                  <WineCard wineName={wine.wineName} wineImages={wine.wineImages} wineId={wine._id} onWineDeleted={removeWineFromList} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {!isLoading ? (
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
              <input name="wineProducer" placeholder="Wine Producer" type="text" className="input" required />
              <input name="vintage" placeholder="Vintage" type="number" className="input" required min={1900} max={currentYear} />
              <input name="wineRegion" placeholder="Wine Region" type="text" className="input" required />
              <input name="grapes" placeholder="Grapes" type="text" className="input" required />
              <textarea name="wineDescription" placeholder="Wine Description (min 10 characters)" className="textarea" minLength={10} required />
              <input name="winePrice" placeholder="Wine Price" type="number" step="0.01" required className="input" min={0} max={1000000} />
              <input name="availableQuantity" placeholder="Available Quantity" type="number" className=" input" required min={0} />
              <input name="publisher" type="hidden" value={userId} required />
              <input name="wineImages" type="file" className=" file" required />
              <button type="submit" className="block p-2 text-center text-white rounded-lg shadow-md shadow-thema4 bg-thema3">
                Add Wine
              </button>
            </form>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[23rem]">
            <Spinner />
          </div>
        )}
      </Modal>
    </div>
  )
}
