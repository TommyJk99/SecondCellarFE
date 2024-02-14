import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Buy from "./pages/Buy"
import "./index.css"
import WineDetails from "./pages/WineDetails"
import MyCellar from "./pages/MyCellar"
import WineWorld from "./pages/WineWorld"
import TheVine from "./pages/WineWorldPages/TheVine"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/wineworld" element={<WineWorld />} />
      <Route path="/mycellar" element={<MyCellar />} />
      <Route path="/buy/:wineName/:publisherName" element={<WineDetails />} />
      <Route path="/wineworld/the-vine" element={<TheVine />} />
    </Routes>
  )
}

export default App
