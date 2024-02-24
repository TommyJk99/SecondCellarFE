import AskSommelier from "../GeneralComponents/AskSommelier"
import arrow from "../../assets/svg/arrow.svg"
import { motion } from "framer-motion"

export default function JumbotronSommelier() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: -250 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div
        className="relative pt-10 pb-10 mb-16 shadow-md shadow-thema3 w-[23rem] sm:w-[40rem] lg:w-[45rem] xl:w-[45rem] bg-thema1 rounded-custom5"
        style={{ zIndex: 1 }}
      >
        <div className="relative z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <p className="mt-4 sm:mt-0 text-[2.3rem] sm:text-[4.5rem] font-black text-white ml-10 sm:ml-20 ">CONSULT </p>
          <p className="text-[2.8rem] sm:text-[4.5rem] font-black text-white ml-20 sm:ml-32 mt-[-1rem]">
            <span className="font-greatVibes sm:text-[5rem]">Sommelier Bot</span>
          </p>
        </div>
        <div className="absolute z-20 right-16 sm:right-16 bottom-[6.4rem] sm:bottom-36 lg:bottom-32">
          <AskSommelier />
        </div>
        <div className="absolute h-16 shadow-inner w-28 sm:h-32 sm:w-52 shadow-thema4 rounded-custom3 right-32 sm:right-72 bottom-6 bg-gradient-to-t from-thema1 to-thema2"></div>
        <img src={arrow} alt="SommelierBot" className="absolute w-20 sm:w-32 top-12 sm:top-16 lg:top-20 right-36 sm:right-40"></img>
      </div>
    </motion.div>
  )
}
