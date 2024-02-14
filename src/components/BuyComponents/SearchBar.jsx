import React, { useState, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"
import { Link } from "react-router-dom"

const Searchbar = () => {
  const [query, setQuery] = useState("")
  const [activeSearch, setActiveSearch] = useState([])

  const searchWines = async (searchQuery) => {
    if (searchQuery === "") {
      setActiveSearch([])
      return
    }

    try {
      const url = new URL(`http://localhost:3030/wines/search`)
      url.searchParams.append("name", searchQuery)
      url.searchParams.append("page", "1")
      url.searchParams.append("limit", "8")

      const response = await axios.get(url.toString())
      setActiveSearch(response.data)
    } catch (error) {
      console.error("Errore nella ricerca dei vini:", error)
    }
  }

  //this is the debounce function
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchWines(query)
    }, 500) // this is the delay after which the search will be performed

    return () => clearTimeout(delayDebounceFn) // focus on this line!
  }, [query])

  return (
    <form className="w-[350px] sm:w-[500px] relative mt-20">
      <div className="relative">
        <input
          type="search"
          placeholder="Search your bottle here!"
          className="w-full p-8 shadow-inner rounded-custom2 focus:outline-none shadow-thema4"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" className="absolute p-4 -translate-y-1/2 rounded-full right-1 top-1/2 bg-slate-600">
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute flex flex-col w-full gap-2 px-16 py-6 text-black -translate-x-1/2 bg-white shadow-inner shadow-thema4 top-28 rounded-custom4 left-1/2">
          {activeSearch.map((wine, index) => (
            <Link to={`/buy/${encodeURIComponent(wine.wineName)}/${encodeURIComponent(wine.publisher.name)}`} key={`${wine.wineName}-${index}`}>
              <div className="flex justify-between">
                <span>{wine.wineName}</span>
                <span className="text-thema3">{wine.publisher.name}</span>
              </div>
              {/* <div className="w-full h-px bg-thema3"></div> */}
            </Link>
          ))}
        </div>
      )}
    </form>
  )
}

export default Searchbar
