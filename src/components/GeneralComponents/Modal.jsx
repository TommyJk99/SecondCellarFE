// Modal.js
import React from "react"
import close from "../../assets/svg/close.svg"

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed  inset-0 flex items-center justify-center mt-8 transition-colors ${open ? "visible bg-black/40" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-gradient-to-t from-thema1 to-white w-[22rem] sm:w-96 h-[26rem] rounded-xl shadow-md shadow-thema4/40 p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button className="absolute w-6 h-6 pb-1 rounded-lg top-2 right-2" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
