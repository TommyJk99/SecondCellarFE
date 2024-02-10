import React from "react"

export default function OnSale() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-between around items-center bg-white min-h-24 w-[70rem] rounded-3xl mt-[4rem] shadow-inner shadow-thema4">
          <p className="text-center text-[1.8rem] font-bold mt-3 text-thema3 ml-12">On sale products</p>
          <button className="p-3 mr-12 font-bold text-white rounded-full bg-thema2"> ➕ SELL</button>
        </div>
      </div>
    </div>
  )
}
