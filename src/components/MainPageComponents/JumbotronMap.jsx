import React from "react"
import Globe from "../../assets/svg/globe.svg"
import { motion } from "framer-motion"

export default function JumbotronGlobe() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, x: 250 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div
        className="relative pt-10 pb-10 mb-16 shadow-md shadow-thema3 w-[23rem] sm:w-[37rem] md:w-[40rem] lg:w-[40rem] xl:w-[40rem] bg-thema1 rounded-custom2"
        style={{ zIndex: 1 }}
      >
        <div className="relative z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <p className="text-[2.3rem] sm:text-[4.5rem] font-black text-white ml-10 sm:ml-20">EXPLORE the </p>
          <p className="ml-20 font-black text-white">
            <span className="font-greatVibes text-[2.8rem] sm:text-[5rem] ">Wine World</span>
          </p>
        </div>
        <img src={Globe} alt="Wine Bottle" className="absolute z-0 -translate-y-1/2 w-60 left-32 top-1/2" />
        <div className="absolute w-32 h-16 shadow-inner sm:h-32 sm:w-52 rounded-custom2 shadow-thema4 rounded-custom right-48 sm:right-16 bottom-12 bg-gradient-to-t from-thema1 to-thema2"></div>
      </div>
    </motion.div>
  )
}
