import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function SellBuyWorld() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex flex-wrap gap-10 mx-6 mt-[-1rem] sm:mt-5 mb-14 justify-evenly">
        <Link
          to="/buy"
          className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom3 shadow-md  bg-thema1 border-thema3"
        >
          <p className="font-bold text-[2.0rem] sm:text-4xl text-thema3 font-poppins">Buy</p>
        </Link>

        <Link
          to="/sell"
          className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom1 shadow-md  bg-thema1 border-thema3"
        >
          <p className="font-bold text-[2.0rem] sm:text-4xl text-thema3 font-poppins">Sell</p>
        </Link>

        <Link
          to="/wineworld"
          className="flex shadow-thema3 items-center justify-center w-[280px] h-[100px] transform transition duration-500 hover:scale-110 hover:shadow-xl hover:bg-white rounded-custom2 shadow-md  bg-thema1 border-thema3"
        >
          <p className="font-bold text-[2.0rem] sm:text-4xl text-thema3 font-poppins">WineWorld</p>
        </Link>
      </div>
    </motion.div>
  )
}
