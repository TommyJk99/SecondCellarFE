import React, { useState } from "react"

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-center ">
        <img src={images[currentImageIndex]} alt="Carousel" className="object-contain w-[320px] h-[320px]" />
      </div>
      <button onClick={prevImage} className="absolute p-2 text-white transform -translate-y-1/2 rounded-full shadow-md bg-thema3 left-10 top-1/2">
        Prev
      </button>
      <button onClick={nextImage} className="absolute p-2 text-white transform -translate-y-1/2 rounded-full shadow-md bg-thema3 right-10 top-1/2">
        Next
      </button>
    </div>
  )
}

export default Carousel
