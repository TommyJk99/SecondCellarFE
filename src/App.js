import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Me from "./pages/Me"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import "./index.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  )
}

export default App
