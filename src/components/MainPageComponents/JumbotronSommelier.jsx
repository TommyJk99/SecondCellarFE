import AskSommelier from "../GeneralComponents/AskSommelier"
import arrow from "../../assets/svg/arrow.svg"

export default function JumbotronSommelier() {
  return (
    <div
      className="relative pt-10 pb-10 mb-10 shadow-md shadow-thema3 w-[23rem] sm:w-[30rem] lg:w-[35rem] xl:w-[45rem] bg-thema1 rounded-custom5"
      style={{ zIndex: 1 }}
    >
      <div className="relative z-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <p className="text-[4.5rem] font-black text-white ml-20">Consult the </p>
        <p className="text-[4.5rem] font-black text-white ml-32 mt-[-1rem]">
          <span className="font-greatVibes text-[5rem]">Sommelier Bot</span>
        </p>
      </div>
      <div className="absolute z-20 right-16 bottom-32">
        <AskSommelier />
      </div>

      <img src={arrow} alt="SommelierBot" className="absolute w-32 top-20 right-40"></img>
    </div>
  )
}
