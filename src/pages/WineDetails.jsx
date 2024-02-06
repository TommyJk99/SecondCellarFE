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
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full">
        <MyNav />
        <div className="flex flex-col items-center h-full font-poppins bg-gradient-to-t from-thema1 via-thema2 to-thema3">
          <p className="text-[2.5rem] sm:text-[3rem] font-semibold text-center text-white mt-10">{wineDetails.wineName}</p>
          <div className="pt-10 pb-10 mt-5 mb-10 shadow-md w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema1 rounded-xl">
            <Carousel images={wineDetails.wineImages} />
          </div>
          <div className=" pb-10 mt-5 mb-10 shadow-md w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema4 rounded-xl">
            <p className="text-[2.5rem] sm:text-[3rem] font-semibold text-center text-white mt-10">Description</p>
            <p className="text-[1.1rem]  mt-5 ml-10 mr-10 text-center text-white sm:ml-16 sm:mr-16">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas modi doloremque voluptatibus aliquam dolorem labore consequatur soluta
              sed natus nihil. Est vitae recusandae non doloribus ratione aperiam ullam laborum explicabo? Praesentium repellendus odit sapiente
              necessitatibus itaque natus alias nesciunt. Sed quas tempore mollitia, eius eveniet, ducimus corporis doloremque maxime asperiores, nemo
              eaque quam enim ab assumenda facilis repudiandae necessitatibus temporibus!
            </p>
          </div>
          <div className=" pb-10 mt-5 mb-10 shadow-md w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema3 rounded-xl">
            <p className="text-[2.5rem] sm:text-[3rem] font-semibold text-center text-white mt-10">Info</p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-10">
              Price: <span className="font-normal">28€</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-2">
              Seller: <span className="font-normal">{wineDetails.publisher}</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-2">
              Quantity: <span className="font-normal">2</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-2">
              Grapes: <span className="font-normal">Nebbiolo, Chardonnay, Barbera</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-2">
              Type: <span className="font-normal">red</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-2">
              {" "}
              Vintage: <span className="font-normal">2018</span>{" "}
            </p>
            <p className="text-[1.2rem] sm:text-[1.6rem] font-semibold text-center text-white mt-2">
              {" "}
              Producer: <span className="font-normal">La Tâche</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
