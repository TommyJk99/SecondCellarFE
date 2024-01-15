import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Me from "./pages/Me";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./auth/AuthContext";
import Authentication from "./auth/Authentication";

function App() {
  return (
    <AuthProvider>
      <Authentication /> {/* Assicurati che Authentication non usi un altro Router */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
