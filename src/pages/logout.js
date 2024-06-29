import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const onSuccess = () => {
    console.log("ok");
    sessionStorage.removeItem("isLoggedIn", "false");
  };

  return (
    <div className="logout">
      <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={""}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
