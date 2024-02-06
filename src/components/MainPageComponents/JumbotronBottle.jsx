import WineBottle from "../../assets/svg/bottle.svg"

export default function JumbotronBottle() {
  return (
    <div
      className="relative pt-10 pb-10 mt-10 mb-10 shadow-md shadow-thema3 w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[40rem] bg-thema1 rounded-custom1"
      style={{ zIndex: 1 }}
    >
      <div className="relative z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p className="text-[4.5rem] font-black text-white ml-20">BUY & </p>
        <p className="text-[4.5rem] font-black text-white ml-32 mt-[-1rem]">
          SELL <span className="font-greatVibes text-[5rem] ">Wines</span>
        </p>
      </div>
      <img src={WineBottle} alt="Wine Bottle" className="absolute z-0 -translate-y-1/2 w-60 right-32 top-1/2" />
      <div className="absolute w-40 h-32 shadow-inner shadow-thema4 rounded-custom1 left-28 top-12 bg-gradient-to-t from-thema2 to-thema3"></div>
    </div>
  )
}
