import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Logout from "./pages/logout";
import "./styles/App.scss";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import Shop from "./pages/shop.js";
import Aboutme from "./pages/aboutme.js";

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
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
