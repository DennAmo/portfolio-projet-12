import React from "react";
import { GoogleLogin } from "react-google-login";

const Login = () => {
  const onSuccess = () => {
    console.log("ok");
    sessionStorage.setItem("isLoggedIn", "true");
  };

  const onFailure = () => {
    console.log("nope");
  };

  return (
    <div className="login">
      <GoogleLogin
        buttonText={""}
        client_id={process.env.REACT_APP_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
