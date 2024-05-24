import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from './pages/home';
import Logout from './pages/logout'
import './styles/App.scss';
import { gapi } from "gapi-script";
import { useEffect } from "react";

const scope = "https://www.googleapis.com/auth/drive";


function App() {
useEffect(() => {
  function start() {
    gapi.client.init({
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: scope
    })
  }
  gapi.load('client:auth2', start)
})

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil" />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;