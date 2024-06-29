import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from "./pages/home";
import "./styles/App.scss";
import Shop from "./pages/shop.js";
import Aboutme from "./pages/aboutme.js";
import Services from "./pages/services.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

