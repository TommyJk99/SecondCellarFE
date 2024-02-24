import WineBottle from "../../assets/svg/bottle.svg"
import { motion } from "framer-motion"

export default function JumbotronBottle() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -250 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div
        className="relative pt-10 pb-10 mt-24 mb-16 shadow-md shadow-thema4/60 w-[23rem] sm:w-[37rem] lg:w-[40rem] xl:w-[40rem] bg-thema1 rounded-custom1"
        style={{ zIndex: 1 }}
      >
        <div className="relative z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <p className="text-[2.3rem] sm:text-[4.5rem] font-black text-white ml-10 sm:ml-20">BUY & </p>
          <p className="text-[2.3rem] sm:text-[4.5rem] font-black text-white ml-24 sm:ml-32 mt-[-1rem]">
            SELL <span className="font-greatVibes text-[2.8rem] sm:text-[5rem] ">Wines</span>
          </p>
        </div>
        <img src={WineBottle} alt="Wine Bottle" className="absolute z-0 -translate-y-1/2 w-44 sm:w-60 right-40 sm:right-32 top-1/2" />
        <div className="absolute h-24 shadow-inner sm:h-32 w-28 sm:w-40 shadow-black/70 rounded-custom1 left-48 sm:left-28 top-12 bg-gradient-to-t from-thema3 to-thema4"></div>
      </div>
    </motion.div>
  )
}
