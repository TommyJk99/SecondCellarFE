import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import MyNav from "../components/GeneralComponents/MyNav"
import Carousel from "../components/BuyComponents/Carousel"
import Spinner from "../components/LoadingComponents/Spinner"
import { useScrollToTop } from "../components/MyHooks/scrollToTop"

//NEED A BUTTON TO ADD TO CART AND A CALL TO SEE IF THE USER IS LOGGED IN

export default function WineDetails() {
  const { wineName, publisher } = useParams()
  const [wineDetails, setWineDetails] = useState(null)

  useScrollToTop()

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
    return (
      <div>
        <MyNav />
        <div className="flex items-center justify-center h-screen bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <Spinner />
        </div>
      </div>
    )
  }

  // miss deatails
  if (wineDetails.error) {
    return <div className="text-center  h-full text-[5rem]">Error :( {wineDetails.error}</div>
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav />
        <div className="flex flex-col items-center h-full justify-evenly font-poppins bg-gradient-to-t from-thema2 via-thema3 to-thema4">
          <p className="text-[2.5rem] sm:text-[3rem] font-semibold text-center text-white mt-10">
            {/* I should add a button to add to cart and favorite, and a link to sign in case the user is not logged. I also need a link to the seller's page */}
            {wineDetails.wineName} <span className="text-[2.0rem] sm:text-[2.5rem]">⭐ 🛒</span>
          </p>
          <div className="pt-10 pb-10 mt-5 mb-10 shadow-inner shadow-thema3 w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema1 rounded-[50px]">
            <Carousel images={wineDetails.wineImages} />
          </div>
          <div className=" pb-10 mt-5 mb-10 shadow-inner shadow-thema4 w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema1 rounded-[50px]">
            <p className="text-[2.5rem] sm:text-[3rem] font-semibold text-center text-white mt-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Description
            </p>
            <p className="text-[1.1rem]  mt-5 ml-10 mr-10 text-center font-bold text-thema4 sm:ml-16 sm:mr-16 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas modi doloremque voluptatibus aliquam dolorem labore consequatur soluta
              sed natus nihil. Est vitae recusandae non doloribus ratione aperiam ullam laborum explicabo? Praesentium repellendus odit sapiente
              necessitatibus itaque natus alias nesciunt. Sed quas tempore mollitia, eius eveniet, ducimus corporis doloremque maxime asperiores, nemo
              eaque quam enim ab assumenda facilis repudiandae necessitatibus temporibus!
            </p>
          </div>
          <div className=" pb-10 mt-5 mb-10 shadow-inner shadow-thema4 w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema1 rounded-[50px]">
            <p className="text-[2.5rem] sm:text-[3rem] font-semibold text-center text-white mt-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Info
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-10">
              Price: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">28€</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-2">
              Seller: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{wineDetails.publisher}</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-2">
              Quantity: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-2">
              Grapes: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Nebbiolo, Chardonnay, Barbera</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-2">
              Type: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">red</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-2">
              {" "}
              Vintage: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">2018</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.3rem] font-semibold text-center text-thema4 mt-2">
              {" "}
              Producer: <span className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">La Tâche</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
