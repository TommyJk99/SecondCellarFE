import React from "react"
import axios from "axios"
import Swal from "sweetalert2"

function AddToFavoritesButton({ wineId, userId }) {
  const addToFavorites = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3030/wines/addfavorite/${wineId}/${userId}`,

        {
          withCredentials: true,
        }
      )

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Wine added successfully to favorites 😃!",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#C2479B",
        })
      }
    } catch (error) {
      console.error("Error adding wine to favorites:", error.response?.data?.message || error.message)
      Swal.fire({
        title: "Error!",
        text: "Failed to add wine to favorites 🤕",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#C2479B",
      })
    }
  }

  return <button onClick={addToFavorites}>⭐</button>
}

export default AddToFavoritesButton
