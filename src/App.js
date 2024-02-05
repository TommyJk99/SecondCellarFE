import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Me from "./pages/Me"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Buy from "./pages/Buy"
import "./index.css"
import WineDetails from "./pages/WineDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/me" element={<Me />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/wine/:wineName/:publisher" element={<WineDetails />} />
    </Routes>
  )
}

export default App
