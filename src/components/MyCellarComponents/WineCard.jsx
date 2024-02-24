import React, { useState } from "react"
import Axios from "axios"
import Modal from "../GeneralComponents/Modal"

export default function WineCard({ wineName, wineImages, wineId, onWineDeleted }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDeleteClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const deleteWine = async (wineId) => {
    try {
      await Axios.delete(`http://localhost:3030/wines/delete/${wineId}`)
      setIsModalOpen(false)
      onWineDeleted(wineId) // this function is passed as a prop from the parent component
    } catch (error) {
      console.error("Failed to delete wine:", error)
    }
  }

  return (
    <div className="p-1 w-52 bg-gradient-to-b bg-thema1 to-thema3 rounded-xl">
      <div className="flex justify-center">
        <img src={wineImages} alt="" className="object-cover w-52 h-72 rounded-xl" />
      </div>

      <div className="p-2">
        <p className="text-[1rem] text-center text-white font-bold">{wineName}</p>
        <div className="flex justify-center mt-2">
          <button onClick={handleDeleteClick} className="px-2 py-1 shadow-md bg-thema1 rounded-xl text-thema4 text-[0.8rem]">
            Delete
          </button>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="bold text-[1.2rem] text-center  text-thema4">Are you sure you want to delete the wine?</p>
          <div className="flex gap-8 pt-8">
            {" "}
            <button className="p-4 font-bold text-white bg-thema4 rounded-2xl hover:bg-thema3" onClick={() => deleteWine(wineId)}>
              Delete
            </button>
            <button className="p-4 bg-white rounded-2xl hover:bg-thema5 hover:text-white" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
