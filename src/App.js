import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./pages/home";
import "./styles/App.scss";
import Aboutme from "./pages/aboutme.js";
import Projets from "./pages/projets.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Projets />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

