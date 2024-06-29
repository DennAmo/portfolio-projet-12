import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Logout from "./pages/logout";
import "./styles/App.scss";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Shop from "./pages/shop.js";
import Aboutme from "./pages/aboutme.js";
import Services from "./pages/services.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: process.env.REACT_APP_SCOPE,
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
