import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expire) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  //const [tokenExpirationTimer, setTokenExpirationTimer] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    console.log("token", token);
    //console.log("expirationTime", expirationTime);
    setToken(token);
    localStorage.setItem("token", token);
    //const remainingTime = expirationTime - Date.now();
    //const remainingTime = expirationTime;
    //setTokenExpirationTimer(setTimeout(logoutHandler, remainingTime));
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    //clearTimeout(tokenExpirationTimer);
  };

  // useEffect(() => {
  //   if (token && tokenExpirationTimer) {
  //     const remainingTime = tokenExpirationTimer - Date.now();
  //     if (remainingTime <= 0) {
  //       logoutHandler();
  //     } else {
  //       setTokenExpirationTimer(setTimeout(logoutHandler, remainingTime));
  //     }
  //   }

  //   return () => {
  //     if (tokenExpirationTimer) {
  //       clearTimeout(tokenExpirationTimer);
  //     }
  //   };
  // }, [token, tokenExpirationTimer]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
