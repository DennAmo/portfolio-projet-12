import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Logout = () => {

  const onSuccess = () => {
    console.log("ok")
    sessionStorage.removeItem('isLoggedIn', 'false')
  };



  return (

      <div className='logout'>
      <Header />
        <GoogleLogout
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText={"logout"}
          onLogoutSuccess={onSuccess}
          />
        <Footer />
      </div>

  );
};

export default Logout;
